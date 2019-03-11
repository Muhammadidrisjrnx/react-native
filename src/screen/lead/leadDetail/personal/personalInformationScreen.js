import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles,{defaultColor} from '../leadDetail.style.js';
import thumbimageStyle from '../../../../component/thumbImage/thumbimage.style.js';
import Moment from 'moment';



export default class PersonalInformationScreen extends Component {

    constructor(props){
        super(props);
        this.data = this.props.screenProps.data;

        this.screenState= this.props.screenProps.state;

        this.state = this.screenState.personal

        this.setState(
          {
            isBirthDatePickerVisible:false,
            isJoinDatePickerVisible:false
          }
        )

        this.onDropDownChangeText = (text) => {
          
        }

        this._showJoinDatePicker = () => this.setState({ isJoinDatePickerVisible: true })

        this._hideJoinDatePicker = () => this.setState({ isJoinDatePickerVisible: false })
        
        this._handleJoinDatePicked = (date) => {
          this._hideJoinDatePicker();
          strDate = Moment(date).format('DD MM YYYY')
          this.state.joinDate=strDate
        }

        this._showBirthDatePicker = () => this.setState({ isBirthDatePickerVisible: true });
    
        this._hideBirthDatePicker = () => this.setState({ isBirthDatePickerVisible: false });

        this._handleBirthDatePicked = (date) => {
          this._hideBirthDatePicker();       
          strDate = Moment(date).format('DD MM YYYY')
          this.state.dob=strDate
        }

        this._handleTextInputChange = (event, name) =>{
          this.setState({[name]:event.nativeEvent.text})
        }

    }

