import { RootStackParamList } from "@/interface";
import DetailsScreen from "@/screens/Details";
import HomeScreen from "@/screens/Home";
import ProfileScreen from "@/screens/Profile";
import SettingScreen from "@/screens/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const { Navigator, Screen } =
    createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Screen name="Details" component={DetailsScreen} />
        <Screen name="Profile" component={ProfileScreen} />
        <Screen name="Settings" component={SettingScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
