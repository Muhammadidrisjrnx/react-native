import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView,Modal} from 'react-native';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles,{defaultColor} from '../leadDetail.style.js';
import thumbimageStyle from '../../../../component/thumbImage/thumbimage.style.js';
import Moment from 'moment';

import { requiredValidator, lengthValidator, emailValidator, phoneValidator,ktpValidator } from '../../../../helper/validator.js';


export default class PersonalInformationScreen extends Component {

    constructor(props){
        super(props)

        this.data = this.props.screenProps.data;

        this.screenState= this.props.screenProps.state;

        this.isSubmittable = this.props.screenProps.isSubmittable;

        this.state = this.screenState.personal

        this.props.screenProps.setTabNav({nav:this.props.navigation})

        console.warn("isSubmit : "+this.isSubmittable)

//        this.state.tabNav = this.props.navigation

        this.onDropDownChangeText = (type,text) => {
          obj = {}
          switch(type){
            case 'level':
              obj =global.levels.find(x => x.id === text)
              break;
            case 'agtSex':
              obj = text
              break;
            case 'city':
              obj = global.cities.find(x => x.id === text)
            break;
            case 'religion':
              obj = global.religions.find(x => x.id === text)
            break;
            case 'education':
              obj = global.educations.find(x => x.id === text)
            break;
            case 'agtMaritalStatus':
              obj = text
            break;
            case 'branch':
              obj = global.branches.find(x => x.id === text)
            break;
            case 'agtDependentTotal':
              obj = text
            break;
          }

          this.changeState(type,obj)

          console.warn(this.state[type]);
        }

        this._showJoinDatePicker = () => this.setState({ isJoinDatePickerVisible: true })

        this._hideJoinDatePicker = () => this.setState({ isJoinDatePickerVisible: false })
        
        this._handleJoinDatePicked = (date) => {
          this._hideJoinDatePicker();
          strDate = Moment(date).format('YYYY-MM-DD')
        
          this.changeState('agtJoinDate',strDate)          
        }

        this._showBirthDatePicker = () => this.setState({ isBirthDatePickerVisible: true });
    
        this._hideBirthDatePicker = () => this.setState({ isBirthDatePickerVisible: false });

        this._handleBirthDatePicked = (date) => {
          this._hideBirthDatePicker();       
          strDate = Moment(date).format('YYYY-MM-DD')
          this.changeState('agtDob',strDate)          
        }

        this._handleTextInputChange = (event, name) =>{
          this.changeState(name,event.nativeEvent.text)
        }

        this.changeState= (name,value)=>{
          console.warn('change state : '+name+" - "+value)
          //value = value.toUpperCase()
          this.setState({[name]:value},() => {

            console.warn(name+" : "+this.state[name])

            data = this.state
            delete data.isBirthDatePickerVisible
            delete data.isJoinDatePickerVisible
            delete data.drop_level
            delete data.drop_religion
            delete data.drop_education
            delete data.drop_city
            delete data.drop_branch
            /*if(name==='agtJoinDate' || name==='agtDob'){
              data[name] = Moment(this.state[name]).format('YYYY-MM-DD')
              console.warn(name+" : "+data[name])
            }*/
            this.props.screenProps.textInputHandler('personal',data)
          })
        }

        this.levelOptions = [];
        this.religionOptions = [];
        this.educationOptions = [];
        this.cityOptions = [];
        this.occupationOptions = [];
        this.branchOptions = [];

        this.generateDropdown()
    }

    generateDropdown(){

      this.state.drop_level = this.state.level ? this.state.level.id : '';
      this.state.drop_religion = this.state.religion? this.state.religion.id : '';
      this.state.drop_education = this.state.education? this.state.education.id : '';
      this.state.drop_city = this.state.city? this.state.city.id : '';
      this.state.drop_occupation = this.state.occupation? this.state.occupation.id : '';
      this.state.drop_branch = this.state.branch ? this.state.branch.id : '';

      if(!this.state.agtSex) this.state.agtSex = ''
      if(!this.state.agtMaritalStatus) this.state.agtMaritalStatus = ''
      if(!this.state.agtDependentTotal) this.state.agtDependentTotal = ''

      //levels
      for(i =0 ; i< global.levels.length;i++){
        this.levelOptions [i] = {
          'value': global.levels[i].id,
          'label': global.levels[i].lvlName.toUpperCase()
        };
      }

      //cities
      for(i =0 ; i< global.cities.length;i++){
        this.cityOptions [i] = {
          'value': global.cities[i].id,
          'label': global.cities[i].cityName.toUpperCase()
        };
      }

      //religions
      for(i =0 ; i< global.religions.length;i++){
        this.religionOptions [i] = {
          'value': global.religions[i].id,
          'label': global.religions[i].reliName.toUpperCase()
        };
      }

      //educations
      for(i =0 ; i< global.educations.length;i++){
        this.educationOptions [i] = {
          'value': global.educations[i].id,
          'label': global.educations[i].eduName.toUpperCase()
        };
      }

      //occupation
      for(i =0 ; i< global.occupations.length;i++){
        this.occupationOptions [i] = {
          'value': global.occupations[i].id,
          'label': global.occupations[i].ocuName.toUpperCase()
        };
      }

      //branch
      for(i =0 ; i< global.branches.length;i++){
        this.branchOptions [i] = {
          'value': global.branches[i].id,
          'label': global.branches[i].brcName.toUpperCase()
        };

      }
    }

