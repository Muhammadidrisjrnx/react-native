import React from 'react';
import { AsyncStorage } from "react-native";
import {ds_menuData} from './data.js';
import {keyList} from './keyList.js';

// export function _saveLocalData(key, value) {
//     var result;
//     try {
//         await AsyncStorage.setItem(key, value);
//         result = true;
//     } catch (error) {
//     result= false;
//     }
    
//     return result;
// }

// export function _getLocalData(key, value) {
//     var result;
//     try {
//         result = await AsyncStorage.getItem(key);
//         return value
//     } catch (error) {
//         // Error retrieving data
//     }

//     return result;
// }

export function _getValueById(id){
    try {
        return JSON.stringify(keyList.filter(x => x.id == id)[0]["value"])
    } catch (error) {
        return null;
    }
}

export function _setDefaultLocalData(){
    _saveLocalData(keyList["id"]["value"])
}