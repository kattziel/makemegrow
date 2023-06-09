import { View, Text, Pressable, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";

function Button({ onPress, children, disabled, backgroundColor, loading = false }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.viewStyle}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.textStyle}>{children}</Text>
        )}
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  pressableButton: {
    alignItems: "center",
  },
  buttonContainer: {
    borderColor: "lightgray",
    borderWidth: 1,
    paddingVertical: 10,
    width: "46%",
  },
  viewStyle: {
    paddingVertical: 5,
    minWidth: 110,
  },
  textStyle: {
    color: "gray",
    textAlign: "center",
    fontSize: 20,
  },
  disabled: {
    opacity: 0.3,
  },
  pressed: {
    backgroundColor: "#D8D8D8"
  }
});
