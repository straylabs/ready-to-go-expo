import React, { ReactNode } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/utils/ThemeContext";
import Header, { HeaderProps } from "@/components/Header";

interface ScreenProps {
  children: ReactNode;
  style?: ViewStyle;
  useSafeArea?: boolean;
  scroll?: boolean;
  keyboardAvoiding?: boolean;
  header?: HeaderProps;
  backgroundColor?: string;
  statusBarStyle?: "light-content" | "dark-content" | "default";
  statusBarTranslucent?: boolean;
  statusBarHidden?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
  contentContainerStyle?: ViewStyle;
  testID?: string;
  safeAreaEdges?: Array<"top" | "right" | "bottom" | "left">;
}

const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  useSafeArea = true,
  scroll = false,
  keyboardAvoiding = false,
  header,
  backgroundColor,
  statusBarStyle,
  statusBarTranslucent = false,
  statusBarHidden = false,
  refreshing = false,
  onRefresh,
  contentContainerStyle,
  testID,
  safeAreaEdges = ["top", "right", "bottom", "left"],
}) => {
  const { theme, isDarkMode } = useTheme();

  // Determine background color
  const bgColor = backgroundColor || theme.background;

  // Determine status bar style
  const barStyle =
    statusBarStyle || (isDarkMode ? "light-content" : "dark-content");

  // Determine if we should show refresh control
  const showRefreshControl = scroll && onRefresh !== undefined;

  // Content to render
  const content = (
    <>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={bgColor}
        translucent={statusBarTranslucent}
        hidden={statusBarHidden}
      />

      {header && <Header {...header} />}

      {scroll ? (
        <ScrollView
          style={[styles.scrollView, { backgroundColor: bgColor }]}
          contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
          keyboardShouldPersistTaps="handled"
          refreshControl={
            showRefreshControl ? (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[theme.primary]}
                tintColor={theme.primary}
              />
            ) : undefined
          }
          testID={`${testID}-scroll`}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={[styles.container, { backgroundColor: bgColor }, style]}
          testID={testID}
        >
          {children}
        </View>
      )}
    </>
  );

  // Wrap in KeyboardAvoidingView if needed
  const keyboardAvoidingContent = keyboardAvoiding ? (
    <KeyboardAvoidingView
      style={styles.keyboardAvoid}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={header ? 56 : 0}
    >
      {content}
    </KeyboardAvoidingView>
  ) : (
    content
  );

  // Wrap in SafeAreaView if needed
  if (useSafeArea) {
    return (
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: bgColor }]}
        edges={safeAreaEdges}
      >
        {keyboardAvoidingContent}
      </SafeAreaView>
    );
  }

  return keyboardAvoidingContent;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
});

export default Screen;
