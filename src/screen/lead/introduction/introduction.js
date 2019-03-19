import React,{Component} from 'react';
import {FlatList, View, Text, TouchableOpacity, AsyncStorage, ToastAndroid, StyleSheet, Animated,ScrollView,Alert,Image,Slider} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './introduction.style.js';
import Panel from './Panel';
import { FormLabel,FormInput } from 'react-native-elements';

export default class introduce_page extends Component {
  constructor(props) {
    super(props);
    this.state={
      // new house
      isHiddenNewHouse:false,
      realize_new_house:1,
      inflation_rate_new_house:3,
      interest_rate_new_house:8,
      cost_new_house:0,
      allocated_new_house:0,
      calculated_future_new_house:0,
      calculated_monthly_saving_new_house:0,
      opacity_new_house:1,
      hitung:0,
      touch_disable:false,
      // new car
      isHiddenNewCar:false,
      realize_new_car:1,
      inflation_rate_new_car:3,
      interest_rate_new_car:8,
      cost_new_car:0,
      allocated_new_car:0,
      calculated_future_new_car:0,
      calculated_monthly_saving_new_car:0,
      opacity_new_car:1,
      // education
      isHiddenEducation:false,
      realize_education:1,
      inflation_rate_education:3,
      interest_rate_education:8,
      cost_education:0,
      allocated_education:0,      
      calculated_future_education:0,
      calculated_monthly_saving_education:0,
      opacity_education:1,
      // holiday
      isHiddenHoliday:false,
      realize_holiday:1,
      inflation_rate_holiday:3,
      interest_rate_holiday:8,
      cost_holiday:0,
      allocated_holiday:0,
      calculated_future_holiday:0,
      calculated_monthly_saving_holiday:0,
      opacity_holiday:1,
      // others
      isHiddenOthers:false,
      realize_others:1,
      inflation_rate_others:3,
      interest_rate_others:8,
      cost_others:0,
      allocated_others:0,
      calculated_future_others:0,
      calculated_monthly_saving_others:0,
      opacity_others:1,
      // get marriage
      isHiddenGetMarriage:false,
      realize_get_marriage:1,
      inflation_rate_get_marriage:3,
      interest_rate_get_marriage:8,
      cost_get_marriage:0,
      allocated_get_marriage:0,
      calculated_future_get_marriage:0,
      calculated_monthly_saving_get_marriage:0,
      opacity_get_marriage:1,
    }
  }

  showToast = () => {
    ToastAndroid.show('Max 3 Goals!',ToastAndroid.SHORT);
  }

