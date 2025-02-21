import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { searchTV } from './api';

const SearchTV = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const resultsData = await searchTV(query);
    setResults(resultsData);
  };

  return (
    <View>
      <TextInput
        placeholder="Search TV Shows"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={results}
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

export default SearchTV;