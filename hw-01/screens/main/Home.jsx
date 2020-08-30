import React from "react";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

const MainTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();


const Home = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Profile") {
            return <Feather name="user" size={size} color={color} />;
          } else if (route.name === "Posts") {
            return <SimpleLineIcons name="grid" size={size} color={color} />;
          } else if (route.name === "CreatePosts") {
            return (
              <Feather
                name="plus"
                size={size}
                color="#fff"
                style={styles.addPost}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FF6C00",
        inactiveTintColor: "black",
        showLabel: false,
      }}
    >
      <MainTab.Screen name="Posts" component={PostsScreen} />
      <MainTab.Screen name="CreatePosts" component={CreatePostsScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  addPost: {
    textAlign: "center",
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    paddingTop: 7,
  },
});

export default Home;
