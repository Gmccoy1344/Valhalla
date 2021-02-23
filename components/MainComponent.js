import React, { Component } from 'react';
import Home from './HomeComponent';
import Welcome from './WelcomeComponent';
import Directory from './DirectoryComponent';
import ItemDirectory from './ItemDirectoryComponent';
import ItemInfo from './ItemInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
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

const DirectoryNavigator = createStackNavigator(
    {
        Directory: {screen: Directory },
        ItemDirectory: {screen: ItemDirectory},
        ItemInfo: {screen: ItemInfo},
    },
    {
        initialRouteName: 'Directory',
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

const WelcomeNavigator = createStackNavigator(
    {
        Welcome: {screen: Welcome }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {screen: HomeNavigator},
        Directory: {screen: DirectoryNavigator},
        Welcome: {screen: WelcomeNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

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