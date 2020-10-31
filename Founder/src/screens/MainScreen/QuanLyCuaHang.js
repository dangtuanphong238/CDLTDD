import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

var  radio_props = [
  {label: 'Đã đóng phí      ', value: 0},
  {label: 'Chưa đóng phí', value: 1},
];
export default class StoreScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: 'java',
      value: 0
    };
  }
 

  render() {
    return (
      <ScrollView style={{backgroundColor: '#fe9b58', flex: 1}}>
        <View style={{alignItems: 'center', marginVertical: '5%'}}>
          <Text style={{fontSize: 24}}>Coffee My Friend Thủ Đức</Text>
        </View>
        
        <View>
          <Text style={{marginStart: 15, fontSize: 18, marginVertical: 10}}>
            Quản lí tài khoản
          </Text>
        </View>
        
        <View>
          <Text style={{marginStart: 15}}>Tên cửa hàng:</Text>
          <TextInput
            style={{
              borderRadius:10,
              borderColor: '#000',
              backgroundColor: '#c4c4c4',
              height: 40,
              marginHorizontal: 15,
            }}
          />
        </View>
        
        <View>
          <Text style={{marginStart: 15}}>Tên đăng nhập:</Text>
          <TextInput
            style={{
              borderRadius:10,
              borderColor: '#000',
              backgroundColor: '#c4c4c4',
              height: 40,
              marginHorizontal: 15,
            }}
          />
        </View>
        
        <View>
          <Text style={{marginStart: 15}}>Mật khẩu:</Text>
          <TextInput
            style={{
              borderRadius:10,
              borderColor: '#000',
              backgroundColor: '#c4c4c4',
              height: 40,
              marginHorizontal: 15,
            }}
          />
        </View>
        
        <View>
          <Text style={{marginStart: 15}}>Số điện thoại:</Text>
          <TextInput
            keyboardType="numeric"
            style={{
              borderRadius:10,
              borderColor: '#000',
              backgroundColor: '#c4c4c4',
              height: 40,
              marginHorizontal: 15,
            }}
          />
        </View>
        
        <View>
          <Text style={{marginStart: 15}}>Số CMND:</Text>
          <TextInput
            keyboardType="numeric"
            style={{
              borderRadius:10,
              borderColor: '#000',
              backgroundColor: '#c4c4c4',
              height: 40,
              marginHorizontal: 15,
            }}
          />
        </View>
        
        <View>
          <Text style={{marginStart: 15}}>Hoa hồng:</Text>
          <TextInput
            keyboardType="numeric"
            style={{
              borderRadius:10,
              borderColor: '#000',
              backgroundColor: '#c4c4c4',
              height: 40,
              marginHorizontal: 15,
            }}
          />
        </View>
     
        <View>
          <Text style={{marginStart: 15}}>Trạng thái:</Text>
          <Picker
            selectedValue={this.state.selectedValue}
            style={{ width: 250, backgroundColor:'#c4c4c4', height:40, marginHorizontal:15}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({selectedValue: itemValue})
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        
        <View style={{flexDirection: 'column', alignItems:'center', marginTop:10}}>
          <RadioForm radio_props={radio_props} initial={0} formHorizontal={true} onPress={(value) => {this.setState({value:value})}}/>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:10, justifyContent:'space-around'}}>
          <TouchableOpacity style={{backgroundColor:'#c4c4c4', borderRadius:15, width:180, height:40, alignItems:'center', justifyContent:'center'}}>
            <Text>Cập nhật thông tin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#c4c4c4', borderRadius:15, width:180, height:40, alignItems:'center', justifyContent:'center'}}>
            <Text>Gửi thông báo</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    );
  }
}
