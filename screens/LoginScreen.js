import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { loginUser } from "../util/auth";

import FlatButton from "../components/UI/FlatButton";
import Input from "../components/UI/Input";
import StartScreenButton from "../components/UI/StartScreenButton";

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);

  useEffect(() => {
    setEmailIsInvalid(false);
  }, [enteredEmail]);

  useEffect(() => {
    setPasswordIsInvalid(false);
  }, [enteredPassword]);

  const submitHandler = () => {
    const emailIsValid = enteredEmail.length > 0 && enteredEmail.includes("@");
    const passwordIsValid = enteredPassword.length > 6;

    if (!emailIsValid || !passwordIsValid) {
      if (!emailIsValid && !passwordIsValid) {
        setEmailIsInvalid(true);
        setPasswordIsInvalid(true);
        Alert.alert(
          "Invalid inputs.",
          "Please check your entered credentials."
        );
        return;
      }

      if (!emailIsValid) {
        setEmailIsInvalid(true);
        Alert.alert("Invalid input.", "Please check your entered email.");
        return;
      }

      if (!passwordIsValid) {
        setPasswordIsInvalid(true);
        Alert.alert("Invalid input.", "Please check your entered password.");
        return;
      }
    }
    loginHandler(enteredEmail, enteredPassword);
  };

  const loginHandler = async (email, password) => {
    setIsAuthenticating(true);
    try {
      const token = await loginUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in, please check your credentials or try again later."
      );
    }
    setIsAuthenticating(false);
  };

  const createFamilyHandler = () => navigation.navigate("SignupScreen");

  const resetPasswordHandler = () => navigation.navigate("ResetPassword");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Your account</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input
            value={enteredEmail}
            onUpdateValue={setEnteredEmail}
            placeholderText={"Email"}
            ioniconsName="mail"
            isInvalid={emailIsInvalid}
          />
          <Input
            value={enteredPassword}
            onUpdateValue={setEnteredPassword}
            placeholderText={"Password"}
            ioniconsName="key-outline"
            secure
            isInvalid={passwordIsInvalid}
          />
        </View>
        <View style={styles.buttonContainer}>
          <StartScreenButton
            loading={isAuthenticating}
            color="#91bfdb"
            onPress={submitHandler}
          >
            Log in
          </StartScreenButton>
        </View>
        <View style={styles.flatButtonsContainer}>
          <FlatButton style={styles.flatButton} onPress={resetPasswordHandler}>
            Reset password
          </FlatButton>
          <FlatButton style={styles.flatButton} onPress={createFamilyHandler}>
            Create family
          </FlatButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  titleContainer: {
    paddingBottom: 30,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
  },
  inputsContainer: {
    paddingBottom: 20,
  },
  buttonContainer: {
    paddingBottom: 20,
  },
  flatButtonsContainer: {
    alignItems: "center",
  },
  flatButton: {},
});
