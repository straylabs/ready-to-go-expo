import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/navigation/types";

const SettingsScreen = () => {
  const { navigate } = useNavigation<AppNavigationProp<"Tabs">>();
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="Go to Details" onPress={() => navigate("Details")} />
    </View>
  );
};

export default SettingsScreen;
