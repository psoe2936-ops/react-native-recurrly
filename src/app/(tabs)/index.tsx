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
        <Text className="text-5xl font-sans-extrabold">
          Home
        </Text>
          
        <Link href="/Onboarding" className="mt-4 font-sans-bold rounded p-4 bg-primary text-white">Go to onboarding Screen</Link>

        <Link href="/(auth)/signIn" className="mt-4 font-sans-bold rounded p-4 bg-primary text-white">Sign In</Link>

        <Link href="/(auth)/signUp" className="mt-4 font-sans-bold rounded p-4 bg-primary text-white">Sign Up</Link>
        
      </View>
    </SafeAreaView>
  );
}