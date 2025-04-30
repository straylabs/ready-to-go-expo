import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

/** Root Stack Param List */
// TODO:  Add your screen names here
export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  Details: { itemId: number };
};

/** Tab Param List */
// TODO:  Add your bottom tab screen names here
export type TabParamList = {
  Home: undefined;
  Settings: undefined;
};

/**
 * Screen Props (Contains navigation and route)
 */
export type AppScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

/**
 * Navigation Props
 */
export type AppNavigationProp<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>["navigation"];

/**
 * Route Props
 */
export type AppRouteProp<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
