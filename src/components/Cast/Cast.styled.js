import styled from '@emotion/styled';

export const CastContainer = styled.div`
  display: flex;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10 px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
`;
