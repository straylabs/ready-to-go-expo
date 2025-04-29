import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";
import { Thermometer } from "lucide-react-native";

const Example = () => {
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {Platform.OS == "android" && (
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      )}
      <Text
        onPress={toggleTheme}
        style={{ color: theme.textSecondary, fontWeight: "bold", fontSize: 24 }}
      >
        Example
      </Text>
      <Thermometer size={40} color={theme.accent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Example;
