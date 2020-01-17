import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers'
import {
  persistStore,
  persistReducer
} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import AppNavigation from '../Stacks/BottomTabStack'

const navReducer = createNavigationReducer(AppNavigation)
const appReducer = combineReducers({
  nav: navReducer
} as any)
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [

  ],
  blacklist: [
    'nav',
  ],
};

const persistedReducer = persistReducer(persistConfig, appReducer)

const middleware = createReactNavigationReduxMiddleware(
  (state: any) => state.nav,
)

export const App = createReduxContainer(AppNavigation)

export const store: any = createStore(
  persistedReducer,
  applyMiddleware(middleware)
)

export const persistor = persistStore(store)