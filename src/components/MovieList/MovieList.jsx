import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, List } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <div>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={`Poster ${title}`}
                  width="250px"
                  height="375px"
                />
              ) : (
                <span>No poster</span>
              )}
              <b>{title}</b>
            </div>
          </Link>
        </Item>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
