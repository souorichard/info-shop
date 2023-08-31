import { Image, StyleSheet, Text, View } from "react-native";
import { items } from "../../data/mocks";

export function CarList() {
  return (
    <View style={styles.container}>
      {/*Item*/}
      {items.map((item) => (
        <View key={item.image} style={styles.item}>
          <Image source={item.image} style={styles.image} />
          {item.others.map((other) => (
            <View key={other.name} style={styles.divTexts}>
              <View style={styles.div}>
                <Text style={styles.name}>{other.name}</Text>
                <Text style={styles.description}>{other.description}</Text>
              </View>
              <Text style={styles.price}>R$ {other.price}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  item: {
    width: "100%",
    padding: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#131A38",
    borderRadius: 8,
  },

  image: {
    width: 80,
    height: 80,
    objectFit: "cover",
    borderRadius: 4,
  },

  divTexts: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  div: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },

  name: {
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: "MontSemiBold",
    color: "#FFF",
  },

  description: {
    maxWidth: 220,

    fontSize: 12,
    fontFamily: "MontRegular",
    color: "#989898",
  },

  price: {
    fontSize: 16,
    fontFamily: "MontBold",
    color: "#FFF",
  },
});
