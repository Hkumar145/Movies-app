import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchOnTheAirTV } from './api';

const OnTheAirTV = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const showsData = await fetchOnTheAirTV();
      setShows(showsData);
    };

    getShows();
  }, []);

  return (
    <View>
      <Text>On The Air TV Shows</Text>
      <FlatList
        data={shows}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OnTheAirTV;
