import { View, Text, StyleSheet } from "react-native";

function CalendarScreen() {
  return (
    <View>
      <Text style={styles.text}>CalendarScreen</Text>
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 25,
  },
});
