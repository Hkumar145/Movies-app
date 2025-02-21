import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NowPlayingMovies from '@/components/NowPlayingMovies';
import PopularMovies from '@/components/PopularMovies';
import TopRatedMovies from '@/components/TopRatedMovies';
import UpcomingMovies from '@/components/UpcomingMovies';
import SearchMovies from '@/components/SearchMovies';
import SearchMulti from '@/components/SearchMulti';
import SearchTV from '@/components/SearchTV';
import AiringTodayTV from '@/components/AiringTodayTV';
import OnTheAirTV from '@/components/OnTheAirTV';
import PopularTV from '@/components/PopularTV';
import TopRatedTV from '@/components/TopRatedTV';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Popular Movies" component={PopularMovies} />
      <Tab.Screen name="Now Playing" component={NowPlayingMovies} />
      <Tab.Screen name="Top Rated Movies" component={TopRatedMovies} />
      <Tab.Screen name="Upcoming Movies" component={UpcomingMovies} />
      {/* <Tab.Screen name="Search Movies" component={SearchMovies} /> */}
       {/* <Tab.Screen name="Search Multi" component={SearchMulti} /> */}
     {/* <Tab.Screen name="Search TV" component={SearchTV} /> */}
      <Tab.Screen name="Airing Today" component={AiringTodayTV} />
      <Tab.Screen name="On The Air" component={OnTheAirTV} />
       <Tab.Screen name="Popular TV" component={PopularTV} />
      <Tab.Screen name="Top Rated TV" component={TopRatedTV} /> 
     </Tab.Navigator>
  );
}
