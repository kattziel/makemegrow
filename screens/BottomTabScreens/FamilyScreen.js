import { View, Text, StyleSheet } from "react-native";

function FamilyScreen() {
  return (
    <View>
      <Text style={styles.text}>FamilyScreen</Text>
    </View>
  );
}

export default FamilyScreen;

const style = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 25,
  },
});
