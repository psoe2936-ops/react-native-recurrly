import clsx from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { tabs } from '../../../data';
import { useSafeAreaInsets } from 
"react-native-safe-area-context";
import {colors , components} from '../../../constants/theme'

const tabBar = components.tabBar;

const TabLayout = () => {
  const insets =  useSafeAreaInsets();
 
  const TabIcon = ({ focused, icon }: TabIconProps) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: focused ? "#E5735F" : "transparent",
        }}
      >
        <Image source={icon} resizeMode="contain" style={{ width: 24, height: 24 }} />
      </View>
    </View>
  );

  return (
    <Tabs screenOptions={{
       headerShown: false,
       tabBarShowLabel: false,
       tabBarStyle: {
         position: 'absolute',
        bottom: Math.max(insets.bottom , tabBar.horizontalInset),
        height:tabBar.height,
        marginHorizontal:tabBar.horizontalInset,
        borderRadius:tabBar.radius,
        backgroundColor:colors.primary,
        borderTopWidth:0,
        elevation: 0,

       },
         tabBarItemStyle: {
           paddingVertical: tabBar.height / 2 - tabBar.iconFrame/  1.6
         },
         tabBarIconStyle : {
           width : tabBar.iconFrame,
           height: tabBar.iconFrame,
           alignItems:'center'
         }
    }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            )
          }} />
      ))}
    </Tabs>
  );
};

export default TabLayout;