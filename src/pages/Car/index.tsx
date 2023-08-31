import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CarList } from "../../components/CarList";

export default function Car() {
  return (
    <View style={styles.container}>
      <View style={styles.divTitle}>
        <Text style={styles.subtitle}>Confira seu</Text>
        <Text style={styles.title}>Carrinho</Text>
      </View>

      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },

  divTitle: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },

  subtitle: {
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "MontSemiBold",
    color: "#989898",
  },

  title: {
    fontSize: 28,
    fontFamily: "MontBold",
    color: "#FFF",
  },
});
