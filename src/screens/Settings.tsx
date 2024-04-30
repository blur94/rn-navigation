import { RootStackParamList } from "@/interface";
import { classes } from "@/styles/global";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet } from "react-native";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Settings">;

export default function SettingScreen({ navigation: { navigate } }: HomeProps) {
  return (
    <View style={classes.container}>
      <Text style={classes.text}>Settings</Text>
      <Button title="Go to Profile" onPress={() => navigate("Profile")} />
      <StatusBar style="auto" />
    </View>
  );
}
