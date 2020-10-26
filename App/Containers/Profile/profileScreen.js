import { AirbnbRating, Rating } from 'react-native-elements';
import { DrawerItems, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { Helpers, Metrics } from 'App/Theme'
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DrawerActions } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from 'App/Services/NavigationService'
import ProfileActions from 'App/Stores/Profile/Actions'
import { ProgressButton } from '../../Components/button'
import { SafeAreaView } from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay'
import Style from './style'
import { useIsFocused } from "@react-navigation/native";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.profile)
  const userIsLoading = useSelector((state) => state.profile.infoIsLoading)

  const isFocused = useIsFocused();
  useEffect(() => { if(isFocused)
    {
      console.log("called");
      dispatch(ProfileActions.profileInfoRequest())
    }}, [isFocused]);

  useEffect(() => {
    dispatch(ProfileActions.profileInfoRequest())
  }, [])

  return (
    <View
      style={[
        Helpers.fillCenter,
        Metrics.mediumVerticalMargin,
      ]}
    >
    { (userIsLoading || profile === undefined || profile.customer === undefined || profile.customer.profile === undefined) ? <Spinner
          visible={userIsLoading}
          animation='fade'
          overlayColor='rgba(0,0,0, 0.2)'
      /> :
      <ImageBackground
        style={Style.background}
        source={''}
      >
        <SafeAreaView style={Style.safeViewContainer}>
        <StatusBar translucent backgroundColor="transparent" />
          <View style={{ flex: 1, flexDirection:'column'}}>
          <View style={{ flex: 1.1, flexDirection: 'column', alignItems: 'center'}}>
          <ImageBackground
            style={{ flex: 2,backgroundColor: 'blue', width: '100%', height: '100%', top: -30}}
            source={{
          uri: profile.customer.profile.profile_logo,
        }}
          >
          <Text style={Style.titleText}>
            My Profile
          </Text>
          <View style={{ alignItems:'center'}}>
          <Image style={Style.profileImage} source={{
          uri: profile.customer.profile.profile_logo,
        }}/>
         
          </View>
          <Rating imageSize={20} readonly startingValue={5} style={{ marginTop: 10}}/>
          <Text style={Style.uaserNameText}>
            {profile.customer.profile.name}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 20}}>
            <ProgressButton onPress={() => {}} status={'To Do'} count={ '23'}/>
            <ProgressButton onPress={() => {}} status={'In Progress'} count={ profile.on_going }/>
            <ProgressButton onPress={() => {}} status={'Completed'} count={ profile.completed }/>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 30}}>
                <TouchableOpacity style={Style.button} onPress={() => navigation.navigate('DrawerOpen')}>
                    <Icon style={Style.editButton} name="pencil" size={20} color="#FFF"/>
                </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>
          <View style={{ flexDirection: 'column', flex: 1, marginLeft: 20}}>
          <View style={{ flexDirection: 'row', marginTop: 15}}>
          <Icon style={Style.searchIcon} name="map-marker" size={30} color="#000"/>
          <View style={{ flexDirection: 'column'}}>
               <Text style={Style.addressTitle}>Current Address</Text>
               <Text style={Style.addressSubTitle}>{profile.customer.profile.address }</Text>
          </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15}}>
          <Icon style={Style.searchIcon} name="mobile" size={30} color="#000"/>
          <View style={{ flexDirection: 'column'}}>
          <Text style={Style.addressTitle}>Mobile Number</Text>
          <Text style={Style.addressSubTitle}>{ profile.customer.profile.phoneNumber }</Text>
          </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15}}>
          <Icon style={Style.searchIcon} name="envelope" size={20} color="#000"/>
          <View style={{ flexDirection: 'column'}}>
          <Text style={Style.addressTitle}>Email Address</Text>
          <Text style={Style.addressSubTitle}>{profile.customer.profile.email}</Text>
          </View>
          </View>

          </View>
          </View>
        </SafeAreaView>
      </ImageBackground>}
      
    </View>
  )
}

export default ProfileScreen
