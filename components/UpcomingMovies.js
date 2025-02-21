import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchUpcomingMovies } from './api';

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchUpcomingMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  return (
    <View>
      <Text>Upcoming Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UpcomingMovies;