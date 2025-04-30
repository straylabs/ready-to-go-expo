import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Screen from "@/components/Screen";
import { Home as HomeIcon } from "lucide-react-native";

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Screen
      useSafeArea
      header={{
        title: "Home",
        titleIcon: <HomeIcon size={20} color={theme.primary} />,
      }}
    >
      <View className="flex-1 justify-center p-4">
        <Text
          onPress={toggleTheme}
          style={[styles.title, { color: theme.text }]}
        >
          HomeScreen
        </Text>
        <Input label="Email" style={{ width: "100%" }} placeholder="Email" />
        <Button variant="ghost" style={styles.button}>
          Click me
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
  button: {
    marginTop: 16,
  },
});

export default HomeScreen;
