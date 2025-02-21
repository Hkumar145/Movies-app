import { View, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MovieDetails = () => {
  const route = useRoute();
  const { movie } = route.params; // Retrieve the movie data passed from the previous screen

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
        {movie.title}
      </Text>
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={{ width: 250, height: 250, marginVertical: 10 }}
      />
      <Text style={{ textAlign: 'justify', marginVertical: 10 }}>{movie.overview}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 2 }}>
        <Text style={{ textAlign: 'center', marginHorizontal: 4 }}>Popularity: {movie.popularity}</Text>
        <Text style={{ textAlign: 'center', marginHorizontal: 4 }}>|</Text>
        <Text style={{ textAlign: 'center', marginHorizontal: 4 }}>Release Date: {movie.release_date}</Text>
      </View>
    </View>
  );
};

export default MovieDetails;
