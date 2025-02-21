import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { searchMulti } from './api';

const SearchMulti = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const resultsData = await searchMulti(query);
    setResults(resultsData);
  };

  return (
    <View>
      <TextInput
        placeholder="Search Movies, TV Shows, and People"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title || item.name}</Text>
            <Text>{item.media_type}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchMulti;