import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchPopularMovies } from './api';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  return (
    <View>
      <Text>Popular Movies</Text>
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

export default PopularMovies;