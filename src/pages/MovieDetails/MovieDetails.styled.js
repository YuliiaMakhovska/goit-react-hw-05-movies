import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  list-style: none;
  transform: scale(1);
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const Section = styled.div`
  margin: 0 auto;
`;
export const LinkWrap = styled.ul`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 50px;
  font-size: 22px;
  font-weight: 700;
  padding: 10px 20px;
`;
export const LinkRev = styled(Link)``;

export const LinkCast = styled(Link)``;
