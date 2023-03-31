import React from "react";
import { View, Image, Text, Linking } from "react-native";
import AboutTopImage from "../assets/about.jpg";
import AvatarImage from "../assets/avatar.jpg";
import { Button } from "@rneui/base";
import Icon from "react-native-vector-icons/AntDesign";
import IconEnto from "react-native-vector-icons/EvilIcons";

const About = () => {
  const openGitHubProfile = () => {
    Linking.openURL("https://github.com/elsad159?tab=repositories");
  };
  const openTelegramProfile = () => {
    Linking.openURL("https://t.me/@elshadkhalilov1");
  };
  const openInstagramProfile = () => {
    Linking.openURL("https://www.instagram.com/elshadkhalilov1/");
  };
  const openLinkedinProfile = () => {
    Linking.openURL("https://www.linkedin.com/in/elshad-khalilov");
  };

  return (
    <View>
      <View style={{ position: "relative" }}>
        <Image source={AboutTopImage} style={{ width: "100%", height: 230 }} />
        <Image
          source={AvatarImage}
          style={{
            width: 85,
            height: 85,
            borderRadius: 100,
            position: "absolute",
            bottom: -45,
            left: 165,
          }}
        />
      </View>
      <Text style={{ fontSize: 45, marginTop: 60, marginLeft: 80 }}>
        News Theme
      </Text>
      <Button
        buttonStyle={{
          width: 350,
          backgroundColor: "black", // set background color to red
          marginLeft: 35,
          borderRadius: 5,
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
        onPress={openGitHubProfile}
        title="Open GitHub to check more"
        titleStyle={{ marginHorizontal: 5 }}
        icon={
          <Icon name="github" type="font-awesome" size={18} color="#ffffff" />
        }
        iconLeft
      />
      <Button
        buttonStyle={{
          width: 350,
          backgroundColor: "#4983da", // set background color to red
          marginLeft: 35,
          borderRadius: 5,
        }}
        containerStyle={{ marginTop: 20 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#ff4e4e",
        }}
        disabledTitleStyle={{ color: "#ff4e4e" }}
        linearGradientProps={null}
        iconContainerStyle={{ background: "#ff4e4e" }}
        loadingProps={{ animating: true }}
        onPress={openTelegramProfile}
        title="Write me on Telegram"
        titleStyle={{ marginHorizontal: 5 }}
        icon={
          <IconEnto
            name="sc-telegram"
            type="font-awesome"
            size={25}
            color="#ffffff"
          />
        }
        iconLeft
      />
      <Button
        buttonStyle={{
          width: 350,
          backgroundColor: "#fb5554",
          marginLeft: 35,
          borderRadius: 5,
        }}
        containerStyle={{ marginTop: 20 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#ff4e4e",
        }}
        disabledTitleStyle={{ color: "#ff4e4e" }}
        linearGradientProps={null}
        iconContainerStyle={{ background: "#ff4e4e" }}
        loadingProps={{ animating: true }}
        onPress={openInstagramProfile}
        title="Find me in Instagram"
        titleStyle={{ marginHorizontal: 5 }}
        icon={
          <Icon
            name="instagram"
            type="font-awesome"
            size={25}
            color="#ffffff"
          />
        }
        iconLeft
      />
      <Button
        buttonStyle={{
          width: 350,
          backgroundColor: "#23527c",
          marginLeft: 35,
          borderRadius: 5,
        }}
        containerStyle={{ marginTop: 20 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#ff4e4e",
        }}
        disabledTitleStyle={{ color: "#ff4e4e" }}
        linearGradientProps={null}
        iconContainerStyle={{ background: "#ff4e4e" }}
        loadingProps={{ animating: true }}
        onPress={openLinkedinProfile}
        title="Find me in Linkedin"
        titleStyle={{ marginHorizontal: 5 }}
        icon={
          <Icon
            name="linkedin-square"
            type="font-awesome"
            size={25}
            color="#ffffff"
          />
        }
        iconLeft
      />
    </View>
  );
};

export default About;
