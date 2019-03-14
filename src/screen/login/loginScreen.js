import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import {Form, Input, Item, Icon, Button} from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation'

import styles,{color} from './login.style.js';
import MainBody from '../../component/mainBody/mainBody.js'
import {updateToken,authToken ,agentLogin} from '../../services/authService.js'
import {getNews} from '../../services/contentService'
import { HEADER } from '../../class/global.js';

Header = () => {
    return (
    <View style={styles.header}>
        <Image style={styles.imageTitle} source={require('../../../resource/image/title_white.png')}/>
    </View>
    )
}

Login = (props) => {
    return(
        <View style={styles.loginContainer}>
            <Text style={styles.loginTextTitle}>SIGN IN</Text>
            <Form style={styles.loginForm}> 
                <Item style={styles.formItem}>
                    <Icon style={styles.inputIcon} name='person' type='MaterialIcons'/>
                    <Input placeholderTextColor={color.White} style={styles.input} placeholder="Agent Code"/>
                </Item>
                <Item style={styles.formItem}>
                    <Icon style={styles.inputIcon} name='lock-open' type='MaterialIcons'/>
                    <Input placeholderTextColor={color.White} style={styles.input} placeholder="Password" />
                </Item>
            </Form>
            <Button bordered transparent style={styles.loginButton} onPress={props.onPress}>
                <Text style={styles.loginText}>LOGIN</Text>
            </Button>
        </View>
    )
}

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        
        authToken().then((res) => {
            global.token= res.id_token
        });
    }


    static navigationOptions = {
        header:null
    }

    _ButtonOnPress = () => {
        resetAction = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'BusinessOpportunity'})]
        })
        this.props.navigation.dispatch(resetAction)
        /*
        getNews().then((res) => {
            console.warn(JSON.stringify(res))
        });*/ 

        /*agentLogin().then((res) => {
            console.warn(JSON.stringify(res))
        });*/
    }

    render()
    {
        return(
            <View style={styles.mainContainer}>
                <Header/>
                <MainBody source={require('../../../resource/image/bg.jpg')} style={styles.mainBody}>
                    <Login onPress={this._ButtonOnPress} />
                </MainBody>
            </View>
        )
    }
}