import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ContactScreen from "../screens/ContactScreen";
import About from "../screens/About";
import Features from "../screens/Features";
import { StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <SafeAreaView style={styles.tabsContainer}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Contact":
                iconName = "customerservice";
                break;
              case "About":
                iconName = "user";
                break;
              case "Features":
                iconName = "setting";
                break;
              default:
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "#ff4e4e",
          tabBarInactiveTintColor: "#a9acaf",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Features" component={Features} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  tabsContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default BottomNavigation;
