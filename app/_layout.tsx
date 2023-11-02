import { Stack } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Toast from "react-native-toast-message";

export default function Layout() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Stack
        screenOptions={{
          animation: "slide_from_right",
          autoHideHomeIndicator: true,
          headerShown: false,
        }}
      />
      <Toast position="bottom" />
    </>
  );
}
