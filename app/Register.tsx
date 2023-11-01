import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

import colors from "../lib/colors";
import Circles from "../assets/svgs/circles";
import AppInput from "../components/Input";

const RegisterScreen = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Circles style={styles.circles} />
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subtitle}>Your Grammar Journey Begins Here.</Text>

      <AppInput label="Full Name" value={fullName} setValue={setFullName} />

      <AppInput
        label="Email"
        value={email}
        setValue={setEmail}
        keyboardType="email-address"
      />

      <AppInput
        label="Password"
        isPassword
        value={password}
        setValue={setPassword}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.ctaText}>
        Already have an account?{" "}
        <Text onPress={() => router.replace("Login")} style={styles.ctaSpan}>
          {" "}
          Get back
        </Text>
      </Text>
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    position: "relative",
    paddingHorizontal: 30,
  },
  circles: {
    position: "absolute",
    bottom: -30,
    right: 16,
    width: "100%",
    opacity: 0.9,
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    color: colors.white,
    fontFamily: "Poppins_700Bold",
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 16,
    width: "75%",
    fontFamily: "Poppins_500Medium",
    color: colors.white,
    alignSelf: "flex-start",
    marginBottom: 30,
    opacity: 0.8,
  },
  button: {
    backgroundColor: colors.green100,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
    fontFamily: "Poppins_700Bold",
  },

  ctaText: {
    color: colors.white,
    fontFamily: "Poppins_700Bold",
    marginTop: 25,
    textAlign: "center",
  },

  ctaSpan: {
    color: colors.green100,
  },
});

export default RegisterScreen;
