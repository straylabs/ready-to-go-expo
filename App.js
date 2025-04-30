import RootNavigator from "@/navigation/RootNavigator";
import { ThemeProvider, useTheme } from "@/utils/ThemeContext";
import React from "react";
import "./global.css";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
