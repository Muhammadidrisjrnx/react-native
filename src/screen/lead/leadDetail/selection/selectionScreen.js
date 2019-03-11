import React, { Component } from 'react';
import {FlatList,View, Text, TouchableOpacity, ToastAndroid, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import {Rating,FormLabel,FormInput,FormValidationMessage} from 'react-native-elements'
import {scale,verticalScale} from 'react-native-size-matters';

import styles,{defaultColor} from './selectionScreen.style.js';

export default class SelectionScreen extends Component {
    state = {
        activeSections: [],
    }

    constructor(props){
        super(props);
    }

    _renderHeader(section, index, isActive, sections) {
        return (
        //   <Animatable.View
        //     duration={300}
        //     transition="backgroundColor"
        //     style={[{ backgroundColor: (isActive ? defaultColor.White : defaultColor.Red) }, styles.selection_accordionHeader]}>
        //         <Text >{section.title}</Text>
        //   </Animatable.View>
        <View style={styles.selection_accordionHeader}>
            <Text style={styles.selection_accordionHeaderTitle}>{section.title}</Text>
            <Rating
                type="star"
                startingValue={3}
                ratingCount={5}
                imageSize={scale(30)}
                style={{ paddingVertical: scale(10) , alignSelf:'center'}}
                />
            <FormLabel labelStyle={{marginLeft:scale(5)}}>Remarks</FormLabel>
            <FormInput containerStyle={{width:'100%',marginLeft:0}}/>
        </View>
        );
      }

    _renderContent(section, i, isActive, sections) {
        return (
            //<this._renderAgentSection/>
          <View style={styles.selection_accordionContentContainer}>
                {/* <Text >{section.title}</Text> */}
                {section.content.map((data)=>{
                    return(
                        <Text key={data.index} style={styles.selection_accordionContentText}>{data}</Text>
                    )
                })}
            </View>
        );
    }

   _renderListItem = ({item}) =>{
        return(
            <View style={styles.selection_accordionHeader}>
                <Text style={styles.selection_accordionHeaderTitle}>{item.title}</Text>
                <Rating
                    type="star"
                    startingValue={3}
                    ratingCount={5}
                    imageSize={scale(30)}
                    style={{ paddingVertical: scale(10) , alignSelf:'center'}}
                    />
                <FormLabel labelStyle={{marginLeft:scale(5)}}>Remarks</FormLabel>
                <FormInput containerStyle={{width:'100%',marginLeft:0}}/>
            </View>
        )
    }

    NewsList_keyExtractor = (item, index) => {
        return String(item.title);
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render(){
        return(
            <View>
                <FlatList  
                    data={SECTIONS}
                    renderItem={this._renderListItem}
                    contentContainerStyle={styles.flatlist}
                    keyExtractor={this._keyExtractor}
                    showsVerticalScrollIndicator={false}/>
            </View>
        )
    }
}

const SECTIONS = [
    {
      title: 'Kemauan yang Tinggi',
    },
    {
      title: 'Energik dan sehat',
    },
    {
      title: 'Tanggung Jawab',
    },
    {
      title: 'Kesabaran',
    },
    {
      title: 'Kemampuan bekerja dalam ketidakjelasan',
    },
    {
      title: 'Menerima masukan/pendapatan orang lain',
    },
    {
        title: 'Inisiatif/Agresivitas'
    },
    {
        title: 'Kegigihan dalam mendapatkan keinginan'
    },
    {
        title: 'Kemandirian'
    },
    {
        title: 'Kedisiplinan'
    },
    {
        title: 'Percaya diri'
    },
    {
        title: 'Bekerja dalam tekanan'
    },
    {
        title: 'Kemampuan menilai orang'
    },
    {
        title: 'Kemampuan mengatasi orang'
    },
    {
        title: 'Kemampuan mengatasi masalah'
    },
    {
        title: 'Kemampuan komunikasi'
    },
    {
        title: 'Menghargai uang'
    },
    {
        title: 'Kreativitas'
    }
  ];