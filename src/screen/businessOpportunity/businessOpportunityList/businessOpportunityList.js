import React, {Component} from 'react';
import {FlatList,View, Text, Image,TouchableOpacity,AsyncStorage,ToastAndroid} from 'react-native';
import {colors} from '../../../helper/style/defaultStyle.js';
import {Icon, Fab, Button} from 'native-base';

import styles from './businessOpportunityList.style.js';
import {ds_BusinessOpportunity} from '../../../helper/data.js';
import Agent from '../../../class/agent.js';

export default class BusinessOpportunityList extends Component{

    constructor(props){
        super(props);
        
        c_agent = new Agent;

        c_agent.getLead().then((item)=>{ToastAndroid.show(JSON.stringify(item),ToastAndroid.SHORT)});
        
    }

    

    BusinessOpportunityList_renderSeparator = () =>{
         return(
             <View style={styles.separator}/>
         )
    }

    BusinessOpportunityList_keyExtractor = (item, index) => {
        return String(item.BusinessOpportunityId);
    };

    BusinessOpportunityList_renderListItem = ({item}) =>{
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail',{selectedId:item.businessOpportunityId})}>
            <View key={item.businessOpportunityId} style={styles.listItem_mainContainer}>
                <Image source={item.businessOpportunityImage} style={styles.listItem_Image}/>
                <View style={styles.listItem_footer}>
                    <Text style={styles.listItem_title}>{item.businessOpportunityTitle.toUpperCase()}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }


    render(){
        return(
            <View style={{flex:1}}>
                <FlatList
                    
                    data={ds_BusinessOpportunity}
                    renderItem={this.BusinessOpportunityList_renderListItem}
                    ItemSeparatorComponent={this.BusinessOpportunityList_renderSeparator}
                    contentContainerStyle={styles.flatlist}
                    keyExtractor={this.BusinessOpportunityList_keyExtractor}
                    showsVerticalScrollIndicator={false}
                />

                <Fab 
                    active={true}
                    direction="up"
                    position="bottomRight" 
                    style={{backgroundColor:'white'}} 
                    onPress={() => {this.props.navigation.navigate('LeadDetail')}}>
                    <Icon name="add" style={{color:colors.Red}}/>
                </Fab>
            </View>
        )
    }
}