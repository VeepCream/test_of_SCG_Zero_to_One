import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../Screens/HomeScreen'

const HomeStack = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen
        }
    },
    {
        initialRouteName: "HomeScreen",
        mode: "modal",

    }
)

export default createAppContainer(HomeStack)