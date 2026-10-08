import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const signIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link
  href="/(auth)/signUp"
  className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-lg font-bold text-white"
>
  Create an account
</Link>
    </View>
  )
}

export default signIn