import React, { useEffect, useState } from 'react';
import { View, Text,Image, FlatList, Button } from 'react-native';
import { searchMovies } from './api';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const moviesData = await searchMovies(query);
    setMovies(moviesData);
  };

  return (
    <View>
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', margin: 10 }}>
          <Image 
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            style={{ width: 100, height: 100 }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.popularity}</Text>
            <Text>{item.release_date}</Text>
            <Button 
              title="More Details" 
              onPress={() => navigateToDetails(item)} 
            />
          </View>
        </View>
      )}
    />
  </View>
  );
};

export default SearchMovies;