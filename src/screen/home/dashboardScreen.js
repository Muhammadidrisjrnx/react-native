
import React, { Component } from 'react';
import { View, Text,Image,ScrollView } from 'react-native';
import styles,{defaultColor} from './homeScreen.style.js';
import { getAllService } from '../../services/webservice/getService';
import { PieChart } from 'react-native-svg-charts';
import { Icon } from 'react-native-elements';


export default class DashboardScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
      data_total_lead:[],
      data_attend_bos:[],
      data_submitted_application:[],
      data_on_process:[],
      data_aaji_pending:[],
      data_code_active:[],
      data_closing_case:[],
      data_non_productive:[],
      data_decline:[],
  
      getdata_total_lead(){
        return this.data_total_lead.filter(all_data_total_lead=>all_data_total_lead.id)
      },
      getdata_attend_bos(){
        return this.data_attend_bos.filter(all_data_attend_bos=>all_data_attend_bos.id)
      },
      getdata_submitted_application(){
        return this.data_submitted_application.filter(all_data_submitted_application=>all_data_submitted_application.id)
      },
      getdata_on_process(){
        return this.data_on_process.filter(all_data_on_process=>all_data_on_process.id)
      },
      getdata_aaji_pending(){
        return this.data_aaji_pending.filter(all_data_aaji_pending=>all_data_aaji_pending.id)
      },
      getdata_code_active(){
        return this.data_code_active.filter(all_data_code_active=>all_data_code_active.id)
      },
      getdata_closing_case(){
        return this.data_closing_case.filter(all_data_closing_case=>all_data_closing_case.id)
      },
      getdata_non_productive(){
        return this.data_non_productive.filter(all_data_non_productive=>all_data_non_productive.id)
      },
      getdata_decline(){
        return this.data_decline.filter(all_data_decline=>all_data_decline.id)
      },
    };
      var token = global.token;
      var agentCode = global.user.usrAgentCode;
      var url_total_lead = "agents?agtCreatedDate.greaterOrEqualThan=2019-02-28T17:00:00.000Z&agtCreatedDate.lessOrEqualThan=2019-03-30T17:00:00.000Z&agtRecruitId.equals="+agentCode;
      var url_attend_bos = "agents?agtCreatedDate.greaterOrEqualThan=2019-02-28T17:00:00.000Z&agtCreatedDate.lessOrEqualThan=2019-03-30T17:00:00.000Z&agtRecruitId.equals="+agentCode+"&statusId.equals=2355";
      var url_submitted_application = "agents?agtCreatedDate.greaterOrEqualThan=2019-02-28T17:00:00.000Z&agtCreatedDate.lessOrEqualThan=2019-03-30T17:00:00.000Z&agtRecruitId.equals="+agentCode+"&statusId.equals=2357";
      var url_on_process = "agents?agtCreatedDate.greaterOrEqualThan=2019-02-28T17:00:00.000Z&agtCreatedDate.lessOrEqualThan=2019-03-30T17:00:00.000Z&agtRecruitId.equals="+agentCode+"&statusId.equals=2365";
      var url_aaji_pending = "agents?agtCreatedDate.greaterOrEqualThan=2019-02-28T17:00:00.000Z&agtCreatedDate.lessOrEqualThan=2019-03-30T17:00:00.000Z&agtRecruitId.equals="+agentCode+"&statusId.equals=2357";
      var url_code_active = "agents?agtCreatedDate.greaterOrEqualThan=2019-02-28T17:00:00.000Z&agtCreatedDate.lessOrEqualThan=2019-03-30T17:00:00.000Z&agtRecruitId.equals="+agentCode+"&statusId.equals=2365";
      var url_closing_case = "agents?agtCreatedDate.greaterOrEqualThan=2019-02-28T17:00:00.000Z&agtCreatedDate.lessOrEqualThan=2019-03-30T17:00:00.000Z&agtRecruitId.equals="+agentCode+"&statusId.equals=2365";
      var url_non_productive = "agents?agtCreatedDate.greaterOrEqualThan=2019-02-28T17:00:00.000Z&agtCreatedDate.lessOrEqualThan=2019-03-30T17:00:00.000Z&agtRecruitId.equals="+agentCode+"&statusId.equals=2365";
      var url_decline = "agents?agtCreatedDate.greaterOrEqualThan=2019-02-28T17:00:00.000Z&agtCreatedDate.lessOrEqualThan=2019-03-30T17:00:00.000Z&agtRecruitId.equals="+agentCode+"&statusId.equals=9751";
    
      getAllService(token,url_total_lead).then((res)=>{
        this.setState({data_total_lead:res})
      });
      getAllService(token,url_attend_bos).then((res)=>{
        this.setState({data_attend_bos:res})
      });
      getAllService(token,url_submitted_application).then((res)=>{
        this.setState({data_submitted_application:res})
      });
      getAllService(token,url_on_process).then((res)=>{
        this.setState({data_on_process:res})
      });
      getAllService(token,url_aaji_pending).then((res)=>{
        this.setState({data_aaji_pending:res})
      });
      getAllService(token,url_code_active).then((res)=>{
        this.setState({data_code_active:res})
      });
      getAllService(token,url_closing_case).then((res)=>{
        this.setState({data_closing_case:res})
      });
      getAllService(token,url_non_productive).then((res)=>{
        this.setState({data_non_productive:res})
      });
      getAllService(token,url_decline).then((res)=>{
        this.setState({data_decline:res})
      });
  
    }
  
    render() {
      const total_lead = this.state.getdata_total_lead();
      const attend_bos = this.state.getdata_attend_bos();
      const submitted_application = this.state.getdata_submitted_application();
      const on_process = this.state.getdata_on_process();
      const aaji_pending = this.state.getdata_aaji_pending();
      const code_active = this.state.getdata_code_active();
      const closing_case = this.state.getdata_closing_case();
      const non_productive = this.state.getdata_non_productive();
      const decline = this.state.getdata_decline();
      const data = [
        {
          key: 1,
          value: 100,
          svg: { fill: defaultColor.Red_Alt2 },
        },
        {
          key: 2,
          value: 50,
          svg: { fill: defaultColor.Red_Alt4 }
        },
      ]
  
      return (
        <View style={styles.TabContainer}>
          <ScrollView>
              <View style={styles.MainContainer1}>
                <View style={styles.lead_headerContainer}>
                      <View style={{flexDirection:'row'}}>
                        <View style={styles.pieChartContainer}>
                          <PieChart style={styles.pieChart}
                            outerRadius={'60%'}
                            innerRadius={'30%'}
                            data={data}/>
                          <View style={styles.iconChartContainer}>
                            <Icon type={'font-awesome'} name={'user-o'} size={40} iconStyle={styles.icon}/>
                          </View>
                        </View>
                        <View style={{flexDirection:'column',alignSelf:'center'}}>
                          <Text style={styles.texton_container1}>{total_lead.length}</Text>
                          <Text style={styles.lead_headerCaption}>Total Leads</Text>
                        </View>
                      </View>
                  </View>
                <View style={styles.attend_bos_Container}>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('./icon/calendar.png')}style={{width:40,height:40,resizeMode:'contain'}}></Image>
                      <View style={{flexDirection:'column',alignSelf: 'center',marginLeft: 20,}}>
                        <Text style={styles.texton_container1}>{attend_bos.length}</Text>
                        <Text style={styles.lead_headerCaption}>Attend BOS</Text>
                      </View>
                    </View>
                  </View>        
                <View style={styles.submitted_Container}>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('./icon/check_circle.png')}style={{width:40,height:40,resizeMode:'contain'}}></Image>
                      <View style={{flexDirection:'column',alignSelf: 'center',marginLeft: 20,}}>
                        <Text style={styles.texton_container1}>{submitted_application.length}</Text>
                        <Text style={styles.lead_headerCaption}>Submitted Applications</Text>
                      </View>
                    </View>
                  </View>        
                </View>
              <View style={styles.MainContainer2}>
                <View style={{flexDirection:'row',marginRight: 10,}}>
                  <View style={{flexDirection:'column',marginTop: 20,marginLeft: 20,flex:1,justifyContent: 'center',alignItems: 'center',}}>
                    <Text>OnProcess</Text>
                    <Text style={styles.texton_container2}>{on_process.length} Leads</Text>
                  </View>
                  <View style={{flexDirection:'column',marginTop: 20,marginLeft: 10,borderRightWidth: 2,borderRightColor: defaultColor.Red,borderLeftColor: defaultColor.Red,borderLeftWidth: 2,}}>
                    <View style={{marginLeft:5,marginRight:5,flex:1,justifyContent: 'center',alignItems: 'center',}}>
                      <Text>AAJI Pending</Text>
                      <Text style={styles.texton_container2}>{aaji_pending.length} Leads</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'column',marginTop: 20,marginLeft: 10,flex:1,justifyContent: 'center',alignItems: 'center',}}>
                    <Text>Code Active</Text>
                    <Text style={styles.texton_container2}>{code_active.length} Leads</Text>
                   </View>
                </View>      
                <View style={{flexDirection:'row',marginRight: 10,}}>
                  <View style={{flexDirection:'column',marginTop: 20,marginLeft: 20,flex:1,justifyContent: 'center',alignItems: 'center',}}>
                    <Text>Closing Case</Text>
                    <Text style={styles.texton_container2}>{closing_case.length} Leads</Text>
                  </View>
                  <View style={{flexDirection:'column',marginTop: 20,marginLeft: 10,borderRightWidth: 2,borderRightColor: defaultColor.Red,borderLeftColor: defaultColor.Red,borderLeftWidth: 2,}}>
                    <View style={{marginLeft:5,marginRight:5,flex:1,justifyContent: 'center',alignItems: 'center',}}>
                      <Text>Non-</Text>
                      <Text>Productive</Text>
                      <Text style={styles.texton_container2}>{aaji_pending.length} Leads</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'column',marginTop: 20,marginLeft: 10,flex:1,justifyContent: 'center',alignItems: 'center',}}>
                    <Text>Decline</Text>
                    <Text style={styles.texton_container2}>{decline.length} Leads</Text>
                  </View>
                </View>      
              </View>    
          </ScrollView>
        </View>
        );
    }
  }