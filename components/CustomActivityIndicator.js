import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const CustomActivityIndicator = () => {
  return (
    <View style={styles.gif}>
      <Image
        resizeMode={'contain'}
        style={styles.img}
        source={require('../data/loading.gif')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  gif: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  img: {
    width: 400,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CustomActivityIndicator
