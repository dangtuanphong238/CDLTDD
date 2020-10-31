import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import {Component} from 'react';
import {TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
        {
          title: 'Item 6',
          text: 'Text 6',
        },
        
      ],
    };
  }
  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 350,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
        <TouchableOpacity
          onPress={() => {
            alert(item.text);
          }}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fe9b58', paddingTop: 50}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 24}}>Danh sách cửa hàng</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '25%',
          }}>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={380}
            itemWidth={320}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
        </View>
      </View>
    );
  }
}
