import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView,TouchableWithoutFeedback} from 'react-native';
import {Icon,FormInput,FormLabel,FormValidationMessage} from 'react-native-elements';
import styles,{defaultColor} from '../leadDetail.style.js';
import ImagePicker from 'react-native-image-picker';
import { requiredValidator, maxFileValidator,jpgValidator } from '../../../../helper/validator.js';

//var ImagePicker = require('react-native-image-picker');

export default class DocumentInformationScreen extends Component {

    constructor(props){
      super(props)
      this.data = this.props.screenProps.data;

      this.screenState= this.props.screenProps.state;

      this.isSubmittable = this.props.screenProps.isSubmittable;
      this.isPending = this.props.screenProps.isPending;

      this.state = {
        fileKtp:null,
        fileBukti:null,
        fileFoto:null,
        fileBukuRek:null,
        fileKk:null,
        fileNpwp:null,
        fileFormAaji:null
      }
    }

    handleChoosePhoto (file) {
      if(this.isSubmittable || this.isPending){
        const options = {
          noData: true,
        }
        //ImagePicker.launchImageLibrary(options, response => {
          ImagePicker.showImagePicker({title: "Choose...", maxWidth: 800, maxHeight: 600}, response => {
          if (response.uri) {
            if(response.type===null){
              ext = response.fileName.split('.').pop();
              if(ext.toLowerCase() === 'jpeg' || ext.toLowerCase()==='jpg'){
                response.type="image/jpeg"
              }
            }
            
            this.setState({ [file]: response },(()=>{
              this.props.screenProps.textInputHandler('document',this.state)
            }))
          }
        })
      }
    }

    render() {
      return (
        <ScrollView>
          <TouchableOpacity onPress={()=>this.handleChoosePhoto('fileKtp')}>
            <FormLabel>KTP</FormLabel>
            <FormInput value={this.state.fileKtp?this.state.fileKtp.fileName:''} editable={false} selectTextOnFocus={false}/>
            { this.isSubmittable &&
            <View>
              <FormValidationMessage>{requiredValidator(this.state.fileKtp)?'':'Wajib diisi'}</FormValidationMessage>
              <FormValidationMessage>{jpgValidator(this.state.fileKtp)?'':'File Harus Jpg'}</FormValidationMessage>
              <FormValidationMessage>{maxFileValidator(this.state.fileKtp)?'':'Max 500 KB'}</FormValidationMessage>
            </View>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.handleChoosePhoto('fileFoto')}>
            <FormLabel>Foto Berwarna 3x4</FormLabel>
            <FormInput value={this.state.fileFoto?this.state.fileFoto.fileName:''} editable={false} selectTextOnFocus={false}/>
            { this.isSubmittable &&
            <View>
            <FormValidationMessage>{requiredValidator(this.state.fileFoto)?'':'Wajib diisi'}</FormValidationMessage>
            <FormValidationMessage>{jpgValidator(this.state.fileFoto)?'':'File Harus Jpg'}</FormValidationMessage>
            <FormValidationMessage>{maxFileValidator(this.state.fileFoto)?'':'Max 500 KB'}</FormValidationMessage>
            </View>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.handleChoosePhoto('fileKk')}>          
            <FormLabel>KK</FormLabel>
            <FormInput value={this.state.fileKk?this.state.fileKk.fileName:''} editable={false} selectTextOnFocus={false}/>
            { this.isSubmittable &&
            <View>
            <FormValidationMessage>{jpgValidator(this.state.fileKk)?'':'File Harus Jpg'}</FormValidationMessage>
            <FormValidationMessage>{maxFileValidator(this.state.fileKk)?'':'Max 500 KB'}</FormValidationMessage>
            </View>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.handleChoosePhoto('fileNpwp')}>          
            <FormLabel>NPWP</FormLabel>
            <FormInput value={this.state.fileNpwp?this.state.fileNpwp.fileName:''} editable={false} selectTextOnFocus={false}/>
            { this.isSubmittable &&
            <View>
            <FormValidationMessage>{jpgValidator(this.state.fileNpwp)?'':'File Harus Jpg'}</FormValidationMessage>
            <FormValidationMessage>{maxFileValidator(this.state.fileNpwp)?'':'Max 500 KB'}</FormValidationMessage>
            </View>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.handleChoosePhoto('fileFormAaji')}>
            <FormLabel>Form Aaji</FormLabel>
            <FormInput value={this.state.fileFormAaji?this.state.fileFormAaji.fileName:''} editable={false} selectTextOnFocus={false}/>
            { this.isSubmittable &&
            <View>
            <FormValidationMessage>{requiredValidator(this.state.fileFormAaji)?'':'Wajib diisi'}</FormValidationMessage>
            <FormValidationMessage>{jpgValidator(this.state.fileFormAaji)?'':'File Harus Jpg'}</FormValidationMessage>
            <FormValidationMessage>{maxFileValidator(this.state.fileFormAaji)?'':'Max 500 KB'}</FormValidationMessage>
            </View>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.handleChoosePhoto('fileBukuRek')}>
            <FormLabel>Buku Rekening</FormLabel>
            <FormInput value={this.state.fileBukuRek?this.state.fileBukuRek.fileName:''} editable={false} selectTextOnFocus={false}/>
            { this.isSubmittable &&
            <View>
            <FormValidationMessage>{requiredValidator(this.state.fileBukuRek)?'':'Wajib diisi'}</FormValidationMessage>
            <FormValidationMessage>{jpgValidator(this.state.fileBukuRek)?'':'File Harus Jpg'}</FormValidationMessage>
            <FormValidationMessage>{maxFileValidator(this.state.fileBukuRek)?'':'Max 500 KB'}</FormValidationMessage>
            </View>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.handleChoosePhoto('fileBukti')}>          
            <FormLabel>Bukti Transfer</FormLabel>
            <FormInput value={this.state.fileBukti?this.state.fileBukti.fileName:''} editable={false} selectTextOnFocus={false}/>
            { this.isSubmittable &&
            <View>
            <FormValidationMessage>{requiredValidator(this.state.fileBukti)?'':'Wajib diisi'}</FormValidationMessage>
            <FormValidationMessage>{jpgValidator(this.state.fileBukti)?'':'File Harus Jpg'}</FormValidationMessage>
            <FormValidationMessage>{maxFileValidator(this.state.fileBukti)?'':'Max 500 KB'}</FormValidationMessage>
            </View>}
          </TouchableOpacity>
          
        </ScrollView>
      );
    }
  }