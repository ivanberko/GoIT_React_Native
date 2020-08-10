import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import RegistrationScreen from "./components/RegistrationScreen";
import LoginScreen from "./components/LoginScreen";

const bgImage =
  "https://s3-alpha-sig.figma.com/img/f6c9/a386/3060bf968d92368179ce26a756ce4271?Expires=1597622400&Signature=eH94~ohxLGiI6dQVSxNdmCLkGWjt5JggcRMdmbk0fR9ssGwIYapiI8hn8ALOa12tc9x2yIw9Pk9Ovd~qqVaahKDD6BcGJVKaCV14wxiS7yWlZUBdfVUoXEUSRH6K1g~tC3CDmLUCav5ztOaw9WcXuI~q56HnRyNiJNZIgS5JriHZZH8AgnetvPdgP5yZX1yrVSZpAb23hl~XAtJsQ-2LWg-syyIqu8Q-MIcuFmuGw3Xc3A791Pco9XwISiUGzGgoTab0~NscoUY0as3OecCbxVMJP7JaQc~8SugfAuZHlyBQPYVJepaBw4SeB5umr2cxelQNJnhc~ZfEJ8OmddeSsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleClick = () => setIsLogin((prev) => !prev);

  const showKeyboard = () => setIsShowKeyboard(true);

  const handleShowKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShowKeyboard(false);
      }
    );
    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ImageBackground
      source={{
        uri: bgImage,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <TouchableWithoutFeedback onPress={handleShowKeyboard}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          {!isLogin ? (
            <RegistrationScreen
              handleEntry={handleClick}
              isShowKeyboard={isShowKeyboard}
              handleShowKeyboard={showKeyboard}
            />
          ) : (
            <LoginScreen
              handleEntry={handleClick}
              isShowKeyboard={isShowKeyboard}
              handleShowKeyboard={showKeyboard}
            />
          )}
          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
