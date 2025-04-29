import React, { createContext, useState, useContext, ReactNode } from "react";

interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  divider: string;
  accent: string;
  disabled: string;
  placeholder: string;
  card: string;
  cardHeader: string;
  border: string;
  shadow: string;
  highlight: string;
  link: string;
  notification: string;
  backdrop: string;
  surfaceHover: string;
  surfaceActive: string;
  buttonText: string;
  inputBackground: string;
}

interface ThemeContextType {
  theme: ThemeColors;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const lightTheme: ThemeColors = {
  primary: "#4A90E2",
  secondary: "#50C878",
  background: "#FFFFFF",
  surface: "#F5F5F5",
  text: "#333333",
  textSecondary: "#757575",
  error: "#D32F2F",
  success: "#388E3C",
  warning: "#FFA000",
  info: "#1976D2",
  divider: "#EEEEEE",
  accent: "#FF5722",
  disabled: "#BDBDBD",
  placeholder: "#9E9E9E",
  card: "#FFFFFF",
  cardHeader: "#F9F9F9",
  border: "#E0E0E0",
  shadow: "rgba(0, 0, 0, 0.1)",
  highlight: "#E3F2FD",
  link: "#2962FF",
  notification: "#FF4081",
  backdrop: "rgba(0, 0, 0, 0.5)",
  surfaceHover: "#EEEEEE",
  surfaceActive: "#E0E0E0",
  buttonText: "#FFFFFF",
  inputBackground: "#F5F5F5",
};

const darkTheme: ThemeColors = {
  primary: "#5C9CE6",
  secondary: "#66D18B",
  background: "#121212",
  surface: "#1E1E1E",
  text: "#FFFFFF",
  textSecondary: "#B0B0B0",
  error: "#EF5350",
  success: "#4CAF50",
  warning: "#FFB74D",
  info: "#42A5F5",
  divider: "#2A2A2A",
  accent: "#FF7043",
  disabled: "#616161",
  placeholder: "#757575",
  card: "#252525",
  cardHeader: "#2C2C2C",
  border: "#424242",
  shadow: "rgba(0, 0, 0, 0.2)",
  highlight: "#1A237E",
  link: "#82B1FF",
  notification: "#FF80AB",
  backdrop: "rgba(0, 0, 0, 0.7)",
  surfaceHover: "#2A2A2A",
  surfaceActive: "#333333",
  buttonText: "#FFFFFF",
  inputBackground: "#2A2A2A",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
