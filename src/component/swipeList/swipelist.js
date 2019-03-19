import React,{Component} from 'react';
import {Modal,View,Text,TouchableOpacity,TouchableHighlight,FlatList, ToastAndroid} from 'react-native';
import {SearchBar,Icon} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import {scale,verticalScale,moderateScale} from 'react-native-size-matters';
import { Dropdown } from 'react-native-material-dropdown';

import PropTypes from 'prop-types';

import ThumbImage from '../../component/thumbImage/thumbimage.js';
import ModalSelector from '../modalSelector/modalSelector.js';

import styles,{defaultColor} from './swipelist.style.js';
import {ds_LeadListItem, ds_StatusFilter} from '../../helper/data.js';

SubItem = (props) =>{
    return(
        <View>
            {/* CONTACT NUMBER */}
            <View key={props.id} style={styles.listItem_SubTitleContainer}>
                <Text style={styles.listItem_SubTitleCaption}>Contact Number</Text>
                <Text style={styles.listItem_SubTitleValue}>: {props.item.agtMobileNumber}</Text>
            </View>
            
            {/* Status */}
            <View key={props.item.agt_id} style={styles.listItem_SubTitleContainer}>
                <Text style={styles.listItem_SubTitleCaption}>Status</Text>
                <Text style={styles.listItem_SubTitleValue}>: {props.item.status?props.item.status.statName:'-'}</Text>
            </View>

            {/* LEVEL */}
            <View key={props.item.agt_id} style={styles.listItem_SubTitleContainer}>
                <Text style={styles.listItem_SubTitleCaption}>Level</Text>
                <Text style={styles.listItem_SubTitleValue}>: {props.item.level?props.item.level.lvlName:'-'}</Text>
            </View>

            {/* EMAIL */}
            <View key={props.item.agt_id} style={styles.listItem_SubTitleContainer}>
                <Text style={styles.listItem_SubTitleCaption}>Email</Text>
                <Text style={styles.listItem_SubTitleValue}>: {props.item.agtEmail}</Text>
            </View>
        </View>
    )
}

ListItem = (props) =>{
    _onPress = () =>{
        //ToastAndroid.show(JSON.stringify(props.item),ToastAndroid.SHORT);
        props.onPress();
    }

    return(
        <TouchableHighlight style={{backgroundColor:'white'}} underlayColor={'#AAA'} onPress={_onPress}>
            <View style={styles.listItem_ColumnDivider}>
                {/*
                    props.item.agt_createdBy !=0 &&
                    <ThumbImage source={props.item.LeadImage} /> */
                }
                {/* 
                    props.item.agt_createdBy ==1 &&
                   <ThumbImage isImage={false} initialLetter={props.item.agt_name.substring(0,1)} /> */
                }
                <ThumbImage isImage={false} initialLetter={props.item.agtName.substring(0,1)} />
                <View style={styles.listItem_TextContainer}>
                    <Text style={styles.listItem_Title}>{props.item.agtName}</Text>
                    <SubItem item={props.item} />
                </View>
                <Icon type={'font-awesome'} name={'chevron-left'} iconStyle={styles.swipeIcon}/>
            </View>
        </TouchableHighlight>
    )
}

ListHiddenItem = (props) =>{
    return(
        <View style={styles.rowBack}>
            <Text>Left</Text>
            <View style={styles.hiddenButtonMainContainer}>
                <View style={styles.hiddenButtonRowDivider}>
                    <TouchableOpacity style={[styles.hiddenButton,{backgroundColor:defaultColor.Red_Alt2}]} onPress={ props.onPress_Call }>
                        <Icon type={'font-awesome'} name={'phone'} iconStyle={styles.hiddenButtonIcon}/>
                        <Text style={styles.hiddenButtonText}>Phone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{backgroundColor:defaultColor.Red_Alt4},styles.hiddenButton]} onPress={ props.onPress_Email }>
                        <Icon type={'font-awesome'} name={'envelope'} iconStyle={styles.hiddenButtonIcon}/>
                        <Text style={styles.hiddenButtonText}>Email</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hiddenButtonRowDivider}>
                    <TouchableOpacity style={[{backgroundColor:defaultColor.Red_Alt3},styles.hiddenButton]} onPress={ props.onPress_Introduction }>
                        <Icon type={'font-awesome'} name={'info-circle'} iconStyle={styles.hiddenButtonIcon}/>
                        <Text style={styles.hiddenButtonText}>Dream Board</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{backgroundColor:defaultColor.Red_Alt1},styles.hiddenButton]} onPress={ props.onPress_Schedule }>
                        <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.hiddenButtonIcon}/>
                        <Text style={styles.hiddenButtonText}>Schedule</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


