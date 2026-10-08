import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const SubscriptionDetails = () => {
    const {id}  = useLocalSearchParams<{id:string}>();
  return (
    <View>
      <Text> SubscriptionDetails: {id}</Text>
    </View>
  )
}

export default SubscriptionDetails