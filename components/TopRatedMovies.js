import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchTopRatedMovies } from './api';

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchTopRatedMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  return (
    <View>
      <Text>Top Rated Movies</Text>
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

export default TopRatedMovies;