import { AirbnbRating, Rating } from 'react-native-elements';
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Helpers, Metrics } from '../../Theme'
import { NavigationActions, StackActions } from 'react-navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AuthActions from 'App/Stores/Auth/Actions'
import CompanyActions from 'App/Stores/Company/Actions'
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay'
import Style from './style'

const CompanyScreen = () => {
  const dispatch = useDispatch()
  const company = useSelector((state) => state.company)
  const companyIsLoading = useSelector((state) => state.company.companyIsLoading)
  const companyErrorMessage = useSelector((state) => state.company.companyErrorMessage)
  
  useEffect(() => { 
      dispatch(CompanyActions.getCompanyRequest())
    }, []);

  const Item = ({ item,index }) => (
    <TouchableOpacity style={{ flexDirection: 'row', padding: 10}}>
     <Image style={Style.profileImage} source={{
          uri: item.logo,
      }}/>
      <View style={{ flexDirection: "column"}}>
      <Text style={Style.companyName} numberOfLines={1} ellipsizeMode={'tail'}>{item.name}</Text>
      <View style={{ alignItems:'flex-start'}}>
        <Rating imageSize={10} readonly startingValue={5} style={{ left: 0}}/>
      </View>
      <View style={{ paddingRight: 10 , flexDirection: 'row'}}>
      <Text style={Style.description} numberOfLines={1} ellipsizeMode={'tail'}>{item.about}</Text>
      </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };

  return (
    <View
      style={{ flex: 1}}
    >
    { (companyIsLoading || company === undefined) ? <Spinner
          visible={companyIsLoading}
          animation='fade'
          overlayColor='rgba(0,0,0, 0.2)'
      /> :
      <SafeAreaView style={Style.container}>
      <Text style={Style.headerText}>Now Select a company</Text>
          <View style={{backgroundColor: '#2B48D7', flexDirection: 'row', alignItems: 'center', height: 70, width:'100%'}}>
              <Image style={Style.thumbnailImage} source={''}/>
              <Text style={Style.descriptionText} numberOfLines={2} ellipsizeMode='tail'>We found 5 certified companies in your Selected Location</Text>
          </View>
          <FlatList
              data={company.company}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={renderSeparator}
          />
    </SafeAreaView>
    }
    </View>
  )
}

export default CompanyScreen
