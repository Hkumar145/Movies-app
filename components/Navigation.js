// Navigation.js is a component that sets up the navigation stack for the app. It uses the NavigationContainer and createStackNavigator components from the @react-navigation/native package to create a stack navigator for the app. The stack navigator has two screens: UpcomingMovies and MovieDetails. The UpcomingMovies screen is the initial route for the navigator, and the MovieDetails screen is the route for viewing details of a specific movie.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Provides navigation context
import { createStackNavigator } from '@react-navigation/stack'; // Stack navigator for screen navigation
import UpcomingMovies from './UpcomingMovies'; //My screen component
import MovieDetails from './MovieDetails'; // Another screen component

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UpcomingMovies">
        <Stack.Screen name="UpcomingMovies" component={UpcomingMovies} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
