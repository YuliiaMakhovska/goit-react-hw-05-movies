import styled from '@emotion/styled';

export const ReviewsContainer = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
`;
