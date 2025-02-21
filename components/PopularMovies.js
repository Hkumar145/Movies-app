import React, { useEffect, useState } from 'react';
import { View, Text,Image,Button, FlatList } from 'react-native';
import { fetchPopularMovies } from './api';
import { useNavigation } from '@react-navigation/native';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation(); // 

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  const navigateToDetails = (movie) => {
    navigation.navigate('MovieDetails', { movie }); //
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
              <Text>Popularity: {item.popularity}</Text>
              <Text>Release Date: {item.release_date}</Text>
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

export default PopularMovies;