import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  padding: 10px 18px;
  border-radius: 4px;
  text-decoration: none;
  color: orange;
  font: inherit;
  font-size: 25px;
  font-weight: 700;
  margin: 15px;

  &.active {
    color: yellow;
  }
  &:hover {
    color: blue;
    background-color: yellow;
  }
`;
