import { Colors, Fonts, Helpers, Metrics } from 'App/Theme'
import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  companyName: {
    ...Fonts.small,
    color: '#373838'
  },
  description: {
    ...Fonts.small,
    color: '#78797A'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#737388",
    marginRight: 10
},
thumbnailImage: {
  width: 70,
  height: 70,
  borderRadius: 5,
  overflow: "hidden",
  marginRight: 10,
  backgroundColor: '#2B48D7'
},
descriptionText: {
  ...Fonts.large,
  color: '#FFF',
  width: 300
},
headerText:{
  fontSize: 30,
  fontWeight: 'bold',
  margin: 10,
  alignItems:'center'
}
})
