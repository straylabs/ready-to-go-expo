import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";

const Example = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text
        onPress={toggleTheme}
        style={{ color: theme.textSecondary, fontWeight: "bold", fontSize: 24 }}
      >
        Example
      </Text>
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
