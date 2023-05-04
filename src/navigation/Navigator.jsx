import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Map from '../screens/Map'

const Stack = createNativeStackNavigator()

function Navigator () {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Map' component={Map} />
    </Stack.Navigator>
  )
}

export default Navigator
