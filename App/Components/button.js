import { Colors, Fonts, Helpers, Metrics } from '../Theme'
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import React from 'react'
import T from 'prop-types'

const ProgressButton = ({ onPress, status, count }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}> {status} </Text>
      <Text style={styles.buttonSubTextStyle}> {count} </Text>
  </TouchableOpacity>
)

ProgressButton.propTypes = {
  status: T.string,
  count: T.string,
  onPress: T.func,
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    width: '20%',
    borderRadius: 5,
    elevation: 5,
  },
  buttonTextStyle: {
    ...Fonts.medium,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#FFF',
    paddingRight: 5,
    // paddingTop: (Platform.OS === 'ios') ? 10 : 0,
  },
  buttonSubTextStyle: {
    ...Fonts.medium,
    textAlign: 'center',
    textAlignVertical: 'center',
    // ontWeight: 'bold',
    color: '#FFF',
    paddingRight: 5,
    // paddingTop: (Platform.OS === 'ios') ? 10 : 0,
  },
  buttonStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    margin: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    // padding: 10,
    backgroundColor: '#185CD5'
  },
})

export { ProgressButton }
