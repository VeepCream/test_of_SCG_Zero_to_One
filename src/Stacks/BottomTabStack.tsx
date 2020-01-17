import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Icon } from 'native-base'
import HomeStack from './HomeStack'
import ListStack from './ListStack'


const TabBarComponent = (props: any) => <BottomTabBar {...props} />;

const BottomTabStack = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeStack
        },
        ListScreen: {
            screen: ListStack
        },
    },
    {
        initialRouteName: "HomeScreen",
        tabBarComponent: (props:any) => (
            <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
        ),
        defaultNavigationOptions: ({ navigation }: any) => {
            return {
                tabBarIcon: ({ focused, tintColor }: any) => {
                    const { routeName } = navigation.state;
                    let icon = <Icon name="home" />
                    //let iconName
                    if (routeName === 'HomeScreen') {
                        icon = <Icon name="md-home" />
                    } else if (routeName === 'ListScreen') {
                        icon = <Icon name="md-list" />
                    } 
                    return (icon)
                },
                title: navigation.state.routeName.replace("Stack", "")
            }
        },
        tabBarOptions: {
            activeTintColor: "#2962FF",
            inactiveTintColor: 'gray',
            style: { backgroundColor: "transparent" },
            tabStyle: { backgroundColor: "transparent" }
        }
    }
)

export default createAppContainer(BottomTabStack)