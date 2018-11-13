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
import {ds_LeadListItem, ds_StatusFilter} from '../../helper/data.js'

SubItem = (props) =>{
    return(
        ds_LeadListItem.map((item)=>{
            return(
                <View style={styles.listItem_SubTitleContainer}>
                    <Text style={styles.listItem_SubTitleCaption}>{item.desc}</Text>
                    <Text style={styles.listItem_SubTitleValue}>: {props.item[item.field]}</Text>
                </View>
            );
        })
    )
}

ListItem = (props) =>{
    return(
        <TouchableHighlight style={{backgroundColor:'white'}} underlayColor={'#AAA'} onPress={()=>{}}>
            <View style={styles.listItem_ColumnDivider}>
                {
                    props.item.agt_createdBy !=0 &&
                    <ThumbImage source={props.item.LeadImage} />
                }
                {
                    props.item.agt_createdBy ==1 &&
                    <ThumbImage isImage={false} initialLetter={props.item.agt_name.substring(0,1)} />
                }
                <View style={styles.listItem_TextContainer}>
                    <Text style={styles.listItem_Title}>{props.item.agt_name}</Text>
                    <SubItem item={props.item} />
                </View>
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
                    <TouchableOpacity style={[{backgroundColor:defaultColor.Red_Alt2},styles.hiddenButton]} onPress={ props.onPress_BOS }>
                        <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.hiddenButtonIcon}/>
                        <Text style={styles.hiddenButtonText}>BOS{"\n"}Schedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{backgroundColor:defaultColor.Red_Alt4},styles.hiddenButton]} onPress={ props.onPress_AAJI }>
                        <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.hiddenButtonIcon}/>
                        <Text style={styles.hiddenButtonText}>AAJI{"\n"}Schedule</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hiddenButtonRowDivider}>
                    <TouchableOpacity style={[{backgroundColor:defaultColor.Red_Alt3},styles.hiddenButton]} onPress={ props.onPress_Introduction }>
                        <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.hiddenButtonIcon}/>
                        <Text style={styles.hiddenButtonText}>Intoduction</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{backgroundColor:defaultColor.Red_Alt1},styles.hiddenButton]} onPress={ props.onPress_Selection }>
                        <Icon type={'font-awesome'} name={'list-ul'} iconStyle={styles.hiddenButtonIcon}/>
                        <Text style={styles.hiddenButtonText}>Selection</Text>
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
                onPress={()=>{this.ModalSelector._setModalVisible(true);ToastAndroid.show(props.selected,ToastAndroid.SHORT);}}/>
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

    _keyExtractor = (item, index) => {
        return String(item.agt_id);
    };

    _renderItem = ({item}) =>{
        return(
            <ListItem item={item}/>
        )
    }

    _renderHiddenItem =(data, rowMap) =>{
        return(
            <ListHiddenItem 
                onPress_BOS ={ _ => {this._closeRow(rowMap, data.item.id); this.props.onPress_BOS(data.item.agt_id)}}
                onPress_AAJI ={ _ => {this._closeRow(rowMap, data.item.id); this.props.onPress_AAJI(data.item.agt_id)}}
                onPress_Introduction ={ _ => {this._closeRow(rowMap, data.item.id); this.props.onPress_Introduction(data.item.agt_id)}}
                onPress_Selection ={ _ => {this._closeRow(rowMap, data.item.id); this.props.onPress_Selection(data.item.agt_id)}}
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
                />
            </View>
        )
    }
}

SwipeList.propTypes ={
    source:PropTypes.array,
    searchPanel:PropTypes.bool,
    filter:PropTypes.string,
    onChangeText:PropTypes.func,
    onFilterChange:PropTypes.func,
    onPress_BOS:PropTypes.func,
    onPress_AAJI:PropTypes.func,
    onPress_Introduction:PropTypes.func,
    onPress_Selection:PropTypes.func,
}

SwipeList.defaultProps = {
    source:[],
    searchPanel:true,
    filter:'1',
    onChangeText: _ =>{},
    onFilterChange: _ =>{},
    onPress_BOS:_ =>{},
    onPress_AAJI:_ =>{},
    onPress_Introduction:_ =>{},
    onPress_Selection:_ =>{},
}