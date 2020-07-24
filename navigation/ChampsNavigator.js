import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
//import { createBottomTabNavigator } from 'react-navigation-tabs'
//import { createDrawerNavigator } from 'react-navigation-drawer'
import ChampionsScreen from '../screens/ChampionsScreen'
import ChampionDetailScreen from '../screens/ChampionDetailScreen'
import Colors from '../constants/Colors'
import { Platform } from 'react-native'

const ChampsNavigator = createStackNavigator(
  {
    Champions: ChampionsScreen,
    ChampionDetails: ChampionDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : '#ccc',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
)

export default createAppContainer(ChampsNavigator)
