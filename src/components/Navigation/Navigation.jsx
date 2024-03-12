import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Nav>
  );
};
