import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesAllList = styled.ul`
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px 30px;
  grid-auto-rows: auto;
  max-width: 1200px;
`;

export const MovieCard = styled.li`
  border-radius: 5px;
  object-fit: cover;
  width: 100%;
  &:hover {
    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.01);
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  list-style: none;
  transform: scale(1);
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const MoviePoster = styled.img`
  border-radius: 5px;
  object-fit: cover;
  display: block;
  max-width: 100%;
  height: auto;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const MovieWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 15px;
`;
