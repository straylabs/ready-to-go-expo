import Example from "@/screens/Example";
import { ThemeProvider } from "@/utils/ThemeContext";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ThemeProvider>
      <Example />
    </ThemeProvider>
  );
}
