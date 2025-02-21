import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NowPlayingMovies from '@/components/NowPlayingMovies';
import PopularMovies from '@/components/PopularMovies';
import TopRatedMovies from '@/components/TopRatedMovies';
import UpcomingMovies from '@/components/UpcomingMovies';
import SearchMovies from '@/components/SearchMovies';
import OnTheAirTV from '@/components/OnTheAirTV';
import PopularTV from '@/components/PopularTV';
import TopRatedTV from '@/components/TopRatedTV';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieDetails from '@/components/MovieDetails';

const Stack = createStackNavigator();

function MoviesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MoviesTab" component={MoviesTab} options={{ headerShown: false }} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}



const Tab = createMaterialTopTabNavigator();

// MoviesTab component with dropdown
function MoviesTab() {
  const [selectedCategory, setSelectedCategory] = useState('Now Playing');
  

  const renderSelectedComponent = () => {
    switch (selectedCategory) {
      case 'Now Playing':
        return <NowPlayingMovies />;
      case 'Popular Movies':
        return <PopularMovies />;
      case 'Top Rated Movies':
        return <TopRatedMovies />;
      case 'Upcoming Movies':
        return <UpcomingMovies />;
      default:
        return <NowPlayingMovies />;
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {/* Dropdown Picker */}
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={{ width: '50%', backgroundColor: '#f8f9fa', marginTop: 40, marginBottom: 15, padding: 1 }}
      >
        <Picker.Item label="Now Playing" value="Now Playing" />
        <Picker.Item label="Popular Movies" value="Popular Movies" />
        <Picker.Item label="Top Rated Movies" value="Top Rated Movies" />
        <Picker.Item label="Upcoming Movies" value="Upcoming Movies" />
      </Picker>

      {/* Render the selected movie component */}
      <View style={{ width: '100%' }}>
        {renderSelectedComponent()}
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: { backgroundColor: 'blue' },
      }}
    >
      <Tab.Screen name="Movies" component={MoviesStack} />
      <Tab.Screen name="Search Movies" component={SearchMovies} />
      <Tab.Screen name="On The Air" component={OnTheAirTV} />
      <Tab.Screen name="Popular TV" component={PopularTV} />
      <Tab.Screen name="Top Rated TV" component={TopRatedTV} />
    </Tab.Navigator>
  );
}

