import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class SignIn extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Text style={{fontSize: 28, margin: 30}}>COFFEE MY FRIEND</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            height: 40,
            margin: 15,
            borderRadius: 20,
          }}>
          <Image
            style={{marginLeft: 10}}
            source={require('../../assets/Vector.png')}
          />
          <TextInput
            style={{
              flex: 1,
              // margin: 15,
              borderColor: 'gray',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            height: 40,
            margin: 15,
            borderRadius: 20,
          }}>
          <Image
            style={{marginLeft: 10}}
            source={require('../../assets/Vector.png')}
          />
          <TextInput
            style={{
              flex: 1,
              borderColor: 'gray',
            }}
          />
          <Image
            style={{marginRight: 10}}
            source={require('../../assets/Vector.png')}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'gray',
              alignItems: 'center',
              padding: 15,
              borderRadius: 20,
            }}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