    render() {
        data= this.data;

        return (
            <ScrollView >
              <Dropdown
                label='Jabatan'
                data={this.levelOptions}
                value={this.state.drop_level}
                onChangeText={(text) => {this.onDropDownChangeText('level',text)}}
                containerStyle={{marginHorizontal:17}}
                baseColor={defaultColor.Black}
                disabled={!this.isSubmittable}/> 
              <FormValidationMessage>{requiredValidator(this.state.level)?'':'Wajib diisi'}</FormValidationMessage>
                  
              <Dropdown
                  label='Cabang'
                  data={this.branchOptions}
                  value={this.state.drop_branch}
                  onChangeText={(text) => {this.onDropDownChangeText('branch',text)}}
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}
                  disabled={!this.isSubmittable}/> 
              <FormValidationMessage>{requiredValidator(this.state.branch)?'':'Wajib diisi'}</FormValidationMessage>

              <FormLabel>Nama Lengkap Agent {'('}Sesuai Dengan KTP{')'}</FormLabel>
              <FormInput
                autoCapitalize="characters"
                value={this.state.agtName}
                onChange={(e) => this._handleTextInputChange(e,'agtName')}
                editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 
              <FormValidationMessage>{lengthValidator(this.state.agtName,1,50)?'':'Harus diisi. Maks 50 karakter'}</FormValidationMessage>
              
              <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <FormLabel>Kode</FormLabel>
                  <FormInput ref='code' value={this.state.agtCode} editable={false} selectTextOnFocus={false}/>
                </View>
                <View style={{flex:1}}>
                  <FormLabel>Join Date</FormLabel>
                  <TouchableOpacity disabled={true}>
                    <View pointerEvents="none">
                      <FormInput ref='joinDate' value={this.state.agtJoinDate}/>
                    </View>
                  </TouchableOpacity>
                  <DateTimePicker
                    isVisible={this.state.isJoinDatePickerVisible}
                    onConfirm={this._handleJoinDatePicked}
                    onCancel={this._hideJoinDatePicker}/>
                </View>
              </View>
              <FormLabel>Agent Status</FormLabel>
              <FormInput value={this.state.status.statName.toUpperCase()} editable={false} selectTextOnFocus={false}/>
              <FormLabel>Remark</FormLabel>
              <FormInput value={this.state.agtAddr3} editable={false} selectTextOnFocus={false}/>
              <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}>
                  <FormLabel>Tempat Lahir</FormLabel>
                  <FormInput
                    value={this.state.agtPob}
                    autoCapitalize="characters"
                    onChange={(e) => this._handleTextInputChange(e,'agtPob')}
                    editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 
                    
