import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Link
       href="/(auth)/signIn" className="text-blue-500  text-lg font-bold mt-4 rounded-md px-4 py-2 bg-blue-500 text-white">Sign In</Link>
    </View>
  )
}

export default signUp