import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headline}>TODOLIST</Text>
        <Image
          source={require("./assets/apple-touch-icon.png")}
          style={styles.logo}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  header: {
    backgroundColor: "#008080",
    paddingTop: 70,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  headline: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#000",
  },
  logo: {
    width: 50,
    height: 50,
  },
});