    render() {
        data= this.data

        return (
            <ScrollView >
              <Dropdown
                ref='level'
                label='Jabatan'
                data={LEVEL}
                value={this.state.level}
                onChangeText={this.onDropDownChangeText}
                containerStyle={{marginHorizontal:17}}
                baseColor={defaultColor.Black}/> 
                  
              <Dropdown
                  ref='branch'
                  label='Cabang'
                  data={BRANCH}
                  value={this.state.branch}
                  onChangeText={this.onDropDownChangeText}
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}/> 
              <FormLabel>Nama Lengkap Agent {'('}Sesuai Dengan KTP{')'}</FormLabel>
              <FormInput ref='name' value={this.state.name} onChange={(e) => this._handleTextInputChange(e,'name')}/>
              <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <FormLabel>Kode</FormLabel>
                  <FormInput ref='code' value={this.state.code} onChange={(e) => this._handleTextInputChange(e,'code')}/>
                </View>
                <View style={{flex:1}}>
                  <FormLabel>Join Date</FormLabel>
                  <TouchableOpacity onPress={()=>this._showJoinDatePicker()}>
                    <View pointerEvents="none">
                      <FormInput ref='joinDate' value={this.state.joinDate}/>
                    </View>
                  </TouchableOpacity>
                  <DateTimePicker
                    isVisible={this.state.isJoinDatePickerVisible}
                    onConfirm={this._handleJoinDatePicked}
                    onCancel={this._hideJoinDatePicker}/>
                </View>
              </View>
              <FormLabel>Agent Status</FormLabel>
              <FormInput ref='agentStatus' value={this.state.status} onChange={(e) => this._handleTextInputChange(e,'status')}/>
              <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}>
                  <FormLabel>Tempat Lahir</FormLabel>
                  <FormInput ref='pob' value={this.state.pob} onChange={(e) => this._handleTextInputChange(e,'pob')}/>
              </View>
              <View style={{flex:1}}>
                <FormLabel>Tanggal Lahir</FormLabel>
                <TouchableOpacity onPress={()=>this._showBirthDatePicker()}>
                  <View pointerEvents="none">
                    <FormInput ref='dob' value={this.state.dob}/>
                  </View>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isBirthDatePickerVisible}
                  onConfirm={this._handleBirthDatePicked}
                  onCancel={this._hideBirthDatePicker}
                />
              </View>
              </View>
              <Dropdown
                  ref='sex'
                  label='Jenis Kelamin'
                  data={SEX}
                  value={this.state.sex}
                  onChangeText={this.onDropDownChangeText}
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}/>
              <FormLabel>Alamat</FormLabel>
              <FormInput ref='address' value={this.state.address} onChange={(e) => this._handleTextInputChange(e,'address')}/>
              <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}>
                  <FormLabel>RT/RW/Kelurahan</FormLabel>
                  <FormInput ref='address2' value={this.state.address2} onChange={(e) => this._handleTextInputChange(e,'address2')}/>
              </View>
              <View style={{flex:1}}>
                  <FormLabel>Kecamatan</FormLabel>
                  <FormInput ref='district' value={this.state.district} onChange={(e) => this._handleTextInputChange(e,'district')}/>
              </View>
              </View>
              <FormLabel>Kota</FormLabel>
              <FormInput ref='city' value={this.state.city} onChange={(e) => this._handleTextInputChange(e,'city')}/>
              <Dropdown
                  ref='religion'
                  label='Agama'
                  data={RELIGION}
                  value={this.state.religion}
                  onChangeText={this.onDropDownChangeText}
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}/>
              <FormLabel>No. KTP</FormLabel>
              <FormInput ref='idCardNo' value={this.state.idCardNo} onChange={(e) => this._handleTextInputChange(e,'idCardNo')}/>
              <Dropdown
                  ref='education'
                  label='Pendidikan Terakhir'
                  data={EDUCATION}
                  value={this.state.education}
                  onChangeText={this.onDropDownChangeText}
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}/>

                <FormLabel>Status Perkawinan</FormLabel>
                <FormInput value={this.state.maritalStatus} onChange={(e) => this._handleTextInputChange(e,'maritalStatus')}/>
                <FormLabel>Pekerjaan</FormLabel>
                <FormInput value={this.state.occupation} onChange={(e) => this._handleTextInputChange(e,'ocuppation')}/>
                <FormLabel>Jumlah Tanggungan</FormLabel>
                <FormInput value={this.state.dependent} onChange={(e) => this._handleTextInputChange(e,'depeendent')}/>
                <FormLabel>No. HP</FormLabel>
                <FormInput value={this.state.phone} onChange={(e) => this._handleTextInputChange(e,'phone')}/>
                <FormLabel>Email</FormLabel>
                <FormInput value={this.state.email} onChange={(e) => this._handleTextInputChange(e,'email')}/>
            </ScrollView>
        );
    }
  }

  const LEVEL = [
    {
      value:'1',
      label:'EFC'
    },
    {
      value:'2',
      label:'BM'
    },
    {
      value:'3',
      label:'ABD'
    },
    {
      value:'4',
      label:'AD'
  }
];

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

const SEX = [
  {
    value:'M',
    label:'Pria'
  },
  {
    value:'F',
    label:'Perempuan'
  }
];

const RELIGION = [
  {
    value:'1',
    label:'Islam'
  },
  {
    value:'2',
    label:'Kristen Katolik'
  },
  {
    value:'3',
    label:'Kristen Protestan'
  },
  {
    value:'4',
    label:'Buddha'
  },
  {
    value:'5',
    label:'Hindu'
  },
  {
    value:'6',
    label:'Konghucu'
  }
];

const EDUCATION = [
  {
    value:'1',
    label:'SD'
  },
  {
    value:'2',
    label:'SLTP'
  },
  {
    value:'3',
    label:'SLTA'
  },
  {
    value:'4',
    label:'D1'
  },
  {
    value:'5',
    label:'D2'
  },
  {
    value:'6',
    label:'D3'
  },
  {
    value:'7',
    label:'S1'
  },
  {
    value:'8',
    label:'S2'
  },
  {
    value:'9',
    label:'S3'
  }
];
