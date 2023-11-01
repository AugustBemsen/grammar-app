import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../lib/colors";

interface ChatBubbleProps {
  message: string;
  isUser?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {
  return (
    <View
      style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}
    >
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    maxWidth: "65%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 7,
  },

  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: colors.green200,
  },

  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: colors.green300,
  },

  message: {
    fontSize: 16,
    color: colors.white,
    fontFamily: "Poppins_500Medium",
  },
});

export default ChatBubble;
