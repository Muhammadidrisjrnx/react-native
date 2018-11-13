import React,{Component} from 'react';
import {FlatList, View, Text,TouchableOpacity, ToastAndroid,Modal, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements'

import PropTypes from 'prop-types';

import styles from './modalSelector.style.js';

ModalSelector_ListItem = (props) =>{
    _onPress = (index) =>{
        ToastAndroid.show(String(index),ToastAndroid.SHORT);
        props.onPress(false);
        props.onSelected(String(index));
    }

    return(
        <TouchableOpacity key={props.data.id} onPress={()=>_onPress(props.data.id)}>
            <View style={styles.listItemContainer}>
                <Icon name={String(props.selected) === String(props.data.id)?'ios-radio-button-on':'ios-radio-button-off'} 
                    type={'ionicon'} 
                    iconStyle={styles.listItemIcon}/>
                <Text style={styles.listItemText}>
                    {props.data.desc}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

ModalSelector_Title = (props) =>{
    return(
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
                {props.text}
            </Text>
        </View>
    )
}

export default class ModalSelector extends Component{
    constructor(props){
        super(props);
        this._renderTitle = this._renderTitle.bind(this);
        this._renderListItem = this._renderListItem.bind(this);
        this._setModalVisible = this._setModalVisible.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this)
      }
      
    componentWillUnmount() {
    this.props.onRef(undefined)
    }

    state = {
        modalVisible: false,
      };

    _renderTitle = (props) =>{
        return(
            <ModalSelector_Title text={props.title}/>
        )
    }
    
    _renderListItem =(props) =>{
        return(
            <ModalSelector_ListItem data={props.data} selected={props.selected} onSelected={props.onSelected} onPress={props.onPress} />
        )
    }

    _setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
        }

    _getSelectedValue = () => {
        return (this.state.modalVisible)
    }

    render(){
        return(
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => { 
                    Alert.alert('Modal has been closed.');
                }}
                >
                <TouchableHighlight style={styles.overlay}
                    onPress={() => {
                            this._setModalVisible(!this.state.modalVisible);ToastAndroid.show(this.props.selected,ToastAndroid.SHORT);
                            }}>
                    <Text></Text>
                </TouchableHighlight>
                <View style={styles.mainContainer}>
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            data = {this.props.source}
                            renderItem = {({item}) => (<this._renderListItem data={item} 
                                selected={this.props.selected} onSelected={this.props.onSelected} onPress={()=>{this._setModalVisible(false)}}/>)}
                            ListHeaderComponent ={() => (<this._renderTitle title={this.props.title}/>)}
                            style={styles.flatlist}
                        />
                    </View>
                    {/* <View style={{width:scale(300),backgroundColor:'white',position:'absolute'}}>
                        <Text>Hello Wo rld!</Text>

                        <TouchableHighlight
                            onPress={() => {
                            props.onPress(!props.visible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View> */}
                </View>
            </Modal>
        )
    }
}

ModalSelector.propTypes={
    source:PropTypes.array.isRequired,
    title:PropTypes.string,
    selected:PropTypes.string,
    onSelected:PropTypes.func,
}

ModalSelector.defaultProps={
    source:[],
    title:'Selector Title',
    selected:'',
    onSelected:_=>{}
}