import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { fetchPopularTVShows } from './api';

const PopularTV = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getShows = async () => {
      try {
        const showsData = await fetchPopularTVShows();
        console.log('Fetched Shows Data:', showsData);  // Log to check data structure

        // Check if data has results property
        if (showsData && showsData.results) {
          setShows(showsData.results);  // Set the data
        } else {
          console.error('No results found in the data');
        }
      } catch (error) {
        console.error('Error fetching shows:', error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    getShows();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show loading spinner while fetching
  }

  return (
    <View>
      <Text>Popular TV Shows</Text>
      <FlatList
        data={shows}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.name}</Text>
            {/* You can also display more info, such as an image */}
            <Text>{item.overview}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PopularTV;
