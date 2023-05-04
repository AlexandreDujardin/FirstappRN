import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Map from '../screens/Map'
import Icon from 'react-native-vector-icons/Ionicons'
import CameraScreen from '../screens/Camera'

const Stack = createNativeStackNavigator()

function ProfileNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Map' component={Map} />
    </Stack.Navigator>
  )
}

const TabStack = createBottomTabNavigator()

function Navigator () {
  return (
    <TabStack.Navigator initialRouteName='Home'>
      <TabStack.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          }
        }}
      />
      <TabStack.Screen
        name='Camera'
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={focused ? 'camera' : 'camera-outline'} size={size} color={color} />
          }
        }}
      />
      <TabStack.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={focused ? 'ios-person-circle-sharp' : 'ios-person-circle-outline'} size={size} color={color} />
          }
        }}
        name='ProfileStack'
        component={ProfileNavigator}
      />
    </TabStack.Navigator>
  )
}

export default Navigator
