import React from 'react'
import T from 'prop-types'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Fade from './fade'

const GradientButton = ({ onPress, text, colors, disabled }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.containerStyle}
    disabled={!!disabled}
  >
    <LinearGradient
      colors={colors}
      style={styles.gradientStyle}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </LinearGradient>
    <Fade
      duration={300}
      style={styles.faderStyle}
      show={disabled}
    >
      <View style={styles.overlayStyle} />
    </Fade>
  </TouchableOpacity>
)

GradientButton.propTypes = {
  onPress: T.func,
  text: T.string,
  colors: T.array,
  disabled: T.bool,
}

const styles = StyleSheet.create({
  faderStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlayStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 5,
    // backgroundColor: 'rgba(128,128,128, 0.6)',
  },
  containerStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 40,
    borderRadius: 5,
  },
  gradientStyle: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    backgroundColor: 'transparent',
  },
})

export { GradientButton }
