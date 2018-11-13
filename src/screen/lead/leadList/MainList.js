import React,{PureComponent,Component} from 'react';
import {View,Text,FlatList,TouchableHighlight,Animated, Dimensions, PanResponder, ToastAndroid} from 'react-native';

import {ScaledSheet,scale,moderateScale,verticalScale} from 'react-native-size-matters';

import {colors} from '../../../helper/style/defaultStyle.js';
import {ds_LeadListItem} from '../../../helper/data.js'
import { Toast } from 'native-base';

const {width} = Dimensions.get('window');

class MyListItem extends PureComponent {
    constructor(props) {
        super(props);
    
        this.gestureDelay = -35;
        this.scrollViewEnabled = true;
    
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onPanResponderTerminationRequest: (evt, gestureState) => true,
          onPanResponderMove: (evt, gestureState) => {
              // this.setScrollViewEnabled(gestureState.dx > 35);
            if (gestureState.dx > 35) {
              let newX = gestureState.dx + this.gestureDelay;
              position.setValue({x: newX, y: 0});
            } else {

            }
          },
          onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx < 150) {
              Animated.timing(this.state.position, {
                toValue: {x: 0, y: 0},
                duration: 150,
              }).start(() => {
                this.setScrollViewEnabled(true); 
              });
            } else {
              Animated.timing(this.state.position, {
                toValue: {x: width/2, y: 0},
                duration: 300,
              }).start(() => {
                ToastAndroid.show(this.props.id,ToastAndroid.SHORT);
                this.props.success(this.props.id);
                this.setScrollViewEnabled(true);
              });
            }
          },
        });
    
        this.panResponder = panResponder;
        this.state = {position};
      }
    _onPress = () => {
      this.props.onPressItem(this.props.id);
      this.props.flatListRef.scrollToOffset({offset:100});
    };

    setScrollViewEnabled(enabled) {
        if (this.scrollViewEnabled !== enabled) {
          this.props.setScrollEnabled(enabled);
          this.scrollViewEnabled = enabled;
        }
      }
  
    render() {
      const textColor = this.props.selected ? colors.Yellow : colors.White;
      return (
        <View style={{marginLeft: -100,}}>
            <Animated.View style={[this.state.position.getLayout()]} {...this.panResponder.panHandlers}>
                <View style={styles.absoluteCell}>
                    <Text style={styles.absoluteCellText}>DELETE</Text>
                </View>
                <TouchableHighlight onPress={this._onPress} style={{marginLeft:100}}>
                    
                        <View style={[styles.MyListItem_mainContainer,{backgroundColor:textColor}]}>
                            <View style={styles.MyListItem_initialLetterContainer}>
                                <Text style={styles.MyListItem_initialLetterText}>{ String(this.props.item.agt_name).substr(0,1)}</Text>
                            </View>
                            <View style={styles.MyListItem_textMainContainer}>
                                <Text style={styles.MyListItem_textTitle}>{this.props.item.agt_name}</Text>
                                {ds_LeadListItem.map((item)=>(
                                    <View key={item.id} style={styles.MyListItem_subTitleContainer}>
                                        <Text style={styles.MyListItem_textSubTitleCaption}>{item.desc}</Text>
                                        <Text style={styles.MyListItem_textSubTitle}>{this.props.item[item.field]}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    
                </TouchableHighlight>
            </Animated.View>
        </View>
      );
    }
}

export default class MainList extends PureComponent {
    state = {selected: (new Map(): Map<string, boolean>),
        refreshing: false,
        enable: true,};

    _keyExtractor = (item, index) => String(item.agt_id);

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
        // copy the map rather than modifying state.
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id)); // toggle
        return {selected};
        });
    };

    _renderItem = ({item}) => (
        <MyListItem
        id={String(item.agt_id)}
        onPressItem={this._onPressItem}
        selected={!!this.state.selected.get(item.agt_id)}
        item={item}
        success={this.success}
        setScrollEnabled={enable => this.setScrollEnabled(enable)}
        />
    );

    _renderSeparator = () => (
        <View style={styles.flatlist_separator}/>
    );

    _onRefresh = () =>{
        this.setState({refreshing: true});
        
        this.props.onRefresh().then((item)=>{
            this.setState({refreshing: false});
        });
    }

    success(key) {
        ToastAndroid.show(String(key),ToastAndroid.SHORT);
      }
    
    setScrollEnabled(enable) {
    this.setState({
        enable,
    });
    }

    render() {
    
        return (
        <FlatList
            ref={(ref) => { this.flatListRef = ref;}}
            data={this.props.data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._renderSeparator}
            contentContainerStyle={styles.flatlist}
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            removeClippedSubviews={true}
            scrollEnabled={this.state.enable}
            flatItem={this.flatListRef}
        />
        );
    }
}

const styles = ScaledSheet.create({
    flatlist:{
        //borderRadius:'15@s',
        backgroundColor:colors.White,
    },
    MyListItem_mainContainer:{
        flex:1,
        flexDirection:'row',
        padding:'10@s',
        //borderRadius:'15@s',
    },
    flatlist_separator:{
        backgroundColor:colors.Grey,
        width:'100%',
        height:'1@vs'
    },
    MyListItem_initialLetterContainer:{
        width:'50@s',
        height:'50@s',
        borderRadius:'25@s',
        backgroundColor:colors.Red,
        justifyContent:'center',
        alignItems:'center'
    },
    MyListItem_initialLetterText:{
        color:colors.White,
        fontSize:'20@s',
        marginBottom:'3@s'
    },
    MyListItem_textMainContainer:{
        paddingLeft:'10@s',
        flex:1
    },
    MyListItem_textTitle:{
        fontSize:'15@s',
        marginBottom:'5@vs',
        fontWeight:'400'
    },
    MyListItem_subTitleContainer:{
        flex:1,
        flexDirection:'row',
        marginBottom:'3@vs',
        justifyContent:'space-between'
    },
    MyListItem_textSubTitle:{
        color:colors.Grey,
        fontSize:'10@s',
    },
    MyListItem_textSubTitleCaption:{
        color:colors.Grey,
        fontSize:'10@s',
    },
    absoluteCell: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      absoluteCellText: {
        margin: 16,
        color: '#FFF',
      },
})