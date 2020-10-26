import React, { useEffect } from 'react'

import AppNavigator from 'App/Navigators/AppNavigator'
import { Helpers } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import StartupActions from 'App/Stores/Startup/Actions'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

const RootScreen = () => {
  // Deep linking prefix
  const prefix = 'boilerplate://';
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(StartupActions.startup())
  }, [])

  return (
    <View style={Helpers.fill}>
      <AppNavigator
        // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
        uriPrefix={prefix}
      />
    </View>
  )
}

export default RootScreen
