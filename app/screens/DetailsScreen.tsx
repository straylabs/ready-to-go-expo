import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/navigation/types";

const DetailsScreen = () => {
  const { navigate } = useNavigation<AppNavigationProp<"Details">>();
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;
