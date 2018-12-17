import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView} from 'react-native';
import {createMaterialTopTabNavigator  } from 'react-navigation';
import Moment from 'moment';
import {Dropdown} from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import PropTypes from 'prop-types';

import ThumbImage from '../../../component/thumbImage/thumbimage.js'

import styles,{defaultColor} from './leadDetail.style.js';

class PersonalInformationScreen extends Component {
    state = {
        activeSections: [],
        joinDate:'',
        focusedPicker:''
      };

    constructor(props){
        super(props);
        this.onDropDownChangeText = this.onDropDownChangeText.bind(this);
        this.onTimePickerFocus = this.onTimePickerFocus.bind(this);
  
        this.levelRef = this.updateRef.bind(this, 'level');
        this.branchRef = this.updateRef.bind(this, 'branch');
        this.sexRef = this.updateRef.bind(this, 'sex');
        this.religionRef = this.updateRef.bind(this, 'religion');
        this.educationRef = this.updateRef.bind(this, 'education');
        this.joinDateRef = this.updateRef.bind(this, 'joinDate');
        this.joinDateButtonRef = this.updateRef.bind(this, 'joinDateButton');
        this.dobRef = this.updateRef.bind(this, 'dob');
        this.dobButtonRef = this.updateRef.bind(this, 'dobButton');
        this.typographyRef = this.updateRef.bind(this, 'typography');
        //this._renderAgentSection = this.updateRef.bind(this, 'renderAgentSection');
        //this._renderContent = this._renderContent.bind(this);
        this._handleDatePicked = this._handleDatePicked.bind(this);
        //this.onTimePickerFocus = this.onTimePickerFocus.bind(this);
        //this._renderContent = this.updateRef.bind(this, 'renderContent');
  
        const data = this.props.screenProps.data;

        this.state = {
          isDateTimePickerVisible:false,
          level:data.agt_lvl_id,
          branch:data.agt_brc_id,
          sex:'M',
          religion:data.agt_reli_id,
          dob:Moment(data.agt_dob).format('DD MMM YYYY')
        };
    }

    onDropDownChangeText = (text) => {
        ['level', 'branch', 'sample', 'typography']
          .map((name) => ({ name, ref: this[name] }))
          .filter(({ ref }) => ref && ref.isFocused())
          .forEach(({ name, ref }) => {
            this.setState({ [name]: text });
          });
      }
    
      onTimePickerFocus = () => {
        this.setState({
          focusedPicker:this.props.children
        })
    
        this._showDateTimePicker();
      }
    
      updateRef = (name, ref) => {
        this[name] = ref;
      }
    
      componentWillMount(){
          //this._updateSections([0]);
      }
    
      _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    
      _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
      _handleDatePicked = (date) => {
    
        //ToastAndroid.show(this['dobButton']?'true':'false'.SHORT);
        //console.log('A date has been picked: ', date);
    
    
        this.setState({
          joinDate: Moment(date).format('DD MMM YYYY')
        });
    
        this._hideDateTimePicker();
      };


    updateRef = (name, ref) => {
        this[name] = ref;
      }