  new_house=()=>{
    if(this.state.isHiddenNewHouse)
    {
      this.setState({isHiddenNewHouse:false})
      this.setState({opacity_new_house:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenNewHouse:true})
      this.setState({opacity_new_house:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
    else
    {
      this.showToast();
    }
  }
  new_car=()=>{
    if(this.state.isHiddenNewCar)
    {
      this.setState({isHiddenNewCar:false})
      this.setState({opacity_new_car:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenNewCar:true})
      this.setState({opacity_new_car:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
    else
    {
      this.showToast();
    }
  }
  education=()=>{
    if(this.state.isHiddenEducation)
    {
      this.setState({isHiddenEducation:false})
      this.setState({opacity_education:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenEducation:true})
      this.setState({opacity_education:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
    else
      this.showToast();
    
  }
  holiday=()=>{
    if(this.state.isHiddenHoliday)
    {
      this.setState({isHiddenHoliday:false})
      this.setState({opacity_holiday:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenHoliday:true})
      this.setState({opacity_holiday:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
    else
      this.showToast();
    
  }
  others=()=>{
    if(this.state.isHiddenOthers)
    {
      this.setState({isHiddenOthers:false})
      this.setState({opacity_others:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenOthers:true})
      this.setState({opacity_others:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
    else
      this.showToast();
    
  }
  get_marriage=()=>{
    if(this.state.isHiddenGetMarriage)
    {
      this.setState({isHiddenGetMarriage:false})
      this.setState({opacity_get_marriage:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenGetMarriage:true})
      this.setState({opacity_get_marriage:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
    else
      this.showToast();
    
  }
  calculate_new_house=()=>{
      var inflation_rate = (1+(this.state.inflation_rate_new_house/100))
      var factor_inflation =Math.pow(inflation_rate,this.state.realize_new_house)
      var amount_required = this.state.cost_new_house*factor_inflation
      var yearly_saving = amount_required-factor_inflation
      var amount_balanced = this.state.allocated_new_house*factor_inflation
      var future_need_gap = amount_required-amount_balanced
      var future_round = Math.round(future_need_gap)
      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      var future = numberWithCommas(future_round);
      this.setState({calculated_future_new_house:future})
      function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
        if(rate_per_period != 0.0){
            // Interest rate exists
            var q = Math.pow(1 + rate_per_period, number_of_payments);
            return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
    
        } else if(number_of_payments != 0.0){
            // No interest rate, but number of payments exists
            return -(future_value + present_value) / number_of_payments;
        }
        return 0;
    }
    var monthly_saving = -pmt((this.state.interest_rate_new_house/100),this.state.realize_new_house,0,future_round,0);
    var monthly = monthly_saving/12;
    var monthly_round = Math.round(monthly);
    var format = numberWithCommas(monthly_round);
    this.setState({calculated_monthly_saving_new_house:format})
  }
  calculate_new_car=()=>{
    var inflation_rate = (1+(this.state.inflation_rate_new_car/100))
    var factor_inflation =Math.pow(inflation_rate,this.state.realize_new_car)
    var amount_required = this.state.cost_new_car*factor_inflation
    var yearly_saving = amount_required-factor_inflation
    var amount_balanced = this.state.allocated_new_car*factor_inflation
    var future_need_gap = amount_required-amount_balanced
    var future_round = Math.round(future_need_gap)
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var future = numberWithCommas(future_round);
    this.setState({calculated_future_new_car:future})
  
    function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
      if(rate_per_period != 0.0){
          // Interest rate exists
          var q = Math.pow(1 + rate_per_period, number_of_payments);
          return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
  
      } else if(number_of_payments != 0.0){
          // No interest rate, but number of payments exists
          return -(future_value + present_value) / number_of_payments;
      }
      return 0;
  }
 
  // var result = pmt(0.08,12,-2708945684,0,1);
  var monthly_saving = -pmt((this.state.interest_rate_new_car/100),this.state.realize_new_car,0,future_round,0);
  var monthly = monthly_saving/12;
  var monthly_round = Math.round(monthly);
  var format = numberWithCommas(monthly_round);
  this.setState({calculated_monthly_saving_new_car:format})
}
  calculate_education=()=>{
    var inflation_rate = (1+(this.state.inflation_rate_education/100))
    var factor_inflation =Math.pow(inflation_rate,this.state.realize_education)
    var amount_required = this.state.cost_education*factor_inflation
    var yearly_saving = amount_required-factor_inflation
    var amount_balanced = this.state.allocated_education*factor_inflation
    var future_need_gap = amount_required-amount_balanced
    var future_round = Math.round(future_need_gap)
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var future = numberWithCommas(future_round);
    this.setState({calculated_future_education:future})
  
    function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
      if(rate_per_period != 0.0){
          // Interest rate exists
          var q = Math.pow(1 + rate_per_period, number_of_payments);
          return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
  
      } else if(number_of_payments != 0.0){
          // No interest rate, but number of payments exists
          return -(future_value + present_value) / number_of_payments;
      }
      return 0;
  }
  // var result = pmt(0.08,12,-2708945684,0,1);
  var monthly_saving = -pmt((this.state.interest_rate_education/100),this.state.realize_education,0,future_round,0);
  var monthly = monthly_saving/12;
  var monthly_round = Math.round(monthly);
  var format = numberWithCommas(monthly_round);
  this.setState({calculated_monthly_saving_education:format})
}
  calculate_holiday=()=>{
    var inflation_rate = (1+(this.state.inflation_rate_holiday/100))
    var factor_inflation =Math.pow(inflation_rate,this.state.realize_holiday)
    var amount_required = this.state.cost_holiday*factor_inflation
    var yearly_saving = amount_required-factor_inflation
    var amount_balanced = this.state.allocated_holiday*factor_inflation
    var future_need_gap = amount_required-amount_balanced
    var future_round = Math.round(future_need_gap)
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var future = numberWithCommas(future_round);
    this.setState({calculated_future_holiday:future})
  
    function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
      if(rate_per_period != 0.0){
          // Interest rate exists
          var q = Math.pow(1 + rate_per_period, number_of_payments);
          return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
  
      } else if(number_of_payments != 0.0){
          // No interest rate, but number of payments exists
          return -(future_value + present_value) / number_of_payments;
      }
      return 0;
  }
  // var result = pmt(0.08,12,-2708945684,0,1);
  var monthly_saving = -pmt((this.state.interest_rate_holiday/100),this.state.realize_holiday,0,future_round,0);
  var monthly = monthly_saving/12;
  var monthly_round = Math.round(monthly);
  var format = numberWithCommas(monthly_round);
  this.setState({calculated_monthly_saving_holiday:format})
}
  calculate_others=()=>{
    var inflation_rate = (1+(this.state.inflation_rate_others/100))
    var factor_inflation =Math.pow(inflation_rate,this.state.realize_others)
    var amount_required = this.state.cost_others*factor_inflation
    var yearly_saving = amount_required-factor_inflation
    var amount_balanced = this.state.allocated_others*factor_inflation
    var future_need_gap = amount_required-amount_balanced
    var future_round = Math.round(future_need_gap)
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var future = numberWithCommas(future_round);
    this.setState({calculated_future_others:future})
  
    function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
      if(rate_per_period != 0.0){
          // Interest rate exists
          var q = Math.pow(1 + rate_per_period, number_of_payments);
          return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
  
      } else if(number_of_payments != 0.0){
          // No interest rate, but number of payments exists
          return -(future_value + present_value) / number_of_payments;
      }
      return 0;
  }
  // var result = pmt(0.08,12,-2708945684,0,1);
  var monthly_saving = -pmt((this.state.interest_rate_others/100),this.state.realize_others,0,future_round,0);
  var monthly = monthly_saving/12;
  var monthly_round = Math.round(monthly);
  var format = numberWithCommas(monthly_round);
  this.setState({calculated_monthly_saving_others:format})
}
  calculate_get_marriage=()=>{
    var inflation_rate = (1+(this.state.inflation_rate_get_marriage/100))
    var factor_inflation =Math.pow(inflation_rate,this.state.realize_get_marriage)
    var amount_required = this.state.cost_get_marriage*factor_inflation
    var yearly_saving = amount_required-factor_inflation
    var amount_balanced = this.state.allocated_get_marriage*factor_inflation
    var future_need_gap = amount_required-amount_balanced
    var future_round = Math.round(future_need_gap)
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var future = numberWithCommas(future_round);
    this.setState({calculated_future_get_marriage:future})
  
    function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
      if(rate_per_period != 0.0){
          // Interest rate exists
          var q = Math.pow(1 + rate_per_period, number_of_payments);
          return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
  
      } else if(number_of_payments != 0.0){
          // No interest rate, but number of payments exists
          return -(future_value + present_value) / number_of_payments;
      }
      return 0;
  }
  // var result = pmt(0.08,12,-2708945684,0,1);
  var monthly_saving = -pmt((this.state.interest_rate_get_marriage/100),this.state.realize_get_marriage,0,future_round,0);
  var monthly = monthly_saving/12;
  var monthly_round = Math.round(monthly);
  var format = numberWithCommas(monthly_round);
  this.setState({calculated_monthly_saving_get_marriage:format})
}
  send_simulation_new_house=()=>{
    
  }
  send_simulation_new_car=()=>{
    
  }
  send_simulation_education=()=>{

  }
  send_simulation_holiday=()=>{

  }
  send_simulation_others=()=>{

  }
  send_simulation_get_marriage=()=>{

  }
  untouch_home=()=>{
    if(this.state.isHiddenNewHouse)
    {
      this.setState({isHiddenNewHouse:false})
      this.setState({opacity_new_house:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenNewHouse:true})
      this.setState({opacity_new_house:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
  }
  untouch_car=()=>{
    if(this.state.isHiddenNewCar)
    {
      this.setState({isHiddenNewCar:false})
      this.setState({opacity_new_car:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenNewCar:true})
      this.setState({opacity_new_car:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
  }
  untouch_education=()=>{
    if(this.state.isHiddenEducation)
    {
      this.setState({isHiddenEducation:false})
      this.setState({opacity_education:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenEducation:true})
      this.setState({opacity_education:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
  }
  untouch_holiday=()=>{
    if(this.state.isHiddenHoliday)
    {
      this.setState({isHiddenHoliday:false})
      this.setState({opacity_holiday:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenHoliday:true})
      this.setState({opacity_holiday:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
  }
  untouch_others=()=>{
    if(this.state.isHiddenOthers)
    {
      this.setState({isHiddenOthers:false})
      this.setState({opacity_others:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenOthers:true})
      this.setState({opacity_others:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
  }
  untouch_marriage=()=>{
    if(this.state.isHiddenGetMarriage)
    {
      this.setState({isHiddenGetMarriage:false})
      this.setState({opacity_get_marriage:1})
      this.setState({hitung:this.state.hitung-1})
    }
    else if (this.state.hitung < 3)
    {
      this.setState({isHiddenGetMarriage:true})
      this.setState({opacity_get_marriage:0.4})
      this.setState({hitung:this.state.hitung+1})
    }
  }

  _onPress = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (

      <View style={styles.detail_mainContainer}>
      <TouchableOpacity style={styles.detail_headerBackButton} onPress={this._onPress}>
          <Icon type={'font-awesome'} name={'angle-left'} iconStyle={styles.detail_headerIcon}/>
          <Text style={styles.detail_headerText}>Back</Text>
      </TouchableOpacity>

      <ScrollView style={{top:10}}>
      <Text style={{marginTop:10,flexDirection:'row',alignSelf:'center'}}>Apa 3 mimpi utama untuk Anda dan orang orang yang</Text>
      <Text style={{marginTop:10,flexDirection:'row',alignSelf:'center'}}>Anda cintai?</Text>
      <Text style={{marginTop:10,marginBottom:15,color:'#d3d3d3',flexDirection:'row',alignSelf:'center'}}>Pilih maksimal 3 mimpi</Text>
      <View style={{flexDirection:'column',alignSelf:'center'}}>
      <TouchableOpacity
      onPress={this.new_house}
      disabled={this.state.touch_disable}>
      <View
      style={{
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:80,
      }}>
      <Image source={require('./icons/drawable-xhdpi/1.png')}
      style={{flex:1,resizeMode:'contain',opacity:this.state.opacity_new_house}}/>
      <Text style={{opacity:this.state.opacity_new_house}}>Rumah baru</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={{position:'relative'}}>
      <View style={{position:'absolute',marginLeft:20}}>
      <TouchableOpacity
      onPress={this.new_car}
      disabled={this.state.touch_disable}>
      <View
      style={{
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:80,
      }}>
      <Image source={require('./icons/drawable-xhdpi/2.png')}
      style={{flex:1,resizeMode:'contain',opacity:this.state.opacity_new_car}}/>
      <Text style={{opacity:this.state.opacity_new_car}}>Mobil Baru</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={{alignSelf:'flex-end',marginRight:20}}>
      <TouchableOpacity
      onPress={this.education}
      disabled={this.state.touch_disable}>
      <View
      style={{
        alignItems:'center',
        justifyContent:'center',
        alignContent: 'center',
        width:100,
        height:100,
      }}>
      <Image source={require('./icons/drawable-xhdpi/5.png')}
      style={{flex:1,resizeMode:'contain',opacity:this.state.opacity_education}}/>
      <Text style={{opacity:this.state.opacity_education}}>Pendidikan</Text>
      <Text style={{opacity:this.state.opacity_education}}>Anak</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'column',alignSelf:'center'}}>
      <View style={{position:'relative'}}>
      <TouchableOpacity>
      <View
      style={{
        alignItems:'center',
        justifyContent:'center',
        width:90,
        height:90,
      }}>
      <Image source={require('./icons/drawable-xhdpi/hand.png')}
      style={{flex:1,resizeMode:'contain'}}/>
      </View>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      <View style={{position:'relative'}}>
      <View style={{position:'absolute',marginLeft:20}}>
      <TouchableOpacity
      onPress={this.holiday}
      disabled={this.state.touch_disable}>
      <View
      style={{
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:80,
      }}>
      <Image source={require('./icons/drawable-xhdpi/3.png')}
      style={{flex:1,resizeMode:'contain',opacity:this.state.opacity_holiday}}/>
      <Text style={{opacity:this.state.opacity_holiday}}>Liburan</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={{alignSelf:'flex-end',marginRight:20}}>
      <TouchableOpacity
      onPress={this.others}
      disabled={this.state.touch_disable}>
      <View
      style={{
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:80,
      }}>
      <Image source={require('./icons/drawable-xhdpi/6.png')}
      style={{flex:1,resizeMode:'contain',opacity:this.state.opacity_others}}/>
      <Text style={{opacity:this.state.opacity_others}}>Lainnya</Text>
      </View>
      </TouchableOpacity>
      </View>
      </View>
      <View style={{flexDirection:'column',alignSelf:'center',marginTop:25,marginBottom:10}}>
      <TouchableOpacity
      onPress={this.get_marriage}
      disabled={this.state.touch_disable}>
      <View
      style={{
        alignItems:'center',
        justifyContent:'center',
        width:80,
        height:80,
      }}>
      <Image source={require('./icons/drawable-xhdpi/4.png')}
      style={{flex:1,resizeMode:'contain',opacity:this.state.opacity_get_marriage}}/>
      <Text style={{opacity:this.state.opacity_get_marriage}}>Menikah</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View>
      {this.state.isHiddenNewHouse?
      <View>
      <Panel title="Rumah Baru" source={require('./icons/drawable-xhdpi/trash.png')} onPress_delete={this.untouch_home}>
      <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column',flex:1}}>
        <FormLabel>Berapa dana yang dibutuhkan untuk mewujudkan mimpi tersebut ?</FormLabel>
        <FormInput
        maxLength={10}
        onChangeText={(cost)=>this.setState({cost_new_house:cost})}
        keyboardType="numeric"
        ></FormInput>
        <FormLabel>Berapa dana yang tersedia saat ini ?</FormLabel>
        <FormInput
        maxLength={9}
        onChangeText={(cost)=>this.setState({allocated_new_house:cost})}
        keyboardType="numeric"
        ></FormInput>
        <FormLabel>Kapan Anda ingin mewujudkan impian anda ?</FormLabel>
        <View style={{marginTop:15,marginBottom:5}}>
        <Slider
        step={1}
        minimumValue={1}
        maximumValue={30}
        minimumTrackTintColor="#C6281D"
        thumbTintColor="#C6281D"
        style={{width:'100%'}}
        onValueChange={(change_value)=>this.setState({realize_new_house:change_value})}
        ></Slider>
        <View style={{position:'relative',marginTop:10,marginBottom:10}}>
        <Text style={{position:'absolute',alignSelf:'flex-start'}}> 1 </Text>
        <Text style={{position:'absolute',alignSelf:'center'}}> {this.state.realize_new_house} tahun</Text>
        <Text style={{alignSelf:'flex-end'}}> 30 </Text>
        </View>
        </View>
        <FormLabel>Asumsi nilai inflasi (%)</FormLabel>
        <View style={{marginTop:10,marginBottom:5}}>
        <Slider
        step={1}
        minimumValue={3}
        maximumValue={15}
        minimumTrackTintColor="#C6281D"
        thumbTintColor="#C6281D"
        style={{width:'100%'}}  
        onValueChange={(change_value)=>this.setState({inflation_rate_new_house:change_value})}
        ></Slider>
        <View style={{position:'relative',marginTop:10,marginBottom:10}}>
        <Text style={{position:'absolute',alignSelf:'flex-start'}}>3%</Text>
        <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.inflation_rate_new_house}%</Text>
        <Text style={{alignSelf:'flex-end'}}> 15% </Text>
        </View>
        </View>
        <FormLabel>Asumsi nilai investasi (%)</FormLabel>
        <View style={{marginTop:10,marginBottom:5}}>
        <Slider
        step={1}
        minimumValue={this.state.inflation_rate_new_house}
        maximumValue={15}
        minimumTrackTintColor="#C6281D"
        thumbTintColor="#C6281D"
        style={{width:'100%'}}
        onValueChange={(change_value)=>this.setState({interest_rate_new_house:change_value})}
        ></Slider>
        <View style={{position:'relative',marginTop:10,marginBottom:10}}>
        <Text style={{position:'absolute',alignSelf:'flex-start'}}> {this.state.inflation_rate_new_house}%</Text>
        <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.interest_rate_new_house+this.state.inflation_rate_new_house-this.state.inflation_rate_new_house}%</Text>
        <Text style={{alignSelf:'flex-end'}}> 15% </Text>
        </View>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonOpac}
        onPress={this.calculate_new_house}>
                <Text style={styles.buttonText}>
                    Hitung
                </Text>
            </TouchableOpacity>
        </View>
        <FormLabel>Selisih dana yang Anda butuhkan untuk mewujudkan mimpi Anda</FormLabel>
        <View style={{marginTop:10,marginBottom:10}}>
        <Text style={{fontSize:32}}>Rp. {this.state.calculated_future_new_house}</Text>
        </View>
        <FormLabel>Jumlah dana yang perlu Anda tabung per bulan</FormLabel>
        <View style={{marginTop:10,marginBottom:10}}>
        <Text style={{fontSize:32}}>Rp. {this.state.calculated_monthly_saving_new_house}</Text>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonOpac}
        onPress={this.send_simulation_new_house}>
                <Text style={styles.buttonText}>
                    Kirim Hasil Simulasi
                </Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
      </Panel>
      </View>
      :null
      }
      </View>
      <View>
      {this.state.isHiddenNewCar?
        <Panel title="Mobil Baru" source={require('./icons/drawable-xhdpi/trash.png')} onPress_delete={this.untouch_car}>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column',flex:1}}>
          <FormLabel>Berapa dana yang dibutuhkan untuk mewujudkan mimpi tersebut ?</FormLabel>
          <FormInput
          maxLength={10}
          onChangeText={(cost)=>this.setState({cost_new_car:cost})}
          keyboardType="numeric"
          ></FormInput>
          <FormLabel>Berapa dana yang tersedia saat ini ?</FormLabel>
          <FormInput
          maxLength={9}
          onChangeText={(cost)=>this.setState({allocated_new_car:cost})}
          keyboardType="numeric"></FormInput>
          <FormLabel>Kapan anda ingin mewujudkan impian Anda ?</FormLabel>
          <View style={{marginTop:15,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={1}
          maximumValue={30}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}
          onValueChange={(change_value)=>this.setState({realize_new_car:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}> 1 </Text>
          <Text style={{position:'absolute',alignSelf:'center'}}> {this.state.realize_new_car} tahun</Text>
          <Text style={{alignSelf:'flex-end'}}> 30 </Text>
          </View>
          </View>
          <FormLabel>Asumsi nilai inflasi (%)</FormLabel>
          <View style={{marginTop:10,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={3}
          maximumValue={15}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}  
          onValueChange={(change_value)=>this.setState({inflation_rate_new_car:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}>3%</Text>
          <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.inflation_rate_new_car}%</Text>
          <Text style={{alignSelf:'flex-end'}}> 15% </Text>
          </View>
          </View>
          <FormLabel>Asumsi nilai investasi (%)</FormLabel>
          <View style={{marginTop:10,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={this.state.inflation_rate_new_car}
          maximumValue={15}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}
          onValueChange={(change_value)=>this.setState({interest_rate_new_car:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}> {this.state.inflation_rate_new_car}%</Text>
          <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.interest_rate_new_car+this.state.inflation_rate_new_car-this.state.inflation_rate_new_car}%</Text>
          <Text style={{alignSelf:'flex-end'}}> 15% </Text>
          </View>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOpac}
          onPress={this.calculate_new_car}>
                  <Text style={styles.buttonText}>
                  Hitung
                  </Text>
              </TouchableOpacity>
          </View>
          <FormLabel>Selisih dana yang Anda butuhkan untuk mewujudkan mimpi Anda</FormLabel>
          <View style={{marginTop:10,marginBottom:10}}>
          <Text style={{fontSize:32}}>Rp. {this.state.calculated_future_new_car}</Text>
          </View>
          <View style={{marginTop:10,marginBottom:10}}>
          <FormLabel>Jumlah dana yang Anda perlu tabung per bulan</FormLabel>
          <Text style={{fontSize:32}}>Rp. {this.state.calculated_monthly_saving_new_car}</Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOpac}
          onPress={this.send_simulation_new_car}>
                  <Text style={styles.buttonText}>
                  Kirim Hasil Simulasi
                  </Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
        </Panel>
          :null
        }
      </View>
      <View>
      {this.state.isHiddenEducation?
     <Panel title="Pendidikan Anak" source={require('./icons/drawable-xhdpi/trash.png')} onPress_delete={this.untouch_education}>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column',flex:1}}>
          <FormLabel>Berapa dana yang dibutuhkan untuk mewujudkan mimpi tersebut ?</FormLabel>
          <FormInput
          maxLength={10}
          onChangeText={(cost)=>this.setState({cost_education:cost})}
          keyboardType="numeric"
          ></FormInput>
          <FormLabel>Berapa dana yang tersedia saat ini ?</FormLabel>
          <FormInput
          maxLength={9}
          onChangeText={(cost)=>this.setState({allocated_education:cost})}
          keyboardType="numeric"></FormInput>
          <FormLabel>Kapan anda ingin mewujudkan impian Anda ?</FormLabel>
          <View style={{marginTop:15,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={1}
          maximumValue={30}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}
          onValueChange={(change_value)=>this.setState({realize_education:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}> 1 </Text>
          <Text style={{position:'absolute',alignSelf:'center'}}> {this.state.realize_education} tahun</Text>
          <Text style={{alignSelf:'flex-end'}}> 30 </Text>
          </View>
          </View>
          <FormLabel>Asumsi nilai inflasi (%)</FormLabel>
          <View style={{marginTop:10,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={3}
          maximumValue={15}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}  
          onValueChange={(change_value)=>this.setState({inflation_rate_education:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}>3%</Text>
          <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.inflation_rate_education}%</Text>
          <Text style={{alignSelf:'flex-end'}}> 15% </Text>
          </View>
          </View>
          <FormLabel>Asumsi nilai investasi (%)</FormLabel>
          <View style={{marginTop:10,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={this.state.inflation_rate_education}
          maximumValue={15}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}
          onValueChange={(change_value)=>this.setState({interest_rate_education:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}> {this.state.inflation_rate_education}%</Text>
          <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.interest_rate_education+this.state.inflation_rate_education-this.state.inflation_rate_education}%</Text>
          <Text style={{alignSelf:'flex-end'}}> 15% </Text>
          </View>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOpac}
          onPress={this.calculate_education}>
                  <Text style={styles.buttonText}>
                  Hitung
                  </Text>
              </TouchableOpacity>
          </View>
          <FormLabel>Selisih dana yang Anda butuhkan untuk mewujudkan mimpi Anda</FormLabel>
          <View style={{marginTop:10,marginBottom:10}}>
          <Text style={{fontSize:32}}>RP. {this.state.calculated_future_education}</Text>
          </View>
          <FormLabel>Jumlah dana yang Anda perlu tabung per bulan</FormLabel>
          <View style={{marginTop:10,marginBottom:10}}>
          <Text style={{fontSize:32}}>RP. {this.state.calculated_monthly_saving_education}</Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOpac}
          onPress={this.send_simulation_education}>
                  <Text style={styles.buttonText}>
                  Kirim Hasil Simulasi
                  </Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
        </Panel>
          :null
        }
      </View>
      <View>
      {this.state.isHiddenHoliday?
        <Panel title="Liburan" source={require('./icons/drawable-xhdpi/trash.png')} onPress_delete={this.untouch_holiday}>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column',flex:1}}>
          <FormLabel>Berapa dana yang dibutuhkan untuk mewujudkan mimpi tersebut ?</FormLabel>
          <FormInput
          maxLength={10}
          onChangeText={(cost)=>this.setState({cost_holiday:cost})}
          keyboardType="numeric"
          ></FormInput>
          <FormLabel>Berapa dana yang tersedia saat ini ?</FormLabel>
          <FormInput
          maxLength={9}
          onChangeText={(cost)=>this.setState({allocated_holiday:cost})}
          keyboardType="numeric"></FormInput>
          <FormLabel>Kapan anda ingin mewujudkan impian Anda ?</FormLabel>
          <View style={{marginTop:15,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={1}
          maximumValue={30}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}
          onValueChange={(change_value)=>this.setState({realize_holiday:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}> 1 </Text>
          <Text style={{position:'absolute',alignSelf:'center'}}> {this.state.realize_holiday} tahun</Text>
          <Text style={{alignSelf:'flex-end'}}> 30 </Text>
          </View>
          </View>
          <FormLabel>Asumsi nilai inflasi (%)</FormLabel>
          <View style={{marginTop:10,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={3}
          maximumValue={15}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}  
          onValueChange={(change_value)=>this.setState({inflation_rate_holiday:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}>3%</Text>
          <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.inflation_rate_holiday}%</Text>
          <Text style={{alignSelf:'flex-end'}}> 15% </Text>
          </View>
          </View>
          <FormLabel>Asumsi nilai investasi (%)</FormLabel>
          <View style={{marginTop:10,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={this.state.inflation_rate_holiday}
          maximumValue={15}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}
          onValueChange={(change_value)=>this.setState({interest_rate_holiday:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}> {this.state.inflation_rate_holiday}%</Text>
          <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.interest_rate_holiday+this.state.inflation_rate_holiday-this.state.inflation_rate_holiday}%</Text>
          <Text style={{alignSelf:'flex-end'}}> 15% </Text>
          </View>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOpac}
          onPress={this.calculate_holiday}>
                  <Text style={styles.buttonText}>
                  Hitung
                  </Text>
              </TouchableOpacity>
          </View>
          <FormLabel>Selisih dana yang Anda butuhkan untuk mewujudkan mimpi Anda</FormLabel>
          <View style={{marginTop:10,marginBottom:10}}>
          <Text style={{fontSize:32}}>RP. {this.state.calculated_future_holiday}</Text>
          </View>
          <FormLabel>Jumlah dana yang Anda perlu tabung per bulan</FormLabel>
          <View style={{marginTop:10,marginBottom:10}}>
          <Text style={{fontSize:32}}>RP. {this.state.calculated_monthly_saving_holiday}</Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOpac}
          onPress={this.send_simulation_holiday}>
                  <Text style={styles.buttonText}>
                  Kirim Hasil Simulasi
                  </Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
        </Panel>
          :null
        }
      </View>
      <View>
      {this.state.isHiddenOthers?
        <Panel title="Lainnya" source={require('./icons/drawable-xhdpi/trash.png')} onPress_delete={this.untouch_others}>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column',flex:1}}>
          <FormLabel>Berapa dana yang dibutuhkan untuk mewujudkan mimpi tersebut ?</FormLabel>
          <FormInput
          maxLength={10}
          onChangeText={(cost)=>this.setState({cost_others:cost})}
          keyboardType="numeric"
          ></FormInput>
          <FormLabel>Berapa dana yang tersedia saat ini ?</FormLabel>
          <FormInput
          maxLength={9}
          onChangeText={(cost)=>this.setState({allocated_others:cost})}
          keyboardType="numeric"></FormInput>
          <FormLabel>Kapan anda ingin mewujudkan impian Anda ?</FormLabel>
          <View style={{marginTop:15,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={1}
          maximumValue={30}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}
          onValueChange={(change_value)=>this.setState({realize_others:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}> 1 </Text>
          <Text style={{position:'absolute',alignSelf:'center'}}> {this.state.realize_others} tahun</Text>
          <Text style={{alignSelf:'flex-end'}}> 30 </Text>
          </View>
          </View>
          <FormLabel>Asumsi nilai inflasi (%)</FormLabel>
          <View style={{marginTop:10,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={3}
          maximumValue={15}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}  
          onValueChange={(change_value)=>this.setState({inflation_rate_others:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}>3%</Text>
          <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.inflation_rate_others}%</Text>
          <Text style={{alignSelf:'flex-end'}}> 15% </Text>
          </View>
          </View>
          <FormLabel>Asumsi nilai investasi (%)</FormLabel>
          <View style={{marginTop:10,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={this.state.inflation_rate_others}
          maximumValue={15}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}
          onValueChange={(change_value)=>this.setState({interest_rate_others:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}> {this.state.inflation_rate_others}%</Text>
          <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.interest_rate_others+this.state.inflation_rate_others-this.state.inflation_rate_others}%</Text>
          <Text style={{alignSelf:'flex-end'}}> 15% </Text>
          </View>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOpac}
          onPress={this.calculate_others}>
                  <Text style={styles.buttonText}>
                  Hitung
                  </Text>
              </TouchableOpacity>
          </View>
          <FormLabel>Selisih dana yang Anda butuhkan untuk mewujudkan mimpi Anda</FormLabel>
          <View style={{marginTop:10,marginBottom:10}}>
          <Text style={{fontSize:32}}>RP. {this.state.calculated_future_others}</Text>
          </View>
          <FormLabel>Jumlah dana yang Anda perlu tabung per bulan</FormLabel>
          <View style={{marginTop:10,marginBottom:10}}>
          <Text style={{fontSize:32}}>RP. {this.state.calculated_monthly_saving_others}</Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOpac}
          onPress={this.send_simulation_others}>
                  <Text style={styles.buttonText}>
                  Kirim Hasil Simulasi
                  </Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
        </Panel>
          :null
        }
      </View>
      <View>
      {this.state.isHiddenGetMarriage?
        <Panel title="Menikah" source={require('./icons/drawable-xhdpi/trash.png')} onPress_delete={this.untouch_marriage}>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column',flex:1}}>
          <FormLabel>Berapa dana yang dibutuhkan untuk mewujudkan mimpi tersebut ?</FormLabel>
          <FormInput
          maxLength={10}
          onChangeText={(cost)=>this.setState({cost_get_marriage:cost})}
          keyboardType="numeric"
          ></FormInput>
          <FormLabel>Berapa dana yang tersedia saat ini ?</FormLabel>
          <FormInput
          maxLength={9}
          onChangeText={(cost)=>this.setState({allocated_get_marriage:cost})}
          keyboardType="numeric"></FormInput>
          <FormLabel>Kapan anda ingin mewujudkan impian Anda ?</FormLabel>
          <View style={{marginTop:15,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={1}
          maximumValue={30}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}
          onValueChange={(change_value)=>this.setState({realize_get_marriage:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}> 1 </Text>
          <Text style={{position:'absolute',alignSelf:'center'}}> {this.state.realize_get_marriage} tahun</Text>
          <Text style={{alignSelf:'flex-end'}}> 30 </Text>
          </View>
          </View>
          <FormLabel>Asumsi nilai inflasi (%)</FormLabel>
          <View style={{marginTop:10,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={3}
          maximumValue={15}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}  
          onValueChange={(change_value)=>this.setState({inflation_rate_get_marriage:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}>3%</Text>
          <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.inflation_rate_get_marriage}%</Text>
          <Text style={{alignSelf:'flex-end'}}> 15% </Text>
          </View>
          </View>
          <FormLabel>Asumsi nilai investasi (%)</FormLabel>
          <View style={{marginTop:10,marginBottom:5}}>
          <Slider
          step={1}
          minimumValue={this.state.inflation_rate_get_marriage}
          maximumValue={15}
          minimumTrackTintColor="#C6281D"
          thumbTintColor="#C6281D"
          style={{width:'100%'}}
          onValueChange={(change_value)=>this.setState({interest_rate_get_marriage:change_value})}
          ></Slider>
          <View style={{position:'relative',marginTop:10,marginBottom:10}}>
          <Text style={{position:'absolute',alignSelf:'flex-start'}}> {this.state.inflation_rate_get_marriage}%</Text>
          <Text style={{position:'absolute',alignSelf:'center'}}>{this.state.interest_rate_get_marriage+this.state.inflation_rate_get_marriage-this.state.inflation_rate_get_marriage}%</Text>
          <Text style={{alignSelf:'flex-end'}}> 15% </Text>
          </View>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOpac}
          onPress={this.calculate_get_marriage}>
                  <Text style={styles.buttonText}>
                  Hitung
                  </Text>
              </TouchableOpacity>
          </View>
          <FormLabel>Selisih dana yang Anda butuhkan untuk mewujudkan mimpi Anda</FormLabel>
          <View style={{marginTop:10,marginBottom:10}}>
          <Text style={{fontSize:32}}>RP. {this.state.calculated_future_get_marriage}</Text>
          </View>
          <FormLabel>Jumlah dana yang Anda perlu tabung per bulan</FormLabel>
          <View style={{marginTop:10,marginBottom:10}}>
          <Text style={{fontSize:32}}>RP. {this.state.calculated_monthly_saving_get_marriage}</Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonOpac}
          onPress={this.send_simulation_get_marriage}>
                  <Text style={styles.buttonText}>
                  Kirim Hasil Simulasi
                  </Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
        </Panel>
          :null
        }
      </View>
      </ScrollView>
      </View>
);
  }
}
