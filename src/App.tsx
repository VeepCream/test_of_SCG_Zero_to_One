import React from 'react';
import { FunctionComponent, useState } from 'react';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './RedexNavigator/Navigator'
import RedexNavigation from './RedexNavigator/RedexNavigation'

const App: FunctionComponent<null> = () => {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <RedexNavigation />
      </PersistGate>

    </Provider>
  )
}
export default App