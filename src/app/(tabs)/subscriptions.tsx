import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const subscriptions = () => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, padding: 20 }}>

         <Text>subscriptions</Text>
      </View>
     
    </SafeAreaView>
  )
}

export default subscriptions