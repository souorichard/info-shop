import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
;
export default function Header() {
  return (
    <View style={styles.header}>
      <Icon name="shopping-bag" size={28} color="#F00" />
      <Text style={styles.title}>Info <Text style={styles.title2}>Shop</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    paddingVertical: 16,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: "#0A0F24"
  },

  title: {
    fontSize: 24,
    fontFamily: 'MontBold',
    color: '#FFF'
  },

  title2: {
    textTransform: 'uppercase',
    color: '#F00'
  },
});