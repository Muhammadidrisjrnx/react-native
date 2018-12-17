import React,{Component} from 'react';
import {ToastAndroid} from 'react-native';
import Conn from './connection.js';

const c_conn = new Conn;
const c_user = new User;

// async function authenticated () {
//     try {_c
//         let response = await fetch(
//             'http://192.168.1.18:8080/api/authenticate',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 "username":"admin",
//                 "password":"admin",
//                 "rememberMe": true
//             }
//         )})
//         let responseJson = await response.json();
//         return responseJson;
//         } catch (error) {
//         console.error(error);
//     }
// }
export default class User {
    authenticated(){
        const reqInit = [{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "username":"admin",
                            "password":"admin",
                            "rememberMe": true
                        }
                    )}];
        return c_conn.connectAPI('http://192.168.1.18:8080/api/authenticate',reqInit);
    }
}

export default class Agent {
    getLead(){
        return c_user.authenticated();
    }
    // async authenticated() {
    //     try {
    //         let response = await fetch(
    //             'http://192.168.1.18:8080/api/authenticate',{
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 "username":"admin",
    //                 "password":"admin",
    //                 "rememberMe": true
    //             }
    //         )})
    //         let responseJson = await response.json();
    //         return responseJson;
    //         } catch (error) {
    //         console.error(error);
    //     }
    // }
}

// export default class Agent {
//     // id: BigInteger;
//     // agtCreatedBy: BigInteger;
//     // agtCreatedDate: Date;
//     // agtUpdateBy: BigInteger;
//     // agtUpdateDate: Date;
//     // agtCode: String;
//     // agtName: String;
//     // agtLvlId: BigInteger;
//     // agtBrcId: BigInteger;
//     // agtJoinDate: Date;
//     // agtPob: String;
//     // agtDob: Date;
//     // agtSex: String;
//     // agtAddr1: String;
//     // agtAddr2: String;
//     // agtAddr3: String;
//     // agtDistrict: String;
//     // agtCity: String;
//     // agtReliId: BigInteger;
//     // agtIdCardNo: String;
//     // agtEduId: BigInteger;
//     // agtMaritalStatus: BigInteger;
//     // agtOcuId: BigInteger;
//     // agtMobileNumber: String;
//     // agtEmail: String;
//     // agtDependentTotal: Int;
//     // agtExInsuranceCompany: Cognicode;
//     // agtExInsuranceExitDate: Date;
//     // agtExAajiExpired: Date;
//     // agtAajiNo: String;
//     // agtBnkId: BigInteger;
//     // agtBnkAccNo: String;
//     // agtBnkAccName: String;
//     // agtTaxId: String;
//     // agtRecruitId: BigInteger;
//     // agtLeaderType: BigInteger;
//     // agtLeaderId: BigInteger;
//     // agtApproved: Boolean;
//     // agtSubmitted: Boolean;
//     // agtStatId: BigInteger;
    


// const loginAPI = 'https://..../login';
    
//     export async function Authenticated () {
//         try {
//             let response = await fetch(
//               'http://192.168.1.18:8080/api/authenticate',{
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     "username":"admin",
//                     "password":"admin",
//                     "rememberMe": true
//                 }
//             )})
//             let responseJson = await response.json();
//             ToastAndroid.show(responseJson.id_token,ToastAndroid.SHORT);
//             return responseJson;
//           } catch (error) {
//             console.error(error);
//           }

//         // fetch('http://192.168.1.18:8080/api/authenticate', {
//         // method: 'POST',
//         // headers: {
//         //     'Content-Type': 'application/json',
//         // },
//         // body: JSON.stringify({
//         //     "username":"admin",
//         //     "password":"admin",
//         //     "rememberMe": true
//         // }),
//         // }).then((response) => response.json())
//         //     .then((responseJson) => {
//         //     ToastAndroid.show('Berhasil',ToastAndroid.SHORT);
//         //     return responseJson;
//         //     })
//         //     .catch((error) => {
//         //         ToastAndroid.show('Gagal',ToastAndroid.SHORT);
//         //     console.error(error);
//         //     });    
//     }
// }