    render() {
        let {level, branch, joinDate, dob, sex, religion, education} = this.state;
        const data = this.props.screenProps.data;
        
        return (
            <ScrollView >
                <Dropdown
                    ref={this.levelRef}
                    label='Jabatan'
                    data={LEVEL}
                    value={level}
                    onChangeText={this.onDropDownChangeText}
                    containerStyle={{marginHorizontal:17}}
                    //itemTextStyle={{color:'black'}}
                    baseColor={defaultColor.Black}/> 
                    
                <Dropdown
                    ref={this.branchRef}
                    label='Cabang'
                    data={BRANCH}
                    value={branch}
                    onChangeText={this.onDropDownChangeText}
                    containerStyle={{marginHorizontal:17}}
                    baseColor={defaultColor.Black}/> 
                <FormLabel>Nama Lengkap Agent (Sesuai Dengan KTP)</FormLabel>
                <FormInput value={data.agt_name}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                    <FormLabel>Kode</FormLabel>
                    <FormInput value={data.agt_code}/>
                    </View>
                    <TouchableOpacity ref={this.joinDateButtonRef} style={{flex:1}}  onPress={this.onTimePickerFocus}>
                    <FormLabel>Join Date </FormLabel>
                    <FormInput ref={this.joinDateRef} editable={false} value={data.agt_join_date}/>
                    </TouchableOpacity>
                </View>
                <FormLabel>Agent Status</FormLabel>
                <FormInput value={String(data.agt_stat_id)} />
                <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <FormLabel>Tempat Lahir</FormLabel>
                    <FormInput value={"Jakarta"}/>
                </View>
                <TouchableOpacity ref={this.dobButtonRef} style={{flex:1}}  onPress={this.onTimePickerFocus}>
                    <FormLabel>Tanggal Lahir</FormLabel>
                    <FormInput ref={this.dobRef} editable={false} value={dob}/>
                </TouchableOpacity>
                </View>
                <Dropdown
                    ref={this.sexRef}
                    label='Jenis Kelamin'
                    data={SEX}
                    value={sex}
                    onChangeText={this.onDropDownChangeText}
                    containerStyle={{marginHorizontal:17}}
                    baseColor={defaultColor.Black}/>
                <FormLabel>Alamat</FormLabel>
                <FormInput value={data.agt_addr1}/>
                <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <FormLabel>RT/RW/Kelurahan</FormLabel>
                    <FormInput value={data.agt_addr2}/>
                </View>
                <View style={{flex:1}}>
                    <FormLabel>Kecamatan</FormLabel>
                    <FormInput value={data.agt_district}/>
                </View>
                </View>
                <FormLabel>Kota</FormLabel>
                <FormInput value={data.agt_city}/>
                <Dropdown
                    ref={this.religionRef}
                    label='Agama'
                    data={RELIGION}
                    value={religion}
                    onChangeText={this.onDropDownChangeText}
                    containerStyle={{marginHorizontal:17}}
                    baseColor={defaultColor.Black}/>
                <FormLabel>No. KTP</FormLabel>
                <FormInput value={String(data.agt_id_card_no)} />
                <Dropdown
                    ref={this.educationRef}
                    label='Pendidikan Terakhir'
                    data={EDUCATION}
                    value={education}
                    onChangeText={this.onDropDownChangeText}
                    containerStyle={{marginHorizontal:17}}
                    baseColor={defaultColor.Black}/>
            </ScrollView>
        );
    }
  }
  
  class AdditionalInformationScreen extends Component {
    render() {
        const data = this.props.screenProps.data;
        return (
            <ScrollView>
                <FormLabel>Status Perkawinan</FormLabel>
                <FormInput value={data.agt_marital_status}/>
                <FormLabel>Pekerjaan</FormLabel>
                <FormInput value={data.agt_ocu_id}/>
                <FormLabel>Jumlah Tanggungan</FormLabel>
                <FormInput value={data.agt_dependent_total}/>
                <FormLabel>No. HP</FormLabel>
                <FormInput value={data.agt_mobile_number}/>
                <FormLabel>Email</FormLabel>
                <FormInput value={data.agt_email}/>
            </ScrollView>
        );
    }
  }

  class ExperienceAndBankingInformationScreen extends Component {
    render() {
        const data = this.props.screenProps.data;
        return (
            <ScrollView>
                <FormLabel>Nama Perusahaan Asuransi (Ex)</FormLabel>
                <FormInput value={data.agt_ex_insurance_company}/>
                <FormLabel>Tgl. Mengundurkan Diri</FormLabel>
                <FormInput value={Moment(data.agt_ex_insurance_exit_date).format('DD MMM YYYY')}/>
                <FormLabel>Expired Date</FormLabel>
                <FormInput value={Moment(data.agt_ex_aaji_expired).format('DD MMM YYYY')}/>
                <FormLabel>No. Lisensi Agent</FormLabel>
                <FormInput value={data.agt_aaji_no}/>
                <FormLabel>Nama Bank</FormLabel>
                <FormInput value={data.agt_bnk_id}/>
                <FormLabel>No. Rekening</FormLabel>
                <FormInput value={data.agt_bnk_acc_no}/>
                <FormLabel>Nama Rekening</FormLabel>
                <FormInput value={data.agt_bnk_acc_name}/>
                <FormLabel>No. NPWP</FormLabel>
                <FormInput value={data.agt_tax_id}/>
            </ScrollView>
        );
    }
  }

  class RecruitInformationScreen extends Component {
    render() {
        const data = this.props.screenProps.data;
        return (
            <ScrollView>
                <FormLabel>Tipe Perekrut</FormLabel>
                <FormInput value={data.agt_leader_type}/>
                <FormLabel>Nama Perekrut</FormLabel>
                <FormInput value={data.agt_name}/>
                <FormLabel>Hubungan dengan Perekrut</FormLabel>
                <FormInput/>
                <FormLabel>Direct Leader Type</FormLabel>
                <FormInput value={data.agt_leader_type}/>
                <FormLabel>Direct Leader Name</FormLabel>
                <FormInput value={data.agt_name}/>
            </ScrollView>
        );
    }
  }

  class DocumentInformationScreen extends Component {
    render() {
      return (
        <ScrollView>
          <Text>Settings!</Text>
        </ScrollView>
      );
    }
  }
  
  const TabNavigator = createMaterialTopTabNavigator({
    Personal: {
        screen: PersonalInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Identitas Calon Agent",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'user'} iconStyle={styles.buttonIcon}/>
        })
    },
    Additional: {
        screen: AdditionalInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Informasi Tambahan",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'address-card'} iconStyle={styles.buttonIcon}/>
        })
    },
    ExperienceAndBanking: {
        screen: ExperienceAndBankingInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Pengalaman Terakhir & Informasi Bank",
            tabBarIcon:({tintColor}) => <Icon type={'octicon'} name={'clippy'} iconStyle={styles.buttonIcon}/>
        })
    },
    Recruit: {
        screen: RecruitInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Perekrut & Leader",
            tabBarIcon:({tintColor}) => <Icon type={'octicon'} name={'organization'} iconStyle={styles.buttonIcon}/>
        })
    },
    Document: {
        screen: DocumentInformationScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Dokumen",
            tabBarIcon:({tintColor}) => <Icon type={'font-awesome'} name={'file'} iconStyle={styles.buttonIcon}/>
        })
    },
    
  },{
      lazy:true,
      swipeEnabled:true,
      animationEnabled:true,
      style:{backgroundColor:'white'},
      navigationOptions:{
        gesturesEnabled:true
      },
      tabBarOptions:{
          showIcon:true,
          showLabel:false,
          style:{
              backgroundColor:'white'
          },
          indicatorStyle:{
              backgroundColor:defaultColor.Red
          }
      }
  });

export default class LeadDetail extends Component{


    constructor(props){
        super(props);

        
    }

    
    onPressApprove = () =>{

    }

    onPressReject = () =>{

    }

    render(){
        const data = this.props.navigation.getParam('data',[]);
        
        //ToastAndroid.show(data.agt_name, ToastAndroid.SHORT);
        return(
            <View style={{flex:1}}>
                <TabNavigator screenProps={{data:data, state:this.state}}/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonOpac}>
                        <Text style={styles.buttonText}>
                            Approve
                        </Text>
                        <Icon type={'font-awesome'} name={'angle-right'} iconStyle={styles.buttonIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOpac}>
                        <Text style={styles.buttonText}>
                            Reject
                        </Text>
                        <Icon type={'font-awesome'} name={'angle-right'} iconStyle={styles.buttonIcon}/>
                    </TouchableOpacity>
                </View>
                {/* <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                /> */}
            </View>
        )
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
