import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@/navigation/types";
import { useTheme } from "@/utils/ThemeContext";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Screen from "@/components/Screen";
import { Settings as SettingsIcon } from "lucide-react-native";

const SettingsScreen = () => {
  const { navigate } = useNavigation<AppNavigationProp<"Tabs">>();
  const { theme, toggleTheme } = useTheme();

  return (
    <Screen
      useSafeArea
      header={{
        title: "Settings",
        titleIcon: <SettingsIcon size={20} color={theme.primary} />,
      }}
      keyboardAvoiding
    >
      <View className="flex-1 justify-center p-4">
        <Text
          onPress={toggleTheme}
          style={[styles.title, { color: theme.text }]}
        >
          SettingsScreen
        </Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          Configure your application settings
        </Text>

        <Input
          label="Username"
          style={{ width: "100%" }}
          placeholder="Enter username"
        />

        <Button
          variant="primary"
          style={styles.button}
          onPress={() => navigate("Details")}
        >
          Go to Details
        </Button>

        <Button variant="outline" style={styles.button} onPress={toggleTheme}>
          Toggle Theme
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
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
  button: {
    marginTop: 16,
  },
});

export default SettingsScreen;
