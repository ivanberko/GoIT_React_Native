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
  "https://s3-alpha-sig.figma.com/img/f6c9/a386/3060bf968d92368179ce26a756ce4271?Expires=1599436800&Signature=BO-CzcgetAP~VKgDI80HLoH~X2v530jSxu6p0iQla88GbrfsfRWRrp5lnL6O9sKV6qiKOG8ixNiR15YP-bHpSRZad2fnJyCFWDt5z0vFdkOiiXZMtI0UvFpU8dMpy6PO4YaNCQ2mUtavoBkuBQAG0Fi~xaCywVwwXuAcQycRTkkGMaKixZEKT2C9y8Kx-R8o3OaoLcGSiAZYKwqGaKeZoEW0ezjxG3OY26VXdVGtZlcMtgyOkzFqUdwCMq6lSP1CObmbCXdTndqq6JipzmqMQIrDzDwDY3NgKiecmVIqKkYld2BWYqKDHZJ9He~1oZ-TwZATg7SiIa7NPS3IgUjyOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

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

<script src="http://localhost:8097"></script>;
