import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/home/home";
import ProductDetails from "./pages/productDetail/productDetails";
import { useFonts } from "expo-font";
import { Foundation,MaterialIcons } from "@expo/vector-icons";
import { IconButton } from "react-native-paper";
const focusedColor= "#26328C";

function Tab_Navigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 12,lineHeight: 18, fontFamily: "Poppins-Medium" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            return focused ?<Foundation name={"home"} size={size} color={focusedColor} />:<Foundation name={"home"} size={size} color={color} />
          } else if (route.name === "Category") {
            return  focused ? <MaterialIcons name={"category"} size={size} color={focusedColor} /> : <MaterialIcons name={"category"} size={size} color={color} />;
          } else if (route.name === "RX Upload") {
            return focused? <MaterialIcons name={"upload-file"} size={size} color={focusedColor} />:<MaterialIcons name={"upload-file"} size={size} color={color} />;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            return focused? <MaterialIcons name={"person-outline"} size={size} color={focusedColor} />:<MaterialIcons name={"person-outline"} size={size} color={color} />;
          }
         
        },
        tabBarLabel: route.name, // use route name as label
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Category"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="RX Upload"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
function Main() {
  const Stack = createStackNavigator();
  useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "`Poppins-Bold`": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });
  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     Poppins: require('./path/to/your/Poppins-Regular.ttf'),
  //     Poppins: require('./path/to/your/Poppins-Regular.ttf'),
  //     Poppins: require('./path/to/your/Poppins-Regular.ttf'),
  //     Poppins: require('./path/to/your/Poppins-Regular.ttf'),
  //     // Add other styles of the Poppins font if needed
  //   });
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Tab_Navigator"
          component={Tab_Navigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Main />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
