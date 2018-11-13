import { StyleSheet,Dimensions } from 'react-native';

export const colors = {
    White: '#FFFFFF',
    Red:'#c5271c',
    Red_Alt1:'#851815',
    Red_Alt2:'#C6281D',
    Red_Alt3:'#A81C39',
    Red_Alt4:'#F16449',
    Green:'#4CB050',
    Yellow:'#FF9900',
    Black:'#000000',
    Grey: '#AAAAAA'
};

const {  width:_screenWidth,height:_screenHeight } = Dimensions.get('window');

export function wp (percentage, currentSize) {
    const value = (percentage * currentSize) / 100;
    return Math.round(value);
}

export const screenWidth = _screenWidth;
export const screenHeight = _screenHeight;

export default StyleSheet.create({})