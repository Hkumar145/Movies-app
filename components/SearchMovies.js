import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { searchMovies } from './api';
import { useNavigation } from '@react-navigation/native';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('movie');
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    const moviesData = await searchMovies(query, type);
    setMovies(moviesData);
  };

  const navigateToDetails = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  return (
    <View style={{ marginTop: 20, padding: 10 }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>
        Search Movies/TV Shows
      </Text>
      <TextInput
        placeholder="Search for movies..."
        value={query}
        onChangeText={setQuery}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
      />
      <Picker
        selectedValue={type}
        onValueChange={(itemValue) => setType(itemValue)}
        style={{ height: 50, width: '100%', marginBottom: 10 }}
      >
        <Picker.Item label="Movies" value="movie" />
        <Picker.Item label="TV Shows" value="tv" />
      </Picker>
      <Button 
        title="Search" 
        onPress={handleSearch} 
        disabled={!query.trim()}
      />
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

export default SearchMovies;