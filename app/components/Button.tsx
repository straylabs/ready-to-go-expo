import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
  View,
} from "react-native";
import { useTheme } from "@/utils/ThemeContext";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isLoading = false,
  fullWidth = false,
  disabled = false,
  style,
  ...props
}: ButtonProps) => {
  const { theme } = useTheme();

  // Get background color based on variant
  const getBackgroundColor = () => {
    if (disabled) return theme.disabled;

    switch (variant) {
      case "primary":
        return theme.primary;
      case "secondary":
        return theme.secondary;
      case "destructive":
        return theme.error;
      case "outline":
      case "ghost":
        return "transparent";
      default:
        return theme.primary;
    }
  };

  // Get text color based on variant
  const getTextColor = () => {
    if (disabled) return theme.textSecondary;

    switch (variant) {
      case "primary":
      case "secondary":
      case "destructive":
        return theme.buttonText;
      case "outline":
        return theme.primary;
      case "ghost":
        return theme.text;
      default:
        return theme.buttonText;
    }
  };

  // Get border color based on variant
  const getBorderColor = () => {
    if (disabled) return theme.disabled;

    switch (variant) {
      case "outline":
        return theme.primary;
      default:
        return "transparent";
    }
  };

  // Get padding based on size
  const getPadding = () => {
    switch (size) {
      case "sm":
        return { paddingVertical: 8, paddingHorizontal: 12 };
      case "md":
        return { paddingVertical: 12, paddingHorizontal: 16 };
      case "lg":
        return { paddingVertical: 16, paddingHorizontal: 24 };
      default:
        return { paddingVertical: 12, paddingHorizontal: 16 };
    }
  };

  // Get font size based on size
  const getFontSize = () => {
    switch (size) {
      case "sm":
        return 14;
      case "md":
        return 16;
      case "lg":
        return 18;
      default:
        return 16;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          borderWidth: variant === "outline" ? 1 : 0,
          opacity: disabled ? 0.7 : 1,
          width: fullWidth ? "100%" : "auto",
        },
        getPadding(),
        style,
      ]}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
      {...props}
    >
      <View style={styles.contentContainer}>
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={getTextColor()}
            style={styles.loader}
          />
        ) : (
          <>
            {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
            <Text
              style={[
                styles.text,
                {
                  color: getTextColor(),
                  fontSize: getFontSize(),
                  marginLeft: leftIcon ? 8 : 0,
                  marginRight: rightIcon ? 8 : 0,
                },
              ]}
            >
              {children}
            </Text>
            {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
  iconLeft: {
    marginRight: 4,
  },
  iconRight: {
    marginLeft: 4,
  },
  loader: {
    marginHorizontal: 8,
  },
});

export default Button;
