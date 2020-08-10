import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";

const LoginScreen = ({ handleEntry, isShowKeyboard, handleShowKeyboard }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [passwword, setPasswword] = useState("");

  const clearForm = () => {
    setEmail("");
    setPasswword("");
  };

  const onSignUp = () => {
    const formData = {
      email,
      passwword,
    };
    if (email && passwword) {
      console.log(formData);
      clearForm();
    }
  };

  return (
    <View
      style={{ ...styles.container, paddingBottom: isShowKeyboard ? 0 : 32 }}
    >
      <Text style={styles.title}>Вход</Text>
      <TextInput
        style={styles.input}
        placeholder="Адрес электронной почты"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onFocus={handleShowKeyboard}
      />
      <View style={{ ...styles.input, ...styles.inputPass }}>
        <TextInput
          style={{
            fontSize: 16,
            height: 50,
            width: "75%",
          }}
          placeholder="Пароль"
          value={passwword}
          secureTextEntry={showPassword}
          onChangeText={(text) => setPasswword(text)}
          onFocus={handleShowKeyboard}
        />
        <Text
          style={styles.text}
          onPress={() => setShowPassword((prev) => !prev)}
        >
          Показать
        </Text>
      </View>

      {!isShowKeyboard && (
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={onSignUp}
          >
            <Text style={styles.textBtn}>Войти</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEntry}>
            <Text style={styles.text}>Нет аккаунта? Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    height: 50,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  inputPass: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginBottom: 32,
    textAlign: "center",
    fontWeight: "500",
  },
  text: {
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
  textBtn: {
    color: "#fff",
    textAlign: "center",
    padding: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 30,
    marginBottom: 16,
    marginTop: 26,
    marginHorizontal: 16,
  },
});

export default LoginScreen;
