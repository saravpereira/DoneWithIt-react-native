import React from "react";
import { styles } from "./styles";
import { View, Image, Text } from "react-native";
import ListItem from "../common/lists/listItem/ListItem";

const ListingDetailScreen = ({ route }) => {
  const {
    title,
    subtitle,
    image,
    avatar,
    listingUserFullname,
    numberOfListing,
  } = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.productDetailSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.pricing}>{subtitle}</Text>
      </View>

      <ListItem
        avatar={<Image style={styles.avatar} source={avatar} />}
        title={listingUserFullname}
        description={`${numberOfListing} Listing${
          numberOfListing > 1 ? "s" : ""
        }`}
      />
    </View>
  );
};

export default ListingDetailScreen;
