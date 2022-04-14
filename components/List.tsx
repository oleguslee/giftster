import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";

const List = () => (
  <TouchableOpacity style={styles.list}>
    <Text style={styles.listText}>
      <Icon name="grid-outline" size={13} color={DARK_GRAY} /> List
    </Text>
  </TouchableOpacity>
);

export default List;
