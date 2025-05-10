import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
// TODO: Add more fonts as needed

export const loadFonts = async () => {
  await Font.loadAsync({
    Inter_Regular: Inter_400Regular,
    Inter_Bold: Inter_700Bold,
    Roboto_Regular: Roboto_400Regular,
    Roboto_Bold: Roboto_700Bold,
  });
};

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    Inter_Regular: Inter_400Regular,
    Inter_Bold: Inter_700Bold,
    Roboto_Regular: Roboto_400Regular,
    Roboto_Bold: Roboto_700Bold,
  });
  return fontsLoaded;
};

export const fonts = {
  Inter: {
    regular: "Inter_Regular",
    bold: "Inter_Bold",
  },
  Roboto: {
    regular: "Roboto_Regular",
    bold: "Roboto_Bold",
  },
};
