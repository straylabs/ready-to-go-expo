import React, { ReactNode } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  ViewStyle,
  TextStyle,
  Pressable,
} from "react-native";
import { useTheme } from "@/utils/ThemeContext";
import { ChevronLeft } from "lucide-react-native";

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  showBackButton?: boolean;
  onBackPress?: () => void;
  onTitlePress?: () => void;
  titleIcon?: ReactNode;
  transparent?: boolean;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  centerTitle?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  leftElement,
  rightElement,
  showBackButton = false,
  onBackPress,
  onTitlePress,
  titleIcon,
  transparent = false,
  containerStyle,
  titleStyle,
  subtitleStyle,
  centerTitle = false,
}) => {
  const { theme, isDarkMode } = useTheme();

  // Default back button if showBackButton is true and no leftElement is provided
  const renderLeftElement = () => {
    if (leftElement) {
      return leftElement;
    }

    if (showBackButton) {
      return (
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBackPress}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ChevronLeft size={24} color={theme.text} />
        </TouchableOpacity>
      );
    }

    return null;
  };

  // Determine if title should be pressable
  const TitleContainer = onTitlePress ? Pressable : View;

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={transparent ? "transparent" : theme.background}
        translucent={transparent}
      />
      <View
        style={[
          styles.container,
          {
            backgroundColor: transparent ? "transparent" : theme.background,
          },
          containerStyle,
        ]}
      >
        <View style={styles.leftContainer}>{renderLeftElement()}</View>

        <TitleContainer
          style={[styles.titleContainer, centerTitle && styles.centerTitle]}
          onPress={onTitlePress}
        >
          <View style={styles.titleWrapper}>
            {titleIcon && <View style={styles.titleIcon}>{titleIcon}</View>}
            {title && (
              <Text
                style={[styles.title, { color: theme.text }, titleStyle]}
                numberOfLines={1}
              >
                {title}
              </Text>
            )}
          </View>
          {subtitle && (
            <Text
              style={[
                styles.subtitle,
                { color: theme.textSecondary },
                subtitleStyle,
              ]}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          )}
        </TitleContainer>

        <View style={styles.rightContainer}>{rightElement}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    minWidth: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rightContainer: {
    minWidth: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerTitle: {
    alignItems: "center",
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  backButton: {
    padding: 4,
  },
  titleIcon: {
    marginRight: 8,
  },
});

export default Header;
