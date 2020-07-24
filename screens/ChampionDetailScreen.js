import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

import champ from '../data/fullChampions.json'

const ChampionDetailScreen = (props) => {
  const chmpId = props.navigation.getParam('champId')

  const selectedChmp = champ.find((chmp) => chmp.id === chmpId)

  return (
    <ScrollView style={styles.screen}>
      {selectedChmp.spells.map((item, index) => {
        return (
          <View style={styles.mainContainer} key={item.id}>
            <View style={styles.flexContainer}>
              <View style={{ marginBottom: 5 }}>
                <Image
                  resizeMode='contain'
                  style={styles.img}
                  source={{
                    uri: `http://192.168.10.2:8080/spell/${item.image.full}`,
                  }}
                ></Image>

                <Text style={styles.nameTxt}>{item.name}</Text>
              </View>
              <Text style={styles.txt}>{item.description}</Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

ChampionDetailScreen.navigationOptions = (navigationData) => {
  const cId = navigationData.navigation.getParam('champId')

  const selectedChmp = champ.find((chmp) => chmp.id === cId)

  return {
    headerTitle: selectedChmp.name + "'s Skills",
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    borderColor: 'black',
    padding: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  flexContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  txt: {
    flex: 1,
    fontFamily: 'open-sans',
    paddingLeft: 10,
  },
  nameTxt: {
    width: 85,
    padding: 2,
    fontFamily: 'open-sans-bold',
    fontSize: 12,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#91d1ff',
    width: '100%',
    height: '100%',
  },
})

export default ChampionDetailScreen
