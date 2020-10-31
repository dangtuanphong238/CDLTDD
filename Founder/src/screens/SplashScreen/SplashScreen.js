import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

export default class SplashScreen extends Component {
    componentDidMount = () => {
        setTimeout(() => {
            // this.props.navigation.replace("IntroScreen");
        }, 3000)
    }
    render() {
        return (
            <ImageBackground  source={require('../../assets/splash_screen.png')} style={{ flex: 1 }} />
        )
    }
}
