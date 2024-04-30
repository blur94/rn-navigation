import { RootStackParamList } from "@/interface";
import { classes } from "@/styles/global";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet } from "react-native";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation: { navigate } }: HomeProps) {
  return (
    <View style={classes.container}>
      <Text style={classes.text}>Profile</Text>
      <Button title="Go to Home" onPress={() => navigate("Home")} />
      <StatusBar style="auto" />
    </View>
  );
}
