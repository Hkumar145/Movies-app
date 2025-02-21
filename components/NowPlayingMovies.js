import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchNowPlayingMovies } from './api';

const NowPlayingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchNowPlayingMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  return (
    <View>
      <Text>Now Playing Movies</Text>
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

export default NowPlayingMovies;