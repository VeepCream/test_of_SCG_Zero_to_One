import React from 'react'
import { createAppContainer } from 'react-navigation'
import { Dimensions, View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen'

var { height, width } = Dimensions.get('window');

const HomeStack = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        }
    },
    {
        initialRouteName: "HomeScreen",


    }
)

export default createAppContainer(HomeStack)
