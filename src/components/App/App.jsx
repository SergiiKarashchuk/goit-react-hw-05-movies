import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import NotFound from 'pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const MovieTrailer = lazy(() => import('components//MovieTrailer'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="trailer" element={<MovieTrailer />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  );
};

// Ключ API (v3 auth)
// bbeaf459bdc34d73d4b53030aad94171
// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=bbeaf459bdc34d73d4b53030aad94171
// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmVhZjQ1OWJkYzM0ZDczZDRiNTMwMzBhYWQ5NDE3MSIsInN1YiI6IjYzZGJmOWFjMTA5MjMwMDBmMDRkYTgyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uC-Z-fFxmbW7fDBPbdS7Pqx5UhdM-U37Tv5InKJMlYc
