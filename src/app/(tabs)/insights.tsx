import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const insights = () => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, padding: 20 }}>

        <Text>insights</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default insights