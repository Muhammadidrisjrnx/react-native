import React, {Component} from 'react';
import {FlatList,View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import PropTypes from 'prop-types';

import styles from './schedulePicker.style.js';


export default class SchedulePickerList extends Component{
    constructor(props){
        super(props);
    }
    _onPress = () =>{
        this.props.navigation.navigate('Detail');
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
        return(
            <View>
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