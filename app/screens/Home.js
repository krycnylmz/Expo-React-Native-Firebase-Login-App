import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import HouseList from "../components/HouseList";

const Home = () => {
  const [todo, setTodo] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Home</Text>
      {/* <View style={styles.column}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setTodo(text);
          }}
          value={todo}
          placeholder="Kirayı öde!"
          autoCapitalize="none"
          keyboardType="default"
        />
      </View> */}
      <>
        <HouseList />
      </>
    </SafeAreaView>
  );
};

export default Home;

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
