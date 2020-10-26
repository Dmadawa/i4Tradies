import { ActivityIndicator, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Helpers, Metrics } from '../../Theme'
import { NavigationActions, StackActions } from 'react-navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AuthActions from 'App/Stores/Auth/Actions'
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay'
import Style from './style'

const LoginScreen = (navigation) => {
  const dispatch = useDispatch()
  const [eyeImage, setImage] = useState("eye-slash");
  const [passwordVisibility, showPassword] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()
  const userIsLoading = useSelector((state) => state.auth.userIsLoading)
  const userErrorMessage = useSelector((state) => state.auth.userErrorMessage)

  changeIcon = () => {
    eyeImage === "eye" ? setImage("eye-slash") : setImage("eye")
    showPassword(!passwordVisibility)
  }

  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })],
  });

  return (
    <View
      style={[
        Helpers.fillCenter,
        Helpers.rowMain,
        Metrics.mediumHorizontalMargin,
        Metrics.mediumVerticalMargin,
      ]}
    >
      <ImageBackground
        style={Style.background}
        source={''}
      >
        <SafeAreaView style={Style.safeViewContainer}>
          <StatusBar
            backgroundColor='#187AE8'
            barStyle='light-content'
          />
          <KeyboardAwareScrollView
            style={Style.scrollerView}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled
            contentContainerStyle={Style.main}
            keyboardShouldPersistTaps='handled'
          >
            <View style={{ flex: 0.5, justifyContent: 'center'}}>
            <Text style={Style.welcomeText}>Welcome</Text>
            <Text style={Style.subTitleText}>Let's sign in to continue</Text>
            <View style={Style.userNameField}>
                <Icon style={Style.searchIcon} name="envelope" size={20} color="#000"/>
                <TextInput
                    style={Style.input}
                    placeholder="Email"
                    onChangeText={(value) => setEmail(value)}
                    value={email}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={Style.userNameField}>
                <Icon style={Style.searchIcon} name="unlock" size={20} color="#000"/>
                    <TextInput
                      style={Style.input}
                      secureTextEntry={passwordVisibility}
                      placeholder="Password"
                      onChangeText={(value) => setPassword(value)}
                      value={password}
                      underlineColorAndroid="transparent"
                    />
              <Icon style={Style.searchIcon} name={eyeImage} size={20} color="#000" onPress={changeIcon}/>
            </View>
            {userErrorMessage &&
            <Text style={Style.error}>{userErrorMessage}</Text>}
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                <TouchableOpacity style={Style.button} onPress={() => {
                  dispatch(AuthActions.userLoginRequest(email,password))
                  }}>
                    <Icon style={Style.searchIcon} name="arrow-right" size={20} color="#FFF"/>
                </TouchableOpacity>
            </View>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </ImageBackground>
      <Spinner
          visible={userIsLoading}
          animation='fade'
          overlayColor='rgba(0,0,0, 0.2)'
      />
    </View>
  )
}

export default LoginScreen
