import React, { ReactNode } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
  Pressable,
} from "react-native";
import { useTheme } from "@/utils/ThemeContext";
import { Eye, EyeOff } from "lucide-react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  isPassword?: boolean;
}

const Input = ({
  label,
  error,
  leftElement,
  rightElement,
  isPassword,
  secureTextEntry,
  style,
  ...props
}: InputProps) => {
  const { theme } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Determine if we should use password visibility toggle
  const shouldUsePasswordToggle = isPassword && !rightElement;
  const actualSecureTextEntry = isPassword
    ? !isPasswordVisible
    : secureTextEntry;

  // Generate password visibility toggle element
  const passwordToggleElement = shouldUsePasswordToggle ? (
    <Pressable onPress={togglePasswordVisibility} style={styles.iconContainer}>
      {isPasswordVisible ? (
        <EyeOff size={20} color={theme.textSecondary} />
      ) : (
        <Eye size={20} color={theme.textSecondary} />
      )}
    </Pressable>
  ) : null;

  // Use either the provided right element or the password toggle
  const finalRightElement = rightElement || passwordToggleElement;

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: theme.textSecondary }]}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.surface,
            borderColor: error ? theme.error : theme.border,
          },
        ]}
      >
        {leftElement && <View style={styles.iconContainer}>{leftElement}</View>}
        <TextInput
          style={[
            styles.input,
            { color: theme.textSecondary },
            leftElement && styles.inputWithLeftIcon,
            finalRightElement && styles.inputWithRightIcon,
            style,
          ]}
          placeholderTextColor={theme.textSecondary}
          secureTextEntry={actualSecureTextEntry}
          {...props}
        />
        {finalRightElement && (
          <View style={styles.iconContainer}>{finalRightElement}</View>
        )}
      </View>
      {error && (
        <Text style={[styles.error, { color: theme.error }]}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  inputWithLeftIcon: {
    paddingLeft: 8,
  },
  inputWithRightIcon: {
    paddingRight: 8,
  },
  iconContainer: {
    paddingHorizontal: 12,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default Input;
