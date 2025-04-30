import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";
import Input from "@/components/Input";
import Button from "@/components/Button";

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      className="flex-1 justify-center p-4"
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Text onPress={toggleTheme} style={[styles.title, { color: theme.text }]}>
        HomeScreen
      </Text>
      <Input label="Email" style={{ width: "100%" }} placeholder="Email" />
      <Button variant="ghost" children="Click me" />
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
