import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchPopularTV } from './api';

const PopularTV = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const showsData = await fetchPopularTV();
      setShows(showsData);
    };

    getShows();
  }, []);

  return (
    <View>
      <Text>Popular TV Shows</Text>
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

export default PopularTV;