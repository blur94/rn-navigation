import { RootStackParamList } from "@/interface";
import { classes } from "@/styles/global";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet } from "react-native";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation: { navigate } }: HomeProps) {
  return (
    <View style={classes.container}>
      <Text>Hello World!</Text>
      <Button title="Go to Details" onPress={() => navigate("Details")} />
      <StatusBar style="auto" />
    </View>
  );
}
