import React from "react";
import { View, Image } from "react-native";
import Logo from "../assets/logo.png";
import Icon from "react-native-vector-icons/EvilIcons";

const HeaderNavigation = () => {
  return (
    <View
      style={{
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={Logo} style={{ width: 25, height: 25 }} />
      <Icon
        onPress={() => alert("Humburger Pressed")}
        style={{ position: "absolute", right: 15 }}
        name="navicon"
        size={30}
        color={"black"}
      />
    </View>
  );
};

export default HeaderNavigation;
