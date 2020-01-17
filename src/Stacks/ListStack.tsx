import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ListScreen from '../Screens/ListScreen'

const HomeStack = createStackNavigator(
    {
        ListScreen: {
            screen: ListScreen
        }
    },
    {
        initialRouteName: "ListScreen"

    }
)

export default createAppContainer(HomeStack)
