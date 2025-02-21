import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MovieDetails = () => {
  const route = useRoute();
  const { movie } = route.params; // Retrieve the movie data passed from the previous screen

  return (
    <View>
      <Text>{movie.title}</Text>
      <Text>{movie.vote_average}</Text>
      <Text>{movie.overview}</Text>
      <Text>{movie.popularity}</Text>
      <Text>{movie.release_date}</Text>
      
    </View>
  );
};

export default MovieDetails;
