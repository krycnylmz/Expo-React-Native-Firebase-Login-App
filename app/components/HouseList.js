import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://houseapidemo.azurewebsites.net/api/Houses"
        );
        setHouses(response.data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const renderHouseItem = ({ item, index }) => (
    <View style={styles.column}>
      <Text style={styles.name}>{item.house_name}</Text>
      <View style={styles.col}>
        <Text style={styles.city}>{item.location}</Text>
        <Text style={styles.capacity}>{item.capacity}</Text>

        <View style={styles.col}>
          {item.wifi ? <AntDesign name="wifi" size={24} color="white" /> : ""}
          <>
            {item.garden_view ? (
              <MaterialCommunityIcons
                name="window-closed-variant"
                size={24}
                color="white"
              />
            ) : (
              ""
            )}
          </>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={houses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderHouseItem}
      />
    </SafeAreaView>
  );
};

export default HouseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101521",
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  name: {
    color: "#ffff",
    fontSize: 32,
  },
  capacity: {
    color: "#ffff",
    backgroundColor: "red",
    overflow: "hidden",
    borderWidth: 2,
    padding: 2,
    borderRadius: 10,
    fontSize: 24,
  },
  city: {
    color: "#ffff",
    fontSize: 24,
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
    flexDirection: "col",
    width: 300,
    height: 75,
    marginVertical: 15,
  },
  col: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
