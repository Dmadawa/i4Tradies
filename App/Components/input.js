import React from 'react'
import T from 'prop-types'
import * as R from 'ramda'
import { TextInput, View, Image, Text, StyleSheet } from 'react-native'

const placeholderImageAssets = {
  usernameIcon: require('../img/username_icon.png'),
  passwordIcon: require('../img/psw_icon.png'),
}

const checkMarkImageAssets = {
  check: require('../img/check.png'),
  checked: require('../img/checked.png'),
}

export const Input = ({
  imageLeft,
  imageRight,
  containerStyle,
  inputStyle,
  ...props,
  focus,
}) => (
  <View
    style={StyleSheet.flatten([styles.containerStyle, containerStyle])}
  >
    { imageLeft && <Image
      style={leftImageColor(focus)}
      source={placeholderImageAssets[imageLeft]}
    /> }
    <TextInput
      autoCorrect={false}
      underlineColorAndroid='transparent'
      autoCapitalize='sentences'
      keyboardType='default'
      placeholderTextColor={placeHolderColor(focus)}
      {...props}
      style={StyleSheet.flatten([styles.inputStyle, inputStyle])}
    />
    { imageRight && <Image
      style={styles.imageRight}
      source={checkMarkImageAssets[imageRight]}
    /> }
  </View>
)

Input.propTypes = {
  imageLeft: T.string,
  imageRight: T.string,
  containerStyle: T.number,
  inputStyle: T.number,
  onFocus: T.func,
  focus: T.bool,
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'gray',
    width: 1,
    height: '100%',
  },
  containerStyle: {
    flex: 1,
    height: 45,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 2,
  },
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 8,
    fontSize: 15,
    flex: 2,
    borderRadius: 2,
  },
  imageRight: {
    height: 46,
    width: 22,
    borderRadius: 5,
    resizeMode: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    marginRight: 5,
  },
  validationText: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: '#F58F84',
    marginTop: 4,
  },
  tick: {
    height: 46,
    width: 46,
    borderRadius: 5,
    resizeMode: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    marginRight: 5,
  },
  passwordInputStyle: {
    paddingRight: 5,
    paddingLeft: 8,
    fontSize: 15,
    flex: 2,
    color: '#fff',
  },
  inputContainerStyle: {
    height: 45,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 2,
    borderColor: 'rgba(80, 161, 255, 1)',
    borderWidth: 0.8,
  },
  leftIconStyle: {
    height: 46,
    width: 40,
    borderRadius: 5,
    resizeMode: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  changePasswordInputStyle: {
    paddingRight: 5,
    paddingLeft: 8,
    fontSize: 15,
    flex: 2,
    color: '#525252',
  },
})

const placeHolderColor = function (active) {
  if (active) {
    return 'rgba(255, 255, 255, 1)'
  }
  return 'rgba(255, 255, 255, 0.8)'
}

const leftImageColor = function (active) {
  if (active) {
    return {
      height: 46,
      width: 40,
      borderRadius: 5,
      resizeMode: 'center',
      alignItems: 'flex-start',
      backgroundColor: 'transparent',
      tintColor: 'white',
    }
  } return {
    height: 46,
    width: 40,
    borderRadius: 5,
    resizeMode: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  }
}

const InputContainerStyle = function (dirty, error, active, emailClicked) {
  if (dirty && error) {
    console.log('email clicked-------', emailClicked)
    console.log('valid email-------', R.equals(error, 'is not a valid email'))
    if (emailClicked) {
      return {
        height: 45,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: 'rgba(255, 87, 87, 0.2)',
        borderColor: 'rgba(255, 53, 53, 1)',
        marginTop: 10,
        borderWidth: 0.8,
      }
    }
    if (emailClicked && !R.equals(error, 'is not a valid email')) {
      return {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: 'rgba(55,98,144,1)',
        borderColor: 'rgba(80, 161, 255, 1)',
        marginTop: 10,
        borderWidth: 0.8,
      }
    }
    return {
      height: 45,
      flexDirection: 'row',
      alignSelf: 'stretch',
      alignItems: 'center',
      borderRadius: 2,
      backgroundColor: 'rgba(255, 87, 87, 0.2)',
      borderColor: 'rgba(255, 53, 53, 1)',
      marginTop: 10,
      borderWidth: 0.8,
    }
  } else if (active) {
    return {
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 2,
      backgroundColor: 'rgba(55,98,144,1)',
      borderColor: 'rgba(80, 161, 255, 1)',
      marginTop: 10,
      borderWidth: 0.8,
    }
  } return {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'rgba(255, 255, 255, 0.6)',
    marginTop: 10,
    borderWidth: 0.8,
  }
}

const PasswordContainerStyle = function (active) {
  if (active) {
    return {
      height: 45,
      flexDirection: 'row',
      alignSelf: 'stretch',
      alignItems: 'center',
      marginTop: 10,
      borderRadius: 2,
      backgroundColor: 'rgba(55,98,144,1)',
      borderColor: 'rgba(80, 161, 255, 1)',
      borderWidth: 0.8,
    }
  } return {
    height: 45,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderWidth: 0.8,
  }
}

export const renderPasswordInput = props => {
  const { input, input: { onChange }, meta: { error, active } } = props
  return (
    <View style={PasswordContainerStyle(active)}>
      <Image
        style={leftImageColor(active)}
        source={require('../img/psw_icon.png')}
      />
      <View style={styles.separator} />
      <TextInput
        {...props}
        {...input}
        onChangeText={onChange}
        autoCorrect={false}
        style={styles.passwordInputStyle}
        underlineColorAndroid='transparent'
        placeholderTextColor='white'
      />
      {!error && <Image
        style={styles.tick}
        source={require('../img/checked.png')}
      />}
      {error && <Image
        style={styles.tick}
        source={require('../img/check.png')}
      />}
    </View>
  )
}

export const renderChangePasswordInput = props => {
  const { input, input: { onChange }, meta: { error } } = props
  return (
    <View style={styles.inputContainerStyle}>
      <Image
        style={styles.leftIconStyle}
        source={require('../img/psw_icon.png')}
      />
      <View style={styles.separator} />
      <TextInput
        {...props}
        {...input}
        onChangeText={onChange}
        autoCorrect={false}
        style={styles.changePasswordInputStyle}
        underlineColorAndroid='transparent'
        placeholderTextColor='gray'
      />
      {!error && <Image
        style={styles.tick}
        source={require('../img/checked.png')}
      />}
      {error && <Image
        style={styles.tick}
        source={require('../img/check.png')}
      />}
    </View>
  )
}

renderPasswordInput.propTypes = {
  input: T.object,
  meta: T.object,
}
renderChangePasswordInput.propTypes = {
  input: T.object,
  meta: T.object,
}

export const renderTextInputBlur = props => {
  const { input, input: { onChange }, meta: { error, dirty, active }, emailClicked } = props
  return (
    <View style={InputContainerStyle(dirty, error, active, emailClicked)}>
      <Input {...props} {...input} onChangeText={onChange} focus={active} />
    </View>
  )
}
renderTextInputBlur.propTypes = {
  input: T.object,
  meta: T.object,
  emailClicked: T.bool,
}

export const renderTextInput = props => {
  const { input, input: { onChange }, meta: { error, dirty } } = props

  return (
    <View>
      <Input {...props} {...input} onChangeText={onChange} />
      {dirty && error && <Text style={styles.validationText}>{error}</Text>}
    </View>
  )
}

renderTextInput.propTypes = {
  input: T.object,
  meta: T.object,
}
