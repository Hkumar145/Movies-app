import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchAiringTodayTV } from './api';

const AiringTodayTV = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const showsData = await fetchAiringTodayTV();
      setShows(showsData);
    };

    getShows();
  }, []);

  return (
    <View>
      <Text>Airing Today TV Shows</Text>
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

export default AiringTodayTV;