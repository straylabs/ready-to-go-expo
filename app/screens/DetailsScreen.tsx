import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/navigation/types";
import { useTheme } from "@/utils/ThemeContext";
import Button from "@/components/Button";
import Screen from "@/components/Screen";
import { Info } from "lucide-react-native";

const DetailsScreen = () => {
  const { navigate, goBack } = useNavigation<AppNavigationProp<"Details">>();
  const { theme, toggleTheme } = useTheme();

  return (
    <Screen
      useSafeArea
      header={{
        title: "Details",
        showBackButton: true,
        onBackPress: () => goBack(),
        titleIcon: <Info size={20} color={theme.primary} />,
      }}
    >
      <View className="flex-1 justify-center p-4">
        <Text
          onPress={toggleTheme}
          style={[styles.title, { color: theme.text }]}
        >
          DetailsScreen
        </Text>
        <Text style={[styles.description, { color: theme.textSecondary }]}>
          This is the details screen with theming applied.
        </Text>
        <Button
          variant="primary"
          onPress={() => goBack()}
          style={styles.button}
        >
          Go Back to Home
        </Button>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontFamily: "mont",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
  },
  button: {
    marginTop: 16,
  },
});

export default DetailsScreen;
