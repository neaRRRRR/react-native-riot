import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native'

const ChampionGrid = (props) => {
  // var image = "require('../data/champion/" + props.championImage + "'" + ')'
  // image = image.toString()
  // console.log(image)
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={styles.gridImage}>
        <Image
          resizeMode='contain'
          style={styles.img}
          source={{
            uri: `http://192.168.10.2:8080/champion/${props.championImage}`,
          }}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.chmpTxt}>{props.champion}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  img: {
    width: 125,
    height: 125,
    borderRadius: 62,
  },
  chmpTxt: {
    fontFamily: 'open-sans-bold',
  },
  txtContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  gridImage: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
})

export default ChampionGrid
