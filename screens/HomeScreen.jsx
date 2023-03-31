import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "@rneui/base";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=266e0f1eeeea44c9a721e1ffd51387b3"
      );
      const data = await response.json();
      setHeadlines(data.articles);
    };

    fetchHeadlines();
  }, []);

  return (
    <ScrollView>
      {headlines.map((headline) => (
        <Card key={headline.url} containerStyle={{}} wrapperStyle={{}}>
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: "100%", height: 250, marginBottom: 20 }}
              source={{
                uri: headline.urlToImage,
              }}
            />
            <Card.Divider />

            <Card.Title>Author: {headline.author}</Card.Title>
            <Text>{headline.title}</Text>
            <Text>{headline.description}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
