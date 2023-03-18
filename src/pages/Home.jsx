import MovieList from 'components/MovieList';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTrendingMovies } from 'services/movieSearchAPI';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies).catch(console.log);
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MovieList movies={trendingMovies} />
    </>
  );
};

export default Home;
