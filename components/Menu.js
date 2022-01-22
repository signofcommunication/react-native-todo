import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

function Menu({ setShow }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/todo.png")} />
      <Text style={styles.title}>Todo-List Application</Text>
      <Button title="Click" onPress={() => setShow(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    marginVertical: 15,
  },
});

export default Menu;
