import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
//my_components
import _Button from "../components/Button";
const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Check your emails");
    } catch (error) {
      console.log(error);
      alert("Sing Up failed" + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("response: " + response);
    } catch (error) {
      if (error.code !== "auth/invalid-email") {
        signUp(auth);
      } else {
        alert("Failed: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.column}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setEmail(text);
            }}
            value={email}
            autoCapitalize="none"
            placeholder="email@gmail.com"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.column}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={password}
            placeholder="*******"
            autoCapitalize="none"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.column}>
          {loading ? (
            <ActivityIndicator size="large" color="#00ff" />
          ) : (
            <_Button title="Login" pressHandle={signIn} />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Welcome;

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101521",
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  welcomeText: {
    color: "#ffff",
  },
  input: {
    padding: 20,
    backgroundColor: "#F4F4FE",
    fontSize: 22,
    borderRadius: 15,
    marginVertical: 10,
    width: "100%",
  },
  column: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
});
