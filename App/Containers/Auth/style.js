import { Colors, Fonts, Helpers, Metrics } from 'App/Theme'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  error: {
    ...Fonts.normal,
    color: Colors.error,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  instructions: {
    ...Fonts.normal,
    fontStyle: 'italic',
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  result: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  text: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  safeViewContainer: {
    flex: 1
  },
  welcomeText: {
    ...Fonts.h1
  },
  subTitleText: {
    ...Fonts.normal,
    marginTop: Metrics.tiny
  },
  main: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  scrollerView: {
    flex: 1,
    height: '100%',
  },
  logoText: {
    fontSize: 24,
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  textInputStyle: {
    color: '#fff',
  },
  textInputContainerStyle: {
    borderWidth: 0.5,
  },
  socialCintainer: {
    paddingTop: 20,
  },
  background: {
    width: '100%',
    height: '100%'
  },
  dashContainerStyle: {
    marginTop: 10,
  },
  dashStyle: {
    width: '100%',
    height: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  loginFormContainer: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  textButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userNameField: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#DFDFE6',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    paddingVertical: 10
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  button: {
    backgroundColor: '#185CD5',
    borderRadius: 30,
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  }
})
