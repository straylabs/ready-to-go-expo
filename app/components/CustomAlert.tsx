import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { useTheme } from "@/utils/ThemeContext";

interface CustomAlertButton {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: "default" | "destructive";
}

interface CustomAlertProps {
  visible: boolean;
  title: string;
  message: string;
  buttons: CustomAlertButton[];
  onClose: () => void;
  children?: React.ReactNode; // Add children prop
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  title,
  message,
  buttons,
  onClose,
  children, // Destructure children
}) => {
  const { theme } = useTheme();

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={[styles.overlay, { backgroundColor: theme.backdrop }]}>
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
          <Text style={[styles.message, { color: theme.textSecondary }]}>
            {message}
          </Text>
          {children && <View style={styles.childrenContainer}>{children}</View>}
          <View style={styles.buttonContainer}>
            {buttons.map((button, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      button.variant === "destructive"
                        ? theme.error
                        : theme.primary,
                  },
                ]}
                onPress={(event) => {
                  button.onPress(event);
                  onClose();
                }}
              >
                <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                  {button.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    width: "80%",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    padding: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  childrenContainer: {
    width: "100%",
    marginBottom: 16,
  },
});

export default CustomAlert;
