import React, { Component } from 'react';
import Home from './HomeComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(HomeNavigator);

class Main extends Component {

    render() {
        return(
            <View
                style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}
            >
                <AppNavigator />
            </View>
        );
    }
}

export default Main;