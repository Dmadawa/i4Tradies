import { Helpers, Metrics } from '../../Theme'
import { NavigationActions, StackActions } from 'react-navigation'
import { TouchableOpacity, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from 'App/Services/NavigationService'
import React from 'react'
import Style from './style'
import { useDispatch } from 'react-redux'

const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  return (
    <View
      style={[
        Helpers.fillCenter,
        Helpers.rowMain,
        Metrics.mediumHorizontalMargin,
        Metrics.mediumVerticalMargin,
      ]}
    >
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                <TouchableOpacity style={Style.button} onPress={() => {
                  navigation.navigate("CompanyScreen")
                  // NavigationService.navigateAndReset('CompanyScreen')
                  }}>
                    <Icon style={Style.searchIcon} name="arrow-right" size={20} color="#FFF"/>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default ListScreen
