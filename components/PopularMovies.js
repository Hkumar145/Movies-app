import React, { useEffect, useState } from 'react';
import { View, Text,Image, FlatList } from 'react-native';
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
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', margin: 10 }}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            style={{ width: 100, height: 100 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.popularity}</Text>
            <Text>{item.release_date}</Text>
            
          </View>
        </View>
      )}
    />
  </View>
  );
};

export default PopularMovies;