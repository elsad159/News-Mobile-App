import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import BottomNavigation from "./components/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import HeaderNavigation from "./components/HeaderNavigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderNavigation />
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
