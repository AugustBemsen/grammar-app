import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import axios from "axios";
// @ts-ignore
import { SERVER_URL } from "@env";

import colors from "../lib/colors";
import Circles from "../assets/svgs/circles";
import AppInput from "../components/Input";
import AppButton from "../components/Button";

const RegisterScreen = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  // Function to parse the full name into first, middle, and last names
  const parseFullName = (name: string) => {
    const nameParts = name.split(" ");

    if (nameParts.length === 1) {
      setFirstName(nameParts[0]);
      setMiddleName(".");
      setLastName("");
    } else if (nameParts.length === 2) {
      setFirstName(nameParts[0]);
      setMiddleName(".");
      setLastName(nameParts[1]);
    } else if (nameParts.length === 3) {
      setFirstName(nameParts[0]);
      setMiddleName(nameParts[1]);
      setLastName(nameParts[2]);
    } else {
      setFirstName(nameParts[0]);
      setMiddleName(nameParts[1]);
      setLastName(nameParts[2]);
    }
  };

  // Call the parseFullName function when the fullName changes
  useEffect(() => {
    parseFullName(fullName);
  }, [fullName]);

  const handleSubmit = () => {
    Keyboard.dismiss();
    if (fullName && email && password) {
      setIsLoading(true);

      axios
        .post(`${SERVER_URL}auth/register`, {
          email,
          password,
          firstName,
          lastName,
          middleName,
        })
        .then((res) => {
          Toast.show({
            text1: "Account created! you can now login",
          });
          router.replace("Login");
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
        <AppButton
          label="Get Account"
          loading={isLoading}
          onPress={handleSubmit}
        />
        <Text style={styles.ctaText}>
          Already have an account?{" "}
          <Text onPress={() => router.replace("Login")} style={styles.ctaSpan}>
            {" "}
            Get back
          </Text>
        </Text>
        <StatusBar />
      </View>
    </TouchableWithoutFeedback>
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
