import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Straylabs",
  slug: "boilerplate",
  version: "1.0.0",
  icon: "./branding/icon.png",
  newArchEnabled: true,
  userInterfaceStyle:'automatic',
  android: {
    package: "com.straylabs.boilerplate",
    versionCode: 1,
    edgeToEdgeEnabled: true,
  },
  ios: {
    bundleIdentifier: "com.straylabs.boilerplate",
    buildNumber: "1",
    icon:{
      light: "./branding/icon-light.png",
      dark: "./branding/icon-dark.png",

    }
  },
  web: {
    bundler: "metro",
  },
  plugins: ["expo-font"],
};

export default config;
