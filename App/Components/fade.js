import React, { PureComponent } from 'react'
import T from 'prop-types'
import {
  Animated,
} from 'react-native'

export default class Fade extends PureComponent {
  static propTypes = {
    show: T.bool,
    duration: T.number,
    style: T.number,
    children: T.oneOfType([
      T.arrayOf(T.node),
      T.node,
    ]),
  }

  constructor (props) {
    super(props)

    this.state = {
      opacity: new Animated.Value(this.props.show ? 1 : 0),
    }
  }

  componentWillReceiveProps (nextProps) {
    const { show, duration = 500 } = this.props
    const { opacity } = this.state
    const shouldShow = nextProps.show

    if (show && !shouldShow) {
      Animated.timing(opacity, {
        toValue: 0,
        duration,
      }).start()
    }

    if (!show && shouldShow) {
      Animated.timing(opacity, {
        toValue: 1,
        duration,
      }).start()
    }
  }

  render () {
    const { style, children } = this.props
    const { opacity } = this.state

    return (
      <Animated.View
        pointerEvents={'none'}
        style={[style, { opacity }]}
      >
        {children}
      </Animated.View>
    )
  }
}
