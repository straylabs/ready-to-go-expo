import Example from "@/screens/Example";
import { ThemeProvider, useTheme } from "@/utils/ThemeContext";
import React from "react";

export default function App() {
  return (
    <ThemeProvider>
      <Example />
    </ThemeProvider>
  );
}
