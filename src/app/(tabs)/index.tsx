import { Link } from "expo-router";
import { styled } from 'nativewind';
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
const SafeAreaView = styled(RNSafeAreaView);
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View style={{ flex: 1, padding: 20 }}>
        <Text className="text-xl font-bold text-red-500">
          Welcome to Nativewind!
        </Text>
          
        <Link href="/Onboarding" className="text-blue-500  text-lg font-bold mt-4 rounded-md px-4 py-2 bg-blue-500 text-white">Go to onboarding Screen</Link>

        <Link href="/(auth)/signIn" className="text-blue-500  text-lg font-bold mt-4 rounded-md px-4 py-2 bg-blue-500 text-white">Sign In</Link>

        <Link href="/(auth)/signUp" className="text-blue-500  text-lg font-bold mt-4 rounded-md px-4 py-2 bg-blue-500 text-white">Sign Up</Link>
        
      </View>
    </SafeAreaView>
  );
}