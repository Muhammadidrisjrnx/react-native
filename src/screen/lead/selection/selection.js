import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ToastAndroid, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import {Rating,FormLabel,FormInput,FormValidationMessage} from 'react-native-elements'
import {scale,verticalScale} from 'react-native-size-matters';

import styles,{defaultColor} from './selection.style.js';

export default class Selection extends Component {
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
                ratingCount={10}
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

    _updateSections = activeSections => {
        ToastAndroid.show(JSON.stringify(activeSections),ToastAndroid.SHORT);
        this.setState({ activeSections });
      };

    render(){
        return(
            <View>
                <ScrollView>
                    <Accordion
                        sections={SECTIONS}
                        activeSections={this.state.activeSections}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent} 
                        onChange={this._updateSections}
                        />
                </ScrollView>
            </View>
        )
    }
}

const SECTIONS = [
    {
      title: 'Achievement Drive',
      content: [
          'Pertanyaan 1',
          'Pertanyaan 2',
          'Pertanyaan 3',
          'Pertanyaan 4',
          'Pertanyaan 5',
      ]
    },
    {
      title: 'Thread Of Discontent',
      content: [
        'Pertanyaan 1',
        'Pertanyaan 2',
        'Pertanyaan 3',
        'Pertanyaan 4',
        'Pertanyaan 5',
    ]
    },
    {
      title: 'Money Motivated',
      content: [
        'Pertanyaan 1',
        'Pertanyaan 2',
        'Pertanyaan 3',
        'Pertanyaan 4',
        'Pertanyaan 5',
    ]
    },
    {
      title: 'Integrity',
      content: [
        'Pertanyaan 1',
        'Pertanyaan 2',
        'Pertanyaan 3',
        'Pertanyaan 4',
        'Pertanyaan 5',
    ]
    },
    {
      title: 'Energy Level',
      content: [
        'Pertanyaan 1',
        'Pertanyaan 2',
        'Pertanyaan 3',
        'Pertanyaan 4',
        'Pertanyaan 5',
    ]
    },
    {
      title: 'Learning Ability',
      content: [
        'Pertanyaan 1',
        'Pertanyaan 2',
        'Pertanyaan 3',
        'Pertanyaan 4',
        'Pertanyaan 5',
    ]
    }
  ];