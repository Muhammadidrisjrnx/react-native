import React,{Component} from 'react';
import {StyleSheet,View,Text,PanResponder,Animated,Dimensions,ToastAndroid} from 'react-native';
import { Toast } from 'native-base';
export default class viewport extends Component{
    constructor(props){
        super(props);
        this.state={
            pan: new Animated.ValueXY(),
            showDraggable : true,
            dropZoneValues : null,
            hitung:0
        };
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onPanResponderMove:Animated.event([null,{
                dx:this.state.pan.x,
                dy:this.state.pan.y
            }]),
            onPanResponderRelease:(e,gesture)=>{
                if(this.isDropZone(gesture)){
                    this.setState({
                        showDraggable:true,
                        hitung:this.state.hitung+=1
                    });
                    ToastAndroid.show(""+this.state.hitung,ToastAndroid.SHORT);
                    Animated.spring(
                        this.state.pan,
                        {toValue:{x:0,y:0}}
                        ).start();
                }else{
                    Animated.spring(
                    this.state.pan,
                    {toValue:{x:0,y:0}}
                    ).start();
                }
            }
        });
    }
    isDropZone(gesture){
        var dz = this.state.dropZoneValues;
        return gesture.moveY >dz.y && gesture.moveY < dz.y + dz.height;
    }
    setDropZoneValues(event){
        this.setState({
            dropZoneValues:event.nativeEvent.layout
        });
    }
    render(){
        return(
            <View style={style.mainContainer}>
                <View 
                onLayout={this.setDropZoneValues.bind(this)}
                style={style.dropZone}>
                    <Text style={style.text}>Drop me here !</Text>
                </View>
                {this.renderDraggable()}
            </View>
        );
    }
    renderDraggable(){
        if(this.state.showDraggable){
            return(
                <View style={style.draggableContainer}>
                    <Animated.View 
                    {...this.PanResponder.panHandlers}
                    style={[this.state.pan.getLayout(),style.circle]}>
                        <Text style={style.text}>Drag me!</Text>
                    </Animated.View>
                </View>
            );
        }
    }
}

let circle_radius = 36;
let window = Dimensions.get('window');
let style = StyleSheet.create({
    mainContainer:{
        flex:1
    },dropZone:{
        height:100,
        backgroundColor:'#2c3e50'
    },text:{
        marginTop:25,
        marginLeft: 5,
        marginRight: 5,
        textAlign:'center',
        color:'#fff'
    },draggableContainer:{
        position:'absolute',
        top: window.height/2 - circle_radius,
        left:window.width/2 - circle_radius
    },circle:{
        backgroundColor:'#1abc9c',
        width:circle_radius*2,
        height:circle_radius*2,
        borderRadius: circle_radius,
    }
});
