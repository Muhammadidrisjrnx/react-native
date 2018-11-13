import React, {Component} from 'react';
import {View, Text,Image, ToastAndroid} from 'react-native';

import {_getValueById} from '../../helper/helper.js';
import MainBody from '../../component/mainBody/mainBody.js';
import Profile from '../../component/profile/profile.js';
import ThumbImage from '../../component/thumbImage/thumbimage.js'
import SwipeList from '../../component/swipeList/swipelist.js'

import {ds_LeadListData} from '../../helper/data.js'

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ds_LeadListData,
            filter: '1',
            search: '',
          };

        this.arrayholder = ds_LeadListData;

        this._searchFilterFunction = this._searchFilterFunction.bind(this);
    }

    _searchFilterFunction = text => {
        this.setState({search:text });
        this._refreshList(text,this.props.filter);
      };
    
    _updateStatusFilter = text =>{
        this.setState({filter:text });
        this._refreshList(this.props.search,text);
    }

    _refreshList = (name,status) =>{
        const newData = this.arrayholder.filter(item => {
            var nameFilter =true;
            var statusFilter =true;

            if(name==''){
                nameFilter= true;
            }else
            {
                nameFilter = `${item.LeadName.toUpperCase()}` == name.toUpperCase();
            }

            if(status==''){
                statusFilter = true;
            }else
            {
                statusFilter = item.LeadStatusId == status;
            }
            

            return nameFilter && statusFilter ;    
        });    

        this.setState({ data: newData });
    }

    render(){ 
        // alert(_getValueById("asd"));
        //ToastAndroid.show(this.state.filter,ToastAndroid.SHORT);

        return (
            <MainBody source={require('../../../resource/image/bg.jpg')}>
                <Profile imageOnly={false} source={require('../../../resource/image/profile.jpg')} name="Fandi Fadillah" group="Agency BEST"/>
                {/* <ThumbImage isImage={false} initialLetter={'W'} />
                <ThumbImage source={require('../../../resource/image/profile.jpg')} /> */}
                {/* <SwipeList source={this.state.data} onChangeText = {this._searchFilterFunction} onFilterChange={this._updateStatusFilter} filter={String(this.state.filter)}/> */}
            </MainBody>
        );
    }
}