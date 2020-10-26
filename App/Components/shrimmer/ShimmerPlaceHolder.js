// import liraries
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Animated, Platform } from 'react-native'
import CustomLinearGradient from './CustomLinearGradient'

Animated.LinearGradient = Animated.createAnimatedComponent(CustomLinearGradient)
// create a component
class ShimmerPlaceHolder extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      beginShimmerPosition: new Animated.Value(-1),
    }
  }
  componentDidMount () {
    const { autoRun } = this.props
    if (autoRun) {
      this.loopAnimated()
    }
  }
  getAnimated = () => {
    this.state.beginShimmerPosition.setValue(-1)
    return Animated.timing(this.state.beginShimmerPosition, {
      toValue: 1,
      duration: this.props.duration,
    })
  }
  getSubTwoStyles = (width, backgroundColorBehindBorder) => ({
    position: 'absolute',
    top: -40,
    bottom: -40,
    right: -40,
    left: -40,
    borderRadius: width / 2 + 40 / 2,
    borderWidth: 40,
    borderColor: backgroundColorBehindBorder,
  })
  loopAnimated () {
    const shimmerAnimated = this.getAnimated()
    const { visible } = this.props
    shimmerAnimated.start(() => {
      if (!visible) {
        this.loopAnimated()
      }
    })
  }

  render () {
    const { width,
            reverse,
            height,
            colorShimmer,
            style,
            widthShimmer,
            children,
            visible,
            backgroundColorBehindBorder,
            hasBorder } = this.props
    let beginPostioner = -0.7
    let endPosition = 0.7
    if (reverse) {
      beginPostioner = 0.7
      endPosition = -0.7
    }
    const newValue = this.state.beginShimmerPosition.interpolate({
      inputRange: [-1, 1],
      outputRange: [beginPostioner, endPosition],
    })
    return (
      <View
        style={!visible
                    ? [{ height, width }, styles.container, style]
                    : []
                }
      >
        {!visible
                    ? <View style={styles.mainView}>
                      <Animated.LinearGradient
                        locationStart={newValue}
                        colorShimmer={colorShimmer}
                        widthShimmer={widthShimmer}
                      />
                      {/* Force run children */}
                      <View style={styles.subViewOne}>
                        {this.props.children}
                      </View>
                      {((style && style.borderRadius) || hasBorder) && Platform.OS === 'android'
                                ? <View
                                  style={this.getSubTwoStyles(width, backgroundColorBehindBorder)}
                                />
                                : null}
                    </View>

                    : children
                }
      </View>
    )
  }
}
ShimmerPlaceHolder.defaultProps = {
  width: 200,
  height: 15,
  widthShimmer: 0.7,
  duration: 1000,
  colorShimmer: ['#ebebeb', '#c5c5c5', '#ebebeb'],
  reverse: false,
  autoRun: false,
  visible: false,
  backgroundColorBehindBorder: 'white',
  hasBorder: false,
}
// define your styles
const styles = StyleSheet.create({
  container: { overflow: 'hidden' },
  mainView: { flex: 1 },
  subViewOne: { width: 0, height: 0 },
})
ShimmerPlaceHolder.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  widthShimmer: PropTypes.number,
  duration: PropTypes.number,
  colorShimmer: PropTypes.array,
  reverse: PropTypes.bool,
  autoRun: PropTypes.bool,
  visible: PropTypes.bool,
  children: PropTypes.any,
  style: PropTypes.any,
  backgroundColorBehindBorder: PropTypes.string,
  hasBorder: PropTypes.bool,
}

// make this component available to the app
export default ShimmerPlaceHolder
