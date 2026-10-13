import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
  'san-regular': require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
  'san-bold': require('../../assets/fonts/PlusJakartaSans-Bold.ttf'),
  'san-semibold': require('../../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
  'san-medium': require('../../assets/fonts/PlusJakartaSans-Medium.ttf'),
});

useEffect(() => {
  if (!fontsLoaded) {
   SplashScreen.preventAutoHideAsync();
  }
}, [fontsLoaded]);

if(!fontsLoaded) {
  return null;
} else {
  SplashScreen.hideAsync();
}
    
  return <Stack screenOptions={{headerShown:false}}/>;
}