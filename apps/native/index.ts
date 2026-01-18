import * as SplashScreen from 'expo-splash-screen'
import { LogBox } from 'react-native'

import 'expo-router/entry'

SplashScreen.preventAutoHideAsync()

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])
