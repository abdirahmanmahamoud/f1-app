import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Stack } from "expo-router";
import { Colors } from "../../../Constants/Colors";

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);

export default function RaceLayout() {
  return (
    <>
      <Stack.Screen
        options={{ title: "Race details", headerBackTitleVisible: false }}
      />
      <TopTabs
        screenOptions={{
          tabBarStyle: { backgroundColor: Colors.primary },
          tabBarInactiveTintColor: "gainsboro",
          tabBarActiveTintColor: "white",
          tabBarIndicatorStyle: { backgroundColor: "white", height: 3 },
          tabBarLabelStyle: { fontFamily: "F1-Bold", fontSize: 12 },
        }}
      >
        <TopTabs.Screen name="index" options={{ title: "Detail" }} />
      </TopTabs>
    </>
  );
}
