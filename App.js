import RootNavigator from "@/navigation/RootNavigator";
import { ThemeProvider, useTheme } from "@/utils/ThemeContext";
import React from "react";
import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "@/utils/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
