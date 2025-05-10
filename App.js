import RootNavigator from "@/navigation/RootNavigator";
import { ThemeProvider } from "@/utils/ThemeContext";
import React from "react";
import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "@/utils/AuthContext";
import { useCustomFonts } from "@/utils/fonts";

export default function App() {
  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }
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
