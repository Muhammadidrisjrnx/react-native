import React,{Component} from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight,Animated,ScrollView} from'react-native';


class Panel extends Component{
    constructor(props){
    super(props);
    this.icons = {
    'up' : require('./Arrowhead-01-128.png'),
    'down' : require('./Arrowhead-Down-01-128.png')
    };
    this.state = {
    onPress_delete:props.onPress_delete,
    source:props.source,    
    title : props.title,
    expanded : false,
    animation : new Animated.Value()
    };
    }
    toggle(){
    let initialValue = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
    finalValue = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
    this.setState({
    expanded : !this.state.expanded
    });
    this.state.animation.setValue(initialValue);
    Animated.spring(
    this.state.animation,
    {
    toValue: finalValue
    }
    ).start();
    }
    _setMaxHeight(event){
        if(!this.state.maxHeight){
        this.setState({
            maxHeight : event.nativeEvent.layout.height
            });
        }
    }
    _setMinHeight(event){
        if (!this.state.minHeight){
            this.setState({
                minHeight : event.nativeEvent.layout.height,
                animation : new Animated.Value(event.nativeEvent.layout.height)
                });
        }
    }
    render(){
    let icon = this.icons['down'];
    if(this.state.expanded){
        icon = this.icons['up'];
    }
    return (
        <Animated.View
        style={[styles.container,{height: this.state.animation}]}>
            <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
            <Text style={styles.title}>{this.state.title}</Text>
            <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1">
                <Image
                style={styles.buttonImage}
                source={icon}></Image>
            </TouchableHighlight>
            <TouchableHighlight
            style={styles.button}
            underlayColor="#f1f1f1"
            onPress={this.state.onPress_delete}>
                <Image
                style={{        
                    width:20,
                    height:20,
                    resizeMode:'contain',
                    marginTop: 5
                }}
                source={this.state.source}></Image>
            </TouchableHighlight>
        </View>
        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
        {this.props.children}
        </View>
        </Animated.View>
        );
    }
    }
    var styles = StyleSheet.create({
    container : {
    backgroundColor: '#fff',
    margin:10,
    overflow:'hidden',
    borderWidth: 2,
    borderRadius: 4,
    margin:5,
    borderColor: 'rgba(0,0,0,.2)',
    },
    titleContainer : {
    flexDirection: 'row',
    backgroundColor:'#C6281D'
    },
    title : {
    flex : 1,
    color :'#FFFFFF',
    fontWeight:'bold',
    padding: 10,
    },
    button : {
    },
    buttonImage : {
    width : 30,
    height : 25
    },
    body : {
    padding:10,
    paddingTop: 0,
    }
    });
    export default Panel;