import styled from '@emotion/styled';

export const MovieItem = styled.div`
  border-radius: 5px;
  object-fit: cover;
  width: 100%;
  display: grid;
  margin: 0 auto;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px 15px;
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

export const MovieTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
`;

export const MovieInfoDetails = styled.div`
  h2{
    color: blue;
    margin-bottom: 10px;
  }
  h3{
    padding-bottom: 10px ;
  }
  p{
    margin-bottom: 20px;
  }
}
`;