SearchPanel = (props) => {
    return (
        <View style={styles.searchContainer}>
            {/* <SortModal visible={props.sortVisible} onPress={props.sortOnPress}/> */}
            <ModalSelector onRef={ref => (this.ModalSelector = ref)} 
                source={ds_StatusFilter} 
                title={'FILTER BY STATUS'} 
                selected={props.selected} 
                onSelected={props.onSelectedFilter} />

            <SearchBar        
            placeholder="Type Here..."               
            onChangeText={props.onChangeText}
            showLoading
            autoCorrect={false}
            containerStyle={styles.searchBar}
            inputStyle={styles.searchBarInput}
            style={{marginHorizontal:0,paddingHorizontal:0}}
            clearIcon/>
            <Icon name={"sort"} type={"font-awesome"} containerStyle={styles.searchSortIcon} 
                underlayColor={'transparent'} color={defaultColor.White}
                onPress={()=>{this.ModalSelector._setModalVisible(true);}}/>
        </View>   
    );  
  };

export default class SwipeList extends Component{

    constructor(props){
        super(props);
        this._keyExtractor = this._keyExtractor.bind(this);
        this._renderItem = this._renderItem.bind(this);
        this._renderHiddenItem = this._renderHiddenItem.bind(this);
        this._onRowDidOpen = this._onRowDidOpen.bind(this);
        this._closeRow = this._closeRow.bind(this);
        this._onPress = this._onPress.bind(this);
    }    

    state={refreshing: false,};

    // componentDidMount(){
    //     ToastAndroid.show(JSON.stringify(this.props.source), ToastAndroid.LONG);
    // }

    // state = {
    //     modalVisible: false,
    //   };

    // _setModalVisible = (visible) => {
    //     this.setState({modalVisible: visible});
    //     }

    _onPress = (item) =>{
        //ToastAndroid.show(JSON.stringify(item),ToastAndroid.SHORT);
        this.props.onPress(item);
    }

    _keyExtractor = (item, index) => {
        return String(item.agt_id);
    };

    _renderItem = ({item}) =>{
        return(
            <ListItem item={item} onPress={() =>this._onPress(item)}/>
        )
    }

    _renderHiddenItem =(data, rowMap) =>{
        return(
            <ListHiddenItem 
                onPress_Call ={ _ => {this._closeRow(rowMap, data.item.id); this.props.onPress_Call(data.item.agtMobileNumber)}}
                onPress_Email ={ _ => {this._closeRow(rowMap, data.item.id); this.props.onPress_Email(data.item.agtEmail)}}
                onPress_Introduction ={ _ => {this._closeRow(rowMap, data.item.id); this.props.onPress_Introduction(data.item.id)}}
                onPress_Schedule ={ _ => {this._closeRow(rowMap, data.item.id); this.props.onPress_Schedule(data.item.id)}}
                onPress={ _ => this._closeRow(rowMap, data.item.id)}
            />
        )
    }

    _renderSeparator = () => {
        return (
          <View
            style={{
              height: 2,
              width:'100%',
              backgroundColor: "#CED0CE",

            }}
          />
        );
      };

    _onRowDidOpen = (rowKey, rowMap) => {
		setTimeout(() => {
			this.closeRow(rowMap, rowKey);
		}, 2000);
    }
    
    _closeRow = (rowMap, rowKey) => {
		if (rowMap[rowKey]) {
			rowMap[rowKey].closeRow();
		}
    }

    _onRefresh = () =>{
        this.setState({refreshing: true});
        
        this.props.onRefresh().then((item)=>{
            this.setState({refreshing: false});
        });
    }

    render(){
        //<SearchPanel selected = {this.props.filter} onChangeText={this.props.onChangeText} onSelectedFilter={this.props.onFilterChange}/>
        return(
            <View style={styles.mainContainer}>
                <SearchPanel selected = {this.props.filter} onChangeText={this.props.onChangeText} onSelectedFilter={this.props.onFilterChange}/>
                <SwipeListView
                    useFlatList
                    data={this.props.source}
                    renderItem={this._renderItem}
                    renderHiddenItem={this._renderHiddenItem}
                    disableRightSwipe={true}
                    rightOpenValue={scale(-150)}
                    stopRightSwipe={scale(-150)}
                    keyExtractor = {this._keyExtractor}
                    ItemSeparatorComponent={this._renderSeparator}
                    previewOpenValue={scale(-40)}
                    previewOpenDelay={3000}
                    closeOnRowBeginSwipe={true}
                    swipeRowStyle={styles.flatlist}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                    style={{marginBottom:70}}
                />
            </View>
        )
    }
}

SwipeList.propTypes ={
    source:PropTypes.array,
    searchPanel:PropTypes.bool,
    filter:PropTypes.string,
    onPress:PropTypes.func,
    onChangeText:PropTypes.func,
    onFilterChange:PropTypes.func,
    onPress_Call:PropTypes.func,
    onPress_Email:PropTypes.func,
    onPress_Introduction:PropTypes.func,
    onPress_Schedule:PropTypes.func,
}

SwipeList.defaultProps = {
    source:[],
    searchPanel:true,
    filter:'1',
    onPress: _=>{},
    onChangeText: _ =>{},
    onFilterChange: _ =>{},
    onPress_Call:_ =>{},
    onPress_Email:_ =>{},
    onPress_Introduction:_ =>{},
    onPress_Schedule:_ =>{},
}