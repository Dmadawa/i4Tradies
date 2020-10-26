import React from 'react'
import T from 'prop-types'
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native'

const buttonImageAssets = {
  facebookLogo: require('../img/facebook.png'),
  twitterLogo: require('../img/twitter.png'),
}

const ImageButton = ({ onPress, text, backgroundColor, imageBackgroundColor, imageSource }) => (
  <TouchableOpacity onPress={onPress} style={containerStyle(backgroundColor)}>
    <View style={styles.imageContainer}>
      <Image
        style={buttonImageStyle(imageBackgroundColor)}
        source={buttonImageAssets[imageSource]}
      />
    </View>
    <Text style={styles.textStyle}>{text}</Text>
  </TouchableOpacity>
)

ImageButton.propTypes = {
  onPress: T.func,
  text: T.string,
  backgroundColor: T.string,
  imageBackgroundColor: T.string,
  imageSource: T.string,
}

const containerStyle = function (color) {
  return {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 40,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: color,
    overflow: 'hidden',
  }
}

const buttonImageStyle = function (imageBackgroundColor) {
  return {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'center',
    alignItems: 'flex-start',
    marginLeft: 0,
    backgroundColor: imageBackgroundColor,
    overflow: 'hidden',
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 40,
    width: 40,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  textStyle: {
    flex: 11,
    marginRight: 20,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    backgroundColor: 'transparent',
  },
})

export { ImageButton }
