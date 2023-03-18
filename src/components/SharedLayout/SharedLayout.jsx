import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.Styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Suspense fallback={<h2>Loading...</h2>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
