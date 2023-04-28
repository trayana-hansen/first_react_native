import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styles={styles.boldText}>TODOLIST</Text>
        <Image></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#008080",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: "40px",
  },
});