                  <FormValidationMessage>{lengthValidator(this.state.agtPob,1,20)?'':'Wajib diisi. Maks 20 karakter'}</FormValidationMessage>              
              </View>
              <View style={{flex:1}}>
                <FormLabel>Tanggal Lahir</FormLabel>
                <TouchableOpacity disabled={!this.isSubmittable} onPress={()=>this._showBirthDatePicker()}>
                  <View pointerEvents="none">
                    <FormInput
                      autoCapitalize="characters"
                      value={this.state.agtDob}
                      editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 
                     <FormValidationMessage>{requiredValidator(this.state.agtDob)?'':'Wajib diisi'}</FormValidationMessage>
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
                  value={this.state.agtSex}
                  onChangeText={(text) => {this.onDropDownChangeText('agtSex',text)}}
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}
                  disabled={!this.isSubmittable}/> 

              <FormValidationMessage>{requiredValidator(this.state.agtSex)?'':'Wajib diisi'}</FormValidationMessage>

              <FormLabel>Alamat</FormLabel>
              <FormInput 
                autoCapitalize="characters"
                value={this.state.agtAddr1}
                onChange={(e) => this._handleTextInputChange(e,'agtAddr1')}
                editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 

              <FormValidationMessage>{lengthValidator(this.state.agtAddr1,1,30)?'':'Wajib diisi. Maks. 30 karakter'}</FormValidationMessage>

              <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}>
                  <FormLabel>RT/RW/Kelurahan</FormLabel>
                  <FormInput 
                    autoCapitalize="characters"
                    value={this.state.agtAddr2}
                    onChange={(e) => this._handleTextInputChange(e,'agtAddr2')}
                    editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 

                  <FormValidationMessage>{lengthValidator(this.state.agtAddr2,1,30)?'':'Wajib diisi. Maks. 30 karakter'}</FormValidationMessage>

              </View>
              <View style={{flex:1}}>
                  <FormLabel>Kecamatan</FormLabel>
                  <FormInput 
                    autoCapitalize="characters"
                    value={this.state.agtDistrict}
                    onChange={(e) => this._handleTextInputChange(e,'agtDistrict')}
                    editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/> 
                    
                  <FormValidationMessage>{lengthValidator(this.state.agtDistrict,1,30)?'':'Wajib diisi. Maks. 30 karakter'}</FormValidationMessage>
              </View>
              </View>
              <Dropdown
                  label='Kota'
                  data={this.cityOptions}
                  value={this.state.drop_city}
                  onChangeText={(text) => {this.onDropDownChangeText('city',text)}}
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}
                  disabled={!this.isSubmittable}/> 
                  
                <FormValidationMessage>{requiredValidator(this.state.city)?'':'Wajib diisi'}</FormValidationMessage>

              <Dropdown
                  ref='religion'
                  label='Agama'
                  data={this.religionOptions}
                  value={this.state.drop_religion}
                  onChangeText={(text) => {this.onDropDownChangeText('religion',text)}}
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}
                  disabled={!this.isSubmittable}/> 
                  
                <FormValidationMessage>{requiredValidator(this.state.religion)?'':'Wajib diisi'}</FormValidationMessage>

              <FormLabel>No. KTP</FormLabel>
              <FormInput 
                autoCapitalize="characters"
                keyboardType="numeric"
                value={this.state.agtIdCardNo}
                onChange={(e) => this._handleTextInputChange(e,'agtIdCardNo')}
                editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}
                /> 
                
              <FormValidationMessage>{ktpValidator(this.state.agtIdCardNo)?'':'Wajib diisi angka, maks 20 karakter'}</FormValidationMessage>

              <Dropdown
                  ref='education'
                  label='Pendidikan Terakhir'
                  data={this.educationOptions}
                  value={this.state.drop_education}
                  onChangeText={(text) => {this.onDropDownChangeText('education',text)}}                  
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}
                  disabled={!this.isSubmittable}/> 

              <FormValidationMessage>{requiredValidator(this.state.education)?'':'Wajib diisi'}</FormValidationMessage>
              
              <Dropdown
                  ref='marital'
                  label='Status Pernikahan'
                  data={MARITAL_STATUS}
                  value={this.state.agtMaritalStatus}
                  onChangeText={(text) => {this.onDropDownChangeText('agtMaritalStatus',text)}}                  
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}
                  disabled={!this.isSubmittable}/> 

              <FormValidationMessage>{requiredValidator(this.state.agtMaritalStatus)?'':'Wajib diisi'}</FormValidationMessage>

              <Dropdown
                  label='Jumlah Tanggungan'
                  data={DEPENDENT_TOTAL}
                  value={this.state.agtDependentTotal}
                  onChangeText={(text) => {this.onDropDownChangeText('agtDependentTotal',text)}}                  
                  containerStyle={{marginHorizontal:17}}
                  baseColor={defaultColor.Black}
                  disabled={!this.isSubmittable}/> 
              <FormValidationMessage>{requiredValidator(this.state.agtDependentTotal)?'':'Wajib diisi'}</FormValidationMessage>
              

                <FormLabel>No. HP</FormLabel>
                <FormInput 
                  autoCapitalize="characters"
                  keyboardType="phone-pad"
                  value={this.state.agtMobileNumber}
                  onChange={(e) => this._handleTextInputChange(e,'agtMobileNumber')}
                  editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/>
                  

                <FormValidationMessage>{phoneValidator(this.state.agtMobileNumber)?'':'No. Telpon antara 8-15, angka saja'}</FormValidationMessage>

                <FormLabel>Email</FormLabel>
                <FormInput
                  autoCapitalize="characters" 
                  value={this.state.agtEmail} 
                  onChange={(e) => this._handleTextInputChange(e,'agtEmail')}
                  editable={this.isSubmittable} selectTextOnFocus={this.isSubmittable}/>
                <FormValidationMessage>{emailValidator(this.state.agtEmail)?'':'Email Tidak Valid'}</FormValidationMessage>
            </ScrollView>
        );
    }
  }

const SEX = [
  {
    value:'M',
    label:'PRIA'
  },
  {
    value:'F',
    label:'PEREMPUAN'
  },
];

const MARITAL_STATUS = [
  {
    value:'M',
    label:'MENIKAH'
  },
  {
    value:'S',
    label:'BELUM MENIKAH'
  },
  {
    value:'D',
    label:'BERCERAI'
  }
];

const DEPENDENT_TOTAL = [
  {
    value:'0',
    label:'0'
  },
  {
    value:'1',
    label:'1'
  },
  {
    value:'2',
    label:'2'
  },
  {
    value:'3',
    label:'3'
  }
]