import React, { PureComponent } from 'react'
import T from 'prop-types'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { format } from 'date-fns'

class DatePicker extends PureComponent {
  static propTypes = {
    onChange: T.func.isRequired,
    value: T.func.isRequired,
    placeholder: T.oneOfType([
      T.string,
      T.instanceOf(Date),
    ]),
  }

  constructor (props) {
    super(props)

    this.state = {
      show: false,
    }
  }

  handleDatePicked (date) {
    const { onChange } = this.props
    onChange(date)
    this.hideDateTimePicker()
  }

  render () {
    const { value, placeholder } = this.props
    const { show } = this.state

    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity onPress={() => this.setState({ show: true })}>
          <Text>
            {value ? format(value, 'MM/DD/YYYY') : placeholder}
          </Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={show}
          onConfirm={(date) => this.handleDatePicked(date)}
          onCancel={() => this.setState({ show: false })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: 45,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
})

export { DatePicker }
