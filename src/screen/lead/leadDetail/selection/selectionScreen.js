import React, { Component } from 'react';
import {FlatList,View, Text, TouchableOpacity, ToastAndroid, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import {Rating,FormLabel,FormInput,FormValidationMessage} from 'react-native-elements'
import {scale,verticalScale} from 'react-native-size-matters';

import styles,{defaultColor} from './selectionScreen.style.js';

const SECTIONS = [];

setSection =() => {
        for(i =0 ; i< global.selections.length;i++){
            SECTIONS[i] = {
            'id': String(global.selections[i].id),
            'title': global.selections[i].selectionCategory
            };
    }
}
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

        this._renderListItem = this._renderListItem.bind(this);
    }

    // setRef = (ref) => {
    //     this.ratingRefs.push(ref);
    //   };

    componentDidMount(){
        setSection();
        ToastAndroid.show(String(SECTIONS.length), ToastAndroid.SHORT);
    }

    ratingCompleted(rating, id) {
        ToastAndroid.show(`Rating=${rating} - id=${id}`,ToastAndroid.SHORT);
      }

   _renderListItem = ({item}) =>{
        return(
            <View key={item.id}  style={styles.selection_accordionHeader}>
                <Text style={styles.selection_accordionHeaderTitle}>{item.title}</Text>
                    <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={scale(30)}
                    style={{ paddingVertical: scale(10) , alignSelf:'center'}} 
                    onFinishRating={(rating)=>{this.ratingCompleted(rating, item.id)}} />    
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
            </View>
        )
    }
}

