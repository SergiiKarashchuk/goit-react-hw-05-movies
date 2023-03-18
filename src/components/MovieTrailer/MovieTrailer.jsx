import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movieSearchAPI';
import { MovietrailerBox } from './MovieTrailer.styled';

const MovieTrailer = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId, 'videos')
      .then(data => {
        const video = data.results.filter(item => item.type === 'Trailer')[0];

        if (video) {
          setTrailer(`https://www.youtube.com/embed/${video.key}`);
        }
      })
      .catch(console.log);
  }, [movieId, trailer]);

  return (
    <MovietrailerBox>
      <iframe
        title="trailer"
        width="560"
        height="315"
        src={trailer}
        allowFullScreen
      ></iframe>
    </MovietrailerBox>
  );
};

export default MovieTrailer;
