import React,{Component} from 'react';
import {View,Text,FlatList, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {scale, verticalScale} from "react-native-size-matters";
import PropTypes from 'prop-types';
import {Thumbnail} from 'react-native-thumbnail-video';
import {Icon, Fab, Button} from 'native-base';

import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
// import LeadList from './leadList/leadList.js';
// import ScheduleRegistration from './scheduleRegistration/scheduleRegistration.js';
import styles,{defaultColor} from './sundayPunchScreen.style.js';

// const LeadStackRouter = createStackNavigator(
//     {
//       LeadList:LeadList,
//       Schedule:ScheduleRegistration,
//     },
//     {
//       headerMode:'none',

//       cardStyle:{backgroundColor:'transparent'}
//     }
//   )
const dataVid=[
    {
        id:1,
        desc:"Video 1",
        source:"https://www.youtube.com/watch?v=5E82hd03dRI"
    },
    {
        id:2,
        desc:"Video 2",
        source:"https://www.youtube.com/watch?v=sW-sRhauDzE"
    },
    {
        id:3,
        desc:"Video 3",
        source:"https://www.youtube.com/watch?v=iY7vDZoBbUg"
    }
];

export default class SundayPunchScreen extends Component{
    // addProps = {
    //     data: this.props.data,
    //     onPress: this.props.onPress,
    //     navigation:this.props.navigation, 
    //     }
    constructor(props) {
        super(props);
        this.state = {
          active: 'false'
        };
      }

    _keyExtractor = (item, index) => String(item.id);

    _renderItem = ({item, index}) => {

        return(
        <View key={String(item.id)} style={{width:'100%', height:verticalScale(250),backgroundColor:"white", marginBottom:verticalScale(20)}}>
            <Thumbnail url={item.source}/>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between', paddingHorizontal:scale(10)}}>
                <Text style={{fontSize:scale(15)}}>
                    {item.desc}
                </Text>
                <TouchableOpacity>
                    <Icon name="trash" type="Ionicons" style={{color:defaultColor.Red}} />
                </TouchableOpacity>
            </View>
        </View>
      )
    }

    render(){
        return(
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={true} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                <View style={styles.sundayPunch_titleContainer}>
                    <Text style={styles.sundayPunch_titleText}>Golden Nugget</Text>
                </View>
                <View style={{flex:1,paddingHorizontal:scale(10)}}>
                    <FlatList
                    data={dataVid}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    // ItemSeparatorComponent={()=><View style={{width:'100%',height:verticalScale(20),backgroundColor:'transparent'}}></View>}
                    style={{flex:1}}
                    />
                </View>
                <Fab 
                    active={this.state.active}
                    direction="up"
                    position="bottomRight" 
                    style={{backgroundColor:'white'}} 
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="add" style={{color:defaultColor.Red}}/>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon name="folder" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                        <Icon name="logo-youtube" />
                    </Button>
                </Fab>
            </MainBody>
        )
    }
}