import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "Straylabs",
  slug: "boilerplate",
  version: "1.0.0",
  icon: "./branding/icon.png",
  newArchEnabled: true,
  android: {
    package: "com.straylabs.boilerplate",
    versionCode: 1,
  },
  ios: {
    bundleIdentifier: "com.straylabs.boilerplate",
    buildNumber: "1",
  },
  web: {
    bundler: "metro",
  },
  plugins: ["expo-font"],
};

export default config;
