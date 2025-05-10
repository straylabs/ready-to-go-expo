import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "@/utils/AuthContext";
import Button from "@/components/Button";
import Screen from "@/components/Screen";

const LoginScreen = () => {
  const { login } = useAuth();

  return (
    <Screen useSafeArea>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Button variant="primary" onPress={login} style={styles.button}>
          Authorize Login
        </Button>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;
