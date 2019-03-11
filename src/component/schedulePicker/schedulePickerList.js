import React, {Component} from 'react';
import {FlatList,View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import PropTypes from 'prop-types';
import {verticalScale,scale} from 'react-native-size-matters';
import styles,{defaultColor} from './schedulePicker.style.js';

export default class SchedulePickerList extends Component{
    constructor(props){
        super(props);
        this.state = {
            typeSelected:0,
            branch:'1',
        };
        this.onButtonPress = this.onButtonPress.bind(this);

    }
    _onPress = () =>{
        this.props.navigation.navigate('Detail');
    }

    onButtonPress = (buttonIndex) => {
        this.setState({
          typeSelected: buttonIndex
        });
      }

    SchedulePicker_RenderListItem = ({item}) => {
        return(
            <TouchableOpacity key={item.id} style={styles.listItem_TouchableOpac} onPress={this._onPress}>
                <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.listItem_leftIcon} />
                <View style={styles.listItem_textContainer}>
                    <Text style={styles.listItem_textTitle}>{String(item.scheduleDate)}</Text>
                    <Text style={styles.listItem_textSubTitle}>{item.scheduleCity}</Text>
                </View>
                <Icon type={'font-awesome'} name={'angle-right'} iconStyle={styles.listItem_rightIcon}/>
            </TouchableOpacity>
        )
    }

    SchedulePicker_RenderHeader = () => {

    }

    SchedulePicker_keyExtractor = (item, index) => {
        return String(item.scheduleId);
    };

    SchedulePicker_renderSeparator = () => {
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

    render(){

        let selectedButton ={borderBottomWidth:verticalScale(2),borderBottomColor:'white'};


        return(
            <View>
                <View style={styles.schedule_buttonTypeContainer}>
                    <TouchableOpacity style={[styles.schedule_buttonType,this.state.typeSelected==0 && selectedButton]} onPress={() => this.onButtonPress(0)}>
                        <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.schedule_buttonTypeIcon}/>
                        <Text style={styles.schedule_buttonText}>BOS Schedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.schedule_buttonType,this.state.typeSelected==1 && selectedButton]} onPress={() => this.onButtonPress(1)}>
                        <Icon type={'font-awesome'} name={'calendar'} iconStyle={styles.schedule_buttonTypeIcon}/>
                        <Text style={styles.schedule_buttonText}>AAJI Schedule</Text>
                    </TouchableOpacity>
                </View>
                <Dropdown
                    ref={this.branchRef}
                    label='Cabang'
                    data={BRANCH}
                    value={this.state.branch}
                    onChangeText={this.onDropDownChangeText}
                    containerStyle={{marginHorizontal:scale(15)}}
                    textColor={'white'}
                    itemTextStyle={{color:defaultColor.Red}}
                    />
                <FlatList
                    data={this.props.screenProps.data}
                    renderItem = {this.SchedulePicker_RenderListItem}
                    //ListHeaderComponent = {this.SchedulePicker_RenderHeader}
                    ItemSeparatorComponent={this.SchedulePicker_renderSeparator}
                    style={styles.flatlist}
                />
            </View>
        )
    }
}

SchedulePickerList.propTypes={
    data: PropTypes.array,
    onPress: PropTypes.func
}

SchedulePickerList.defaultProps={
    data:[],
    onPress:_=>{}
}

const BRANCH = [
    {
      value:'1',
      label:'Jakarta',
      desc:''
    },
    {
      value:'2',
      label:'Medan',
      desc:''
    },
    {
      value:'3',
      label:'Balikpapan',
      desc:''
    },
    {
      value:'4',
      label:'Bandung',
      desc:''
    }
];
