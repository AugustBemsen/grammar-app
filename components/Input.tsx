import React, { Dispatch, SetStateAction, useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../lib/colors";

interface InputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const AppInput: React.FC<InputProps> = ({
  label,
  isPassword = false,
  value,
  setValue,
  ...props
}) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        secureTextEntry={isPassword && !isPasswordVisible}
        onChangeText={(text) => setValue(text)}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.visibilityToggle}
        >
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={colors.white}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 20,
    width: "100%",
  },

  label: {
    marginBottom: 10,
    color: colors.white,
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },

  input: {
    borderWidth: 2,
    borderColor: colors.green200,
    padding: 10,
    borderRadius: 10,
    height: 60,
    backgroundColor: colors.green300,
    color: colors.white,
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },

  visibilityToggle: {
    position: "absolute",
    top: 55,
    right: 10,
    opacity: 0.8,
  },
});

export default AppInput;
