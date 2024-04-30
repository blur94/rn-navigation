import { RootStackParamList } from "@/interface";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Button, Text } from "react-native";

export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;
export default function DetailsScreen({
  navigation: { navigate },
}: DetailsProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigate("Details")}
      />
      <Button title="Go to Settings" onPress={() => navigate("Settings")} />
    </View>
  );
}
