import { Provider, connect } from 'react-redux'
// @flow
import React, { Component } from 'react'

import Listcreen from './Containers/Company/companyScreen';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/es/integration/react'
import RootScreen from './Containers/Root/RootScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import createStore from 'App/Stores'

class ShellComponent extends Component {
  render () {
    console.disableYellowBox = true;
    const { dispatch, navigation } = this.props
    return <RootScreen navigation={{
      dispatch,
      state: navigation,
    }} />
  }
}

const mapStateToProps = (state) => ({
  navigation: state.navigation
})

const RootNavigationStack = connect(mapStateToProps)(ShellComponent)

const { store, persistor } = createStore()


const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
    <RootNavigationStack/>
    </NavigationContainer>
    </PersistGate>
  </Provider>
)

export default App
