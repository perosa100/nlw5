import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles/theme'
import AppLoading from 'expo-app-loading'
//import * as Notification from 'expo-notifications'

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

import Routes from './src/routes'
//import { PlantProps } from './src/libs/storate'

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  /*   useEffect(() => {
    const subscription = Notification.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps
        console.log(data)
      }
    )
    return () => subscription.remove()
  }, []) */

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
