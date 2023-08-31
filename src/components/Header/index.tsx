import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.divTitle}>
        <Icon name="shopping-bag" size={28} color="#F00" />
        <Text style={styles.title}>
          Info <Text style={styles.title2}>Shop</Text>
        </Text>
      </View>

      <View style={styles.divIcons}>
        <Icon name="shopping-cart" size={20} color="#FFF" />
        <Icon name="user" size={20} color="#FFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    zIndex: 100,

    width: "100%",
    height: 70,
    paddingVertical: 16,
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0A0F24",
  },

  divTitle: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
  },

  title: {
    fontSize: 24,
    fontFamily: "MontBold",
    color: "#FFF",
  },

  title2: {
    textTransform: "uppercase",
    color: "#F00",
  },

  divIcons: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  }
});
