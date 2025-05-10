import { useTheme } from "@/utils/ThemeContext";
import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = ({ style }: { style?: object }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    divider: {
      height: 1,
      backgroundColor: theme.border,
      width: "100%",
      marginVertical: 16,
    },
  });
  return <View style={[styles.divider, style]} />;
};

export default Divider;
