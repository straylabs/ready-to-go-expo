import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      className="flex-1 items-center justify-center"
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text onPress={toggleTheme} style={[styles.title, { color: theme.text }]}>
        HomeScreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 28,
    fontFamily: "mont",
    marginBottom: 16,
  },
});

export default HomeScreen;
