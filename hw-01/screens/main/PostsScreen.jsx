import React from "react";

import { View, Text, StyleSheet } from "react-native";

const PostsScreen = ({ route: { name } }) => {

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostsScreen;
