import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import HomeScreen from '../Screens/HomeScreen'
import ListScreen from '../Screens/ListScreen'

const TabBarComponent = (props: any) => <BottomTabBar {...props} />;

const HomeStack = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen
        },
        ListScreen: {
            screen: ListScreen
        },
    },
    {
        initialRouteName: "HomeScreen",
        tabBarComponent: props => (
            <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
        ),

    }
)

export default createAppContainer(HomeStack)