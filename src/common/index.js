import styled from 'styled-components';

export const ViewPort = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const PrimaryButton = styled.div`
  display: inline-block;
  text-align: center;
  border: solid 1px transparent;
  color: white;
  background-color: rgb(33, 133, 208);
  font-size: 1.3rem;
  padding: 1rem;
  border-radius: 0.3rem;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
