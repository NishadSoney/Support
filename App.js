import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomSideBarMenu from "./components/CustomSideBarMenu";
//import {SafeAreaProvider} from 'react-native-safe-area-context'

import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default function App() {
  return (
    // <SafeAreaProvider>
    <AppContainer/>
//</SafeAreaProvider>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);