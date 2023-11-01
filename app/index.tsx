import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import Ziya from "../assets/svgs/ziya";
import colors from "../lib/colors";
import Arrows from "../assets/svgs/arrows";

const WelcomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Arrows style={styles.arrow} />
      <Ziya />
      <Text style={styles.title}>Hello, I’m Ziya</Text>
      <Text style={styles.subtitle}>
        Your Instant Grammar Guru: Perfecting Your Text, One Error at a Time
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    position: "relative",
  },
  arrow: {
    position: "absolute",
    top: -10,
    right: -10,
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    color: colors.white,
    fontFamily: "Poppins_700Bold",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    width: "70%",
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    color: colors.white,
    opacity: 0.8,
  },
  button: {
    backgroundColor: colors.green100,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
    fontFamily: "Poppins_700Bold",
  },
});

export default WelcomeScreen;
