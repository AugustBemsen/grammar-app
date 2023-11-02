import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

import colors from "../lib/colors";
import Circles from "../assets/svgs/circles";
import AppInput from "../components/Input";
import axios from "axios";
// @ts-ignore
import { SERVER_URL } from "@env";
import AppButton from "../components/Button";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (email && password) {
      setIsLoading(true);

      axios
        .post(`${SERVER_URL}auth/login`, { email, password })
        .then((res) => {
          router.replace("Chat");
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);

          if (err.response) {
            Toast.show({
              text1: err?.response?.data?.message || "Something went wrong",
              type: "error",
            });
          } else {
            Toast.show({
              text1: "Network Error...",
              type: "error",
            });
          }
        });
    } else {
      Toast.show({
        text1: "Kindly fill out all felids",
        type: "error",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Circles style={styles.circles} />
      <Text style={styles.title}>Welcome, Login</Text>
      <Text style={styles.subtitle}>Where Grammatical Magic Happens.</Text>

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

      <AppButton onPress={handleSubmit} label="Get In" loading={isLoading} />
      <Text style={styles.ctaText}>
        Don't have an account?{" "}
        <Text onPress={() => router.replace("Register")} style={styles.ctaSpan}>
          {" "}
          Create One
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
    marginTop: 4,
    width: "75%",
    fontFamily: "Poppins_500Medium",
    color: colors.white,
    alignSelf: "flex-start",
    marginBottom: 40,
    opacity: 0.8,
  },

  ctaText: {
    color: colors.white,
    fontFamily: "Poppins_700Bold",
    marginTop: 25,
  },

  ctaSpan: {
    color: colors.green100,
  },
});

export default LoginScreen;
