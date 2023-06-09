import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function AddButton({ onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.pressableButton,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name="add-circle-outline" size={30} color="#B5B5B5" />
      </View>
    </Pressable>
  );
}

export default AddButton;

const styles = StyleSheet.create({
    buttonContainer: {
    }
});
