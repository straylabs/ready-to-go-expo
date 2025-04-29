import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "cro",
  slug: "cro",
  version: "1.0.0",
  icon: "./branding/icon.png",
  newArchEnabled: true,
  android: {
    package: "com.straylabs.cro",
    versionCode: 1,
  },
  ios: {
    bundleIdentifier: "com.straylabs.cro",
    buildNumber: "1",
  },
};

export default config;
