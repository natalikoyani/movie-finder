import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: black;
  font-weight: 600;
  &.active {
    color: pink;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;