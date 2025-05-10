import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";
import Button from "@/components/Button";
import Screen from "@/components/Screen";
import { useAuth } from "@/utils/AuthContext";

const HomeScreen = () => {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const { logout } = useAuth();

  return (
    <Screen useSafeArea>
      <View className="flex-1 justify-center p-4">
        <Text style={[styles.title, { color: theme.text }]}>
          Modify{" "}
          <Text
            style={{
              backgroundColor: theme.surfaceHover,
              paddingHorizontal: 4,
              fontSize: 14,
            }}
          >
            {"  /app/screens/HomeScreen.tsx  "}
          </Text>{" "}
          to apply your changes
        </Text>
        <Button variant="primary" style={styles.button} onPress={toggleTheme}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
        <Button variant="primary" style={styles.button} onPress={logout}>
          Logout
        </Button>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    marginTop: 16,
  },
});

export default HomeScreen;
