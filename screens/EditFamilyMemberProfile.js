import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import IconButton from "../components/UI/IconButton";

function EditFamilyMemberProfile() {
  const navigation = useNavigation();

  const [usersName, setUsersName] = useState(usersName);
  const [usersEmail, setUsersEmail] = useState(usersEmail);
  const [usersBirthDate, setUsersBirthDate] = useState(usersBirthDate);
  const [usersStatus, setUsersStatus] = useState(usersStatus);

  function cancelHandler() {
    navigation.navigate("AddFamilyMembersScreen");
  }
  function submitHandler() {
    navigation.navigate("AddFamilyMembersScreen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Edit family member</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <IconButton
            icon="person"
            color="black"
            size={25}
            style={styles.ionicons}
          />
          <TextInput style={styles.input} placeholder={usersName} />
        </View>
        <View style={styles.inputContainer}>
          <IconButton
            icon="mail"
            color="black"
            size={25}
            style={styles.ionicons}
          />
          <TextInput style={styles.input} placeholder={usersEmail} />
        </View>
        <View style={styles.inputContainer}>
          <IconButton
            icon="calendar"
            color="black"
            size={25}
            style={styles.ionicons}
          />
          <TextInput style={styles.input} placeholder={usersBirthDate} />
        </View>
        <View style={styles.inputContainer}>
          <IconButton
            icon="people"
            color="black"
            size={25}
            style={styles.ionicons}
          />
          <TextInput style={styles.input} placeholder={usersStatus} />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Pressable onPress={cancelHandler}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={submitHandler}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default EditFamilyMemberProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 30,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    marginBottom: 15,
  },
  inputsContainer: {},
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 5,
    flex: 1,
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 4,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  buttonContainer: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "lightblue",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonText: { color: "white", fontSize: 20 },
  ionicons: {
    fontSize: 25
  },
});
