import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/MainScreen/MainScreen';
import SignInScreen from '../screens/AuthScreen/SignInScreen';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="MainScreen">
          <Drawer.Screen name="Danh sách cửa hàng" component={MainScreen}/>
          <Drawer.Screen name="Tổng doanh thu" component={SignInScreen}/>
          <Drawer.Screen name="Log out" component={SignInScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
