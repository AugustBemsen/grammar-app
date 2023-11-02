import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import colors from "../lib/colors";

interface AppButtonProps {
  label: string;
  loading?: boolean;
  onPress?: () => void;
  buttonStyle?: Record<string, any>;
  textStyle?: Record<string, any>;
}

const AppButton: React.FC<AppButtonProps> = ({
  label,
  loading,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={!loading ? onPress : () => {}}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} size="large" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green100,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: 55,
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
    fontFamily: "Poppins_700Bold",
  },
});

export default AppButton;
