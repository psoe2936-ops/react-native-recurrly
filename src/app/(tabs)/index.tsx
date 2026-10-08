import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../../global.css";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-red-500">
        Welcome to Nativewind!
      </Text>
        
        <Link href="/Onboarding" className="text-blue-500  text-lg font-bold mt-4 rounded-md px-4 py-2 bg-blue-500 text-white">Go to onboarding Screen</Link>

        <Link href="/(auth)/signIn" className="text-blue-500  text-lg font-bold mt-4 rounded-md px-4 py-2 bg-blue-500 text-white">Sign In</Link>
        <Link href="/(auth)/signUp" className="text-blue-500  text-lg font-bold mt-4 rounded-md px-4 py-2 bg-blue-500 text-white">Sign Up</Link>

           <Link href='/(tabs)/subscriptions/spofity'>Spofity Subscription</Link>
           <Link 
              href='/(tabs)/subscriptions/claude'
           > Claude Max Subscription</Link>
           <Link 
              href='/(tabs)/subscriptions/youtube'
           > Youtube Subscription</Link>
    </View>
  );
}