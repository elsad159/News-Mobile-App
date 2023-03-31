import React from "react";
import { View, Text } from "react-native";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";
import EnvelopeIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Button } from "@rneui/base";

const ContactScreen = () => {
  return (
    <View
      style={{
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 40,
      }}
    >
      <Text style={{ fontSize: 40, marginBottom: 40 }}>Contact</Text>
      <View
        style={{
          width: "130%",
          height: 1,
          backgroundColor: "#a9acaf",
          marginBottom: 35,
        }}
      />
      <Input
        placeholder="Full name"
        leftIcon={<Icon name="user" size={20} color="black" />}
      />
      <Input
        placeholder="Email"
        leftIcon={<EnvelopeIcon name="envelope" size={24} color="black" />}
      />
      <Input
        placeholder="Subject"
        leftIcon={<FeatherIcon name="hash" size={20} color="black" />}
      />
      <Input
        placeholder="Message"
        leftIcon={<FeatherIcon name="message-circle" size={20} color="black" />}
      />
      <View
        style={{
          width: "130%",
          height: 1,
          backgroundColor: "#a9acaf",
          marginTop: 40,
        }}
      />
      <Button
        buttonStyle={{
          width: 350,
          backgroundColor: "#ff4e4e", // set background color to red
        }}
        containerStyle={{ marginTop: 35 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#ff4e4e",
        }}
        disabledTitleStyle={{ color: "#ff4e4e" }}
        linearGradientProps={null}
        iconContainerStyle={{ background: "#ff4e4e" }}
        loadingProps={{ animating: true }}
        onPress={() => alert("click")}
        title="Send"
        titleStyle={{ marginHorizontal: 5 }}
      />
    </View>
  );
};

export default ContactScreen;
