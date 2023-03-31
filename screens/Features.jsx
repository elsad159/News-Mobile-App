import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";

const API_KEY = "0NkYflSRauUgop6uuEmLzdMS6svlp708h79HFI3Z";

const Features = () => {
  const [photos, setPhotos] = useState([]);
  const [donki, setDonki] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`
      );
      const data = await response.json();
      setPhotos(data.photos);
    };

    fetchPhotos();
  }, []);

  if (!photos) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      {photos.map((photo) => (
        <View key={photo.id} style={{ borderWidth: 1, marginBottom: 15 }}>
          <Image
            source={{ uri: photo.img_src }}
            style={{ width: "100%", height: 200 }}
          />
          <Text>{photo.camera.full_name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Features;
