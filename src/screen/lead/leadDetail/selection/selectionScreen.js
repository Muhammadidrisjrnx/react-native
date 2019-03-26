import React, { Component } from 'react';
import {FlatList,View, Text, TouchableOpacity, ToastAndroid, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import {Rating,FormLabel,FormInput,FormValidationMessage, Icon} from 'react-native-elements'
import {scale,verticalScale} from 'react-native-size-matters';

import styles,{defaultColor} from './selectionScreen.style.js';

const SECTIONS = [];


// const Rate = React.forwardRef((props,  ref) => {
//     <Rating
//         type="star"
//         ratingCount={5}
//         imageSize={scale(30)}
//         style={{ paddingVertical: scale(10) , alignSelf:'center'}} 
//         ref={ref} />    
// });

export default class SelectionScreen extends Component {
    // ratingRefs = [];

    constructor(props){
        super(props);

        this.data = this.props.screenProps.data;

        this.screenState= this.props.screenProps.state;

        this.props.screenProps.setTabNav({nav:this.props.navigation})

        this._renderListItem = this._renderListItem.bind(this);

        this.state = {
            selection:this.screenState.selection,
            totalScore:0,
        };

        this.setSection();
    }

    setSection = () => {
        
        for(i =0 ; i< global.selections.length;i++){
            let value = this.state.selection.filter((item)=>{
                return item.selection.id == global.selections[i].id;
            })

            // if(global.selections[i].id == 2201)
            // console.warn(`id:${global.selections[i].id} - score:${value[0].agtSelScore} - `+JSON.stringify(value));

            SECTIONS[i] = {
            'id': String(global.selections[i].id),
            'title': global.selections[i].selectionCategory,
            'value': value.length > 0 ? value[0].agtSelScore : 0
            };
        }
        console.warn(JSON.stringify(SECTIONS),ToastAndroid.SHORT);
    }

    updateTotalScore = () => {
        let score = SECTIONS.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)

        this.setState({
            totalScore:score
        });
    };

    updateSectionScore = (id, score) => {
        SECTIONS.some((section) =>{
            if(String(section.id) == id) {
                section.value = score;

                //console.warn(JSON.stringify(SECTIONS));

                return true;
            };
        });
    };

    // setRef = (ref) => {
    //     this.ratingRefs.push(ref);
    //   };

    // com (){
        
    //     ToastAndroid.show(String(SECTIONS.length), ToastAndroid.SHORT);
    // }

   _renderListItem = ({item}) =>{
        return(
            <View key={item.id}  style={styles.selection_accordionHeader}>
                <Text style={styles.selection_accordionHeaderTitle}>{item.title}</Text>
                    <Rating
                    type="star"
                    ratingCount={5}
                    startingValue={item.value}
                    imageSize={scale(30)}
                    style={{ paddingVertical: scale(10) , alignSelf:'center'}} 
                    onFinishRating={(rating)=>{this.updateSectionScore(item.id, rating)}} />    
            </View>
        )
    }

    // NewsList_keyExtractor = (item, index) => {
    //     return String(item.title);
    // };


    render(){
        return(
            <View>
                <FlatList  
                    data={SECTIONS}
                    renderItem={this._renderListItem}
                    contentContainerStyle={styles.flatlist}
                    //keyExtractor={this._keyExtractor}
                    showsVerticalScrollIndicator={false}/>
                <View >
                    <Text>Profil</Text>
                    <Icon name="thumbs-up" type="font-awesome"/>
                </View>
            </View>
        )
    }
}

