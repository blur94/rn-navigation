import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

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
      </Navigator>
    </NavigationContainer>
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

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
function HomeScreen({ navigation: { navigate } }: HomeProps) {
  return (
    <View style={styles.container}>
      <Text>Hello World! Let's Navigate</Text>
      <Button title="Go to Details" onPress={() => navigate("Details")} />
      <StatusBar style="auto" />
    </View>
  );
}

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

function DetailsScreen({ navigation: { navigate } }: DetailsProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigate("Details")}
      />
    </View>
  );
}
