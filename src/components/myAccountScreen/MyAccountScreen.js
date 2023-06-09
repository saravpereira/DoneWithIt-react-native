import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../common/screen/Screen";
import ListItem from "../common/lists/listItem/ListItem";
import ListItemSeparator from "../common/lists/listItemSeparator/ListItemSeparator";
import { styles } from "./styles";

const sampleUser = {
  id: 1,
  title: "Mosh",
  description: "programmingwithmosh@gmail.com",
  image: (
    <Image style={styles.avatar} source={require("../../../assets/mosh.jpg")} />
  ),
};

const accountFeatures = [
  {
    id: 1,
    title: "My Listings",
    description: "",
    image: (
      <View style={styles.listingIconContainer}>
        <MaterialCommunityIcons
          name="format-list-bulleted"
          size={20}
          color="white"
        />
      </View>
    ),
  },
  {
    id: 2,
    title: "My Messages",
    description: "",
    image: (
      <View style={styles.emailIconContainer}>
        <MaterialCommunityIcons name="email" size={20} color="white" />
      </View>
    ),
  },
];

const MyAccountScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState(sampleUser);
  const [settings, setSettings] = useState(accountFeatures);

  return (
    <Screen style={styles.container}>
      <View style={styles.userDetailSection}>
        <ListItem
          title={messages.title}
          description={messages.description}
          avatar={messages.image}
          onPress={(item) => console.log("Message sent", item)}
        />
      </View>

      <FlatList
        style={styles.flatlist}
        data={settings}
        keyExtractor={(settings) => settings.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            avatar={item.image}
            onPress={() => {
              if (item.title === "My Messages") {
                navigation.navigate("MessagesScreen");
              }
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />

      <View style={styles.section}>
        <ListItem
          title="Log Out"
          description=""
          avatar={
            <View style={styles.logoutIconContainer}>
              <MaterialCommunityIcons name="logout" size={20} color="white" />
            </View>
          }
          onPress={() => console.log("Message sent", item)}
        />
      </View>
    </Screen>
  );
};

export default MyAccountScreen;
