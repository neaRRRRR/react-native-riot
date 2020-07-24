import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, SafeAreaView } from 'react-native'

import ChampionGrid from '../components/ChampionGrid'
import CustomActivityIndicator from '../components/CustomActivityIndicator'

const ChampionsScreen = (props) => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://192.168.10.2:8080/fullChampions.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  const renderGrid = ({ item }) => {
    let full = item.image.full
    return (
      <ChampionGrid
        champion={item.name}
        championImage={full}
        onSelect={() => {
          props.navigation.navigate('ChampionDetails', {
            champId: item.id,
            champSkills: item.spells.id, //!pass data to new screen
          })
        }}
      />
    )
  }

  return (
    <SafeAreaView>
      {isLoading ? (
        <CustomActivityIndicator />
      ) : (
        <FlatList
          renderItem={renderGrid}
          data={data}
          keyExtractor={(item) => item.key}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  )
}

ChampionsScreen.navigationOptions = {
  headerTitle: 'All Champions',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ChampionsScreen
