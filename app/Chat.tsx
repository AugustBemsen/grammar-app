import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import colors from "../lib/colors";
import Arrows from "../assets/svgs/arrows";
import CenterArrow from "../assets/svgs/centerArrow";
import BottomArrow from "../assets/svgs/bottomArrow";
import ChatBubble from "../components/ChatBubble";
import SendIcon from "../assets/svgs/sendIcon";

const ChatScreen = () => {
  const chatSafeArea = useSafeAreaInsets().top;
  return (
    <View style={styles.container}>
      <Arrows style={styles.arrow} />
      <CenterArrow style={styles.centerArrow} />
      <BottomArrow style={styles.bottomArrow} />
      <View style={[styles.chatSection, { marginTop: chatSafeArea + 16 }]}>
        <ChatBubble message="Hello, i'm Ziya, what are we fixing today!" />
        <ChatBubble isUser message="Noting" />
        <ChatBubble
          isUser
          message="Noting i just want to know if this is correct my boss"
        />
        <ChatBubble message="Hello, i'm Ziya, what are we fixing today!" />
        <ChatBubble message="Noting" />
      </View>
      <View style={styles.chatActions}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.send}>
          <SendIcon />
        </TouchableOpacity>
      </View>

      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    position: "relative",
  },
  arrow: {
    position: "absolute",
    top: -10,
    right: -10,
    zIndex: -2,
  },
  centerArrow: {
    position: "absolute",
    top: "80%",
    left: "55%",
    transform: [
      { translateY: -0.5 * Dimensions.get("window").height },
      { translateX: -0.5 * Dimensions.get("window").width },
    ],
    zIndex: -2,
  },
  bottomArrow: {
    position: "absolute",
    bottom: -5,
    left: -10,
    zIndex: -2,
  },

  chatSection: {
    paddingHorizontal: 30,
  },

  chatActions: {
    paddingHorizontal: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
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
    width: "80%",
  },

  send: {
    width: 50,
    height: 50,
    backgroundColor: colors.green100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
