import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

class CustomLinearGradient extends Component {
  render () {
    const { locationStart, colorShimmer, widthShimmer } = this.props
    return (
      <LinearGradient
        colors={colorShimmer}
        style={styles.mainView}
        start={{
          x: -1,
          y: 0.5,
        }}
        end={{
          x: 2,
          y: 0.5,
        }}
       //  locations={[0, 0.5, 1]}
        locations={[locationStart + widthShimmer,
          locationStart + 0.5 + widthShimmer / 2, locationStart + 1]}
      />
    )
  }
}

const styles = StyleSheet.create({
  mainView: { flex: 1 },
})

CustomLinearGradient.propTypes = {
  locationStart: PropTypes.any,
  colorShimmer: PropTypes.array,
  widthShimmer: PropTypes.number,
}

export default CustomLinearGradient
