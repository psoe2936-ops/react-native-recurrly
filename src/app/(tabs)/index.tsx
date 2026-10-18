import dayjs from "dayjs";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListHeading from "../../../components/ListHeading";
import SubscriptionCard from "../../../components/SubscriptionCard";
import UpcomingSubscriptionCard from "../../../components/UpcomingSubscriptionCard";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "../../../constants/data";
import { icons } from "../../../constants/icons";
import images from "../../../constants/images";
import { formatCurrency } from "../../../lib/utils";




export default function App() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-background">

   <FlatList
   ListHeaderComponent={() => (

    <>
    <View className="home-header p-5">
    <View className="home-user">
          <Image
  source={images.avatar}
  style={{width: 50 , height: 50}}
/>
<Text className="home-user-name">{HOME_USER.name}</Text>

 </View>

    <Image source={icons.add} className="home-add-icon" style={{width: 55 , height:55}}/>
</View>

<View className="home-balance-card">
    <Text className="home-balance-label">Balance</Text>


<View className="home-balance-row">
  <Text className="home-balance-amount">
     {formatCurrency((HOME_BALANCE.amount))}
  </Text>

  <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}</Text>
</View>

</View>

<View className="mb-5">
   <ListHeading title='Upcoming'/>

   <FlatList
     data={UPCOMING_SUBSCRIPTIONS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <UpcomingSubscriptionCard data={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={() => (
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500">No upcoming subscriptions</Text>
        </View>
      )}
      contentContainerStyle={{ paddingHorizontal: 20 }}
   />
</View>
    
    </>
   )}
      data={HOME_SUBSCRIPTIONS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <SubscriptionCard
          subscription={item}
          expanded={expanded === item.id}
          onPress={() => setExpanded((current) => current === item.id ? null : item.id)}
        />
      )}
    extraData={expanded}
    ItemSeparatorComponent={() => <View className="h-8" />}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={
        <Text className="home-empty-state">No subscriptions found</Text>
    }
    contentContainerStyle={{ paddingHorizontal: 20 }}
    contentContainerClassName='pb-30'
    />

    </SafeAreaView>
  );
}