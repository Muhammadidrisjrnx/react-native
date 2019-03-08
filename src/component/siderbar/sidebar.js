import React,{Component} from 'react';
import {View, ScrollView, Text, Image, FlatList} from 'react-native';
import {Icon, Button, Thumbnail} from 'native-base';

import style from './sidebar.style.js';

import {ds_menuData} from '../../helper/data.js';

export default class Sidebar extends Component{
    constructor(props){
        super(props);
    }

    _renderListItem = ({item})=>{
        return(
        <View style={style.listItem}>
            <Button transparent onPress={()=>this.props.navigation.navigate(item.route)} >
                <Icon active name={item.icon} style={style.listIcon}/>
                <Text style={style.listText}>{item.desc}</Text>
            </Button>
        </View>)
    }

    _keyExtractor = (item, index) => item.id;

    render(){
        return(
            <View style={style.containerMain}>
                <ScrollView>
                    <View style={style.containerHeader}>
                        <Image style={style.headerImage} source={require('../../../resource/image/title.png')} resizeMode={'contain'}/>
                    </View>
                    <View style={style.containerAvatar}>
                        <Thumbnail source={require('../../../resource/image/profile.jpg')}/>
                        <View style={style.containerAvatarText}>
                            <Text style={style.avatarMainText}>Fandi Fadillah</Text>
                            <Text style={style.avatarSubText}>fandi.fadillah@gmail.com</Text>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            data={ds_menuData}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderListItem}
                        />
                    </View>
                </ScrollView>
{/*             <View style={style.containerFooter}>
                    <Button transparent onPress={()=>this.props.navigation.navigate('Login')} >
                        <Icon active name="log-out" style={style.listIcon}/>
                        <Text style={style.listText}>Logout</Text>
                    </Button>
                </View>
                */}
            </View> 
        )
    }
}