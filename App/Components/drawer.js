import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import LinearGradient from 'react-native-linear-gradient'
import { NavigationActions } from 'react-navigation'

const screenWidth = Dimensions.get('window').width
 class DrawerContainer extends Component {
//   logout = () => {
//     const actionToDispatch = NavigationActions.reset({
//       index: 0,
//       key: null,  // black magic
//       actions: [NavigationActions.navigate({ routeName: 'loginStack' })],
//     })
//     this.props.navigation.dispatch(actionToDispatch)
//   }

  render () {
    // const { navigation } = this.props
    return (
    //   <LinearGradient
    //     colors={['#ABC836', '#5A943D', '#32632B', '#23461E']}
    //     style={[styles.imageContainer]}
    //   >
    //     <View style={{ backgroundColor: 'transparent', height: 50, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
    //       <Text
    //         onPress={() => navigation.navigate('screen1')}
    //         style={styles.uglyDrawerItem}
    //       />
    //     </View>
    //     <View style={styles.menuItem}>
    //       <Image source={require('')} style={styles.logoImage} />
    //       <Text
    //         onPress={() => navigation.navigate('screen1')}
    //         style={styles.uglyDrawerItem2}
    //       >
    //         {'Home '}
    //       </Text>
    //     </View>
    //     <View style={styles.menuItem}>
    //       <Image source={require('')} style={styles.logoImage} />
    //       <Text
    //         onPress={() => navigation.navigate('screen2')}
    //         style={styles.uglyDrawerItem2}
    //       >
    //         {'Maintanance '}
    //       </Text>
    //     </View>
    //     <View style={styles.menuItem}>
    //       <Image source={''} style={styles.logoImage} />
    //       <Text
    //         onPress={() => navigation.navigate('screen5')}
    //         style={styles.uglyDrawerItem2}
    //       >
    //         {'Breakdowns '}
    //       </Text>
    //     </View>
    //     <View style={styles.footerStyle} >
    //       <View style={{ width: screenWidth * 2 / 5, alignItems: 'center', justifyContent: 'center' }} ><Text
    //         onPress={''}
    //         style={styles.uglyDrawerItem}
    //       >{'Settings '}</Text></View>
    //       <View style={{ width: screenWidth * 2 / 5 + 15, alignItems: 'center', justifyContent: 'center', borderLeftWidth: 0.5, borderColor: '#D3D3D3' }} ><Text
    //         onPress={this.logout}
    //         style={styles.uglyDrawerItem}
    //       >{'Logout '}</Text></View>
    //     </View>
    //   </LinearGradient>
    <View />
    )
  }
}

const styles = StyleSheet.create({
  footerStyle: {
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
    height: 60,
    flexDirection: 'row',
    flex: 1,
    borderColor: '#D3D3D3',
    borderTopWidth: 0.5,
  },
  menuItem: {
    backgroundColor: 'transparent',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#D3D3D3',
    borderBottomWidth: 0.5,
  },
  menuFotter: {
    backgroundColor: 'transparent',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#D3D3D3',
    borderBottomWidth: 0.5,
  },
  logoImage: {
    width: 20,
    height: 20,
    // alignItems: 'center',
    marginLeft: 15,
  },
  imageContainer: {
    flex: 1,
  },
  uglyDrawerItem: {
    fontSize: 20,
    fontWeight: '500',
    color: '#DDDE2A',
    textAlign: 'center',
    // padding: 15,
    width: '100%',
    marginLeft: 10,
  },
  uglyDrawerItem2: {
    fontSize: 20,
    fontWeight: '500',
    color: '#DDDE2A',
    // textAlign: 'center',
    // padding: 15,
    width: '100%',
    marginLeft: 10,
  },
})
export default DrawerContainer