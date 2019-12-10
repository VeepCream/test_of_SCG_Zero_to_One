import React from "react";
import { FunctionComponent, useState, useEffect } from 'react';
import { BackHandler } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { NavigationActions } from 'react-navigation'

import { App } from './Navigator'

const RedexNavigation: FunctionComponent = () => {

    const nav = useSelector((state: any) => state.nav);
    const dispatch = useDispatch();

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", onBackHandler)
        return (
            BackHandler.removeEventListener("hardwareBackPress", onBackHandler)
        )
    })

    const onBackHandler = () => {
        return false
    }

    return (
        <App state={nav} dispatch={dispatch} />
    )
}
export default RedexNavigation