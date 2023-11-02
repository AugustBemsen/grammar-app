import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import axios from "axios";
// @ts-ignore
import { OPEN_AI_SECRET } from "@env";

import colors from "../lib/colors";
import Arrows from "../assets/svgs/arrows";
import CenterArrow from "../assets/svgs/centerArrow";
import BottomArrow from "../assets/svgs/bottomArrow";
import ChatBubble from "../components/ChatBubble";
import SendIcon from "../assets/svgs/sendIcon";
import LogoutIcon from "../assets/svgs/logoutIcon";

const ChatScreen = () => {
  type chatType = {
    id: number;
    isUser: boolean;
    message: string;
  };

  const router = useRouter();
  const chatSafeArea = useSafeAreaInsets().top;

  // Create a ref for the FlatList
  const chatListRef = useRef<FlatList | null>(null);

  const [chatMessages, setChatMessages] = useState<chatType[]>([
    {
      id: 1,
      isUser: false,
      message: "Hello, i'm Ziya, what are we fixing today!",
    },
  ]);

  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      // Scroll to the bottom after adding new messages
      if (chatListRef.current) {
        chatListRef.current.scrollToEnd({ animated: true });
      }
      // Create a new chat message with user input
      const newUserMessage: chatType = {
        id: chatMessages.length + 1,
        isUser: true,
        message: userInput,
      };

      // Add the new message to the chatMessages array
      setChatMessages((prev) => [...prev, newUserMessage]);

      // Clear the input field
      setUserInput("");

      // Create a "typing..." message for the bot
      const botTypingMessage: chatType = {
        id: chatMessages.length + 2,
        isUser: false,
        message: "Ziya is typing...",
      };

      // Add the "typing..." message to the chatMessages array
      setChatMessages((prev) => [...prev, botTypingMessage]);

      axios
        .post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful assistant that corrects grammatical errors in text.",
              },
              {
                role: "user",
                content: `Correct the following text for grammar errors: "${userInput}"`,
              },
            ],
            temperature: 0.2,
            max_tokens: 512,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${OPEN_AI_SECRET}`,
            },
          }
        )
        .then((res) => {
          const correctedText = res.data.choices[0].message.content;

          // Create a new chat message with the corrected text
          const botMessage: chatType = {
            id: chatMessages.length + 3,
            isUser: false,
            message: correctedText,
          };

          // Replace the "typing..." message with the actual response
          setChatMessages((prev) => [...prev.slice(0, -1), botMessage]);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <LogoutIcon
          style={[styles.logout, { top: chatSafeArea + 10 }]}
          onPress={() => router.replace("Login")}
        />
        <Arrows style={styles.arrow} />
        <CenterArrow style={styles.centerArrow} />
        <BottomArrow style={styles.bottomArrow} />
        <FlatList
          ref={(ref) => (chatListRef.current = ref)} // Assign the ref to the FlatList
          onContentSizeChange={() =>
            chatListRef.current?.scrollToEnd({ animated: true })
          } // Automatically scroll when content size changes
          style={[styles.chatSection, { marginTop: chatSafeArea + 16 }]}
          data={chatMessages}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }) => (
            <ChatBubble isUser={item.isUser} message={item.message} />
          )}
        />
        <View style={styles.chatActions}>
          <TextInput
            style={styles.input}
            placeholder="Type something..."
            placeholderTextColor={colors.white}
            value={userInput}
            onChangeText={setUserInput}
          />
          <TouchableOpacity style={styles.send} onPress={handleSendMessage}>
            <SendIcon />
          </TouchableOpacity>
        </View>

        <StatusBar />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    position: "relative",
  },
  logout: {
    position: "absolute",
    right: 20,
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
    marginBottom: 80,
  },

  chatActions: {
    paddingHorizontal: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
    right: 0,
    left: 0,
    width: "100%",
  },

  input: {
    flex: 1,
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

  send: {
    width: 50,
    height: 50,
    backgroundColor: colors.green100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
});

export default ChatScreen;
