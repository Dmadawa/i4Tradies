import React from 'react'
import T from 'prop-types'
import { Image, View } from 'react-native'

const buttonImageAssets = {
  HomeNormal: require('../img/home_icn_inactive.png'),
  HomeSelected: require('../img/feed_icn_selected.png'),
  InboxNormal: require('../img/notifications.png'),
  InboxSelected: require('../img/notifications_highlighted.png'),
  ProfileNormal: require('../img/profile.png'),
  ProfileSelected: require('../img/profile_highlighted.png'),
  LeaderboardNormal: require('../img/leaderboard.png'),
  LeaderboardSelected: require('../img/leaderboards_highlighted.png'),
  CreateNormal: require('../img/share_new.png'),
  CreateSelected: require('../img/Share_new_highlighted.png'),
}

const TabBarIcon = ({ iconSource, width, height }) => {
  const newWidth = iconSource === 'CreateNormal' ? 37 : width
  const newHeight = iconSource === 'CreateNormal' ? 37 : height

  return (
    <View style={imageContainerView(newWidth, newHeight)}>
      <Image
        style={imageStyle(newWidth, newHeight)}
        source={buttonImageAssets[iconSource]}
      />
    </View>
  )
}

const imageStyle = (imageWidth, imageHeight) => ({
  flex: 1,
  width: imageWidth,
  height: imageHeight,
  alignItems: 'center',
  justifyContent: 'center',
  resizeMode: 'contain',
})

const imageContainerView = (icontainerWidth, containerHeight) => ({
  flexDirection: 'row',
  backgroundColor: 'transparent',
  height: containerHeight,
  width: icontainerWidth,
  marginLeft: 0,
  marginTop: 0,
  alignItems: 'center',
  justifyContent: 'center',
})

TabBarIcon.propTypes = {
  iconSource: T.string.isRequired,
  width: T.number.isRequired,
  height: T.number.isRequired,
}

export default TabBarIcon
