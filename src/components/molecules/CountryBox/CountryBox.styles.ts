import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3%;
  overflow: hidden;
  min-width: 7rem;
  box-shadow: 2px 2px 4px -1px rgba(66, 68, 90, 1);

  @media (min-width: 20em) {
    width: 70%;
  }
  @media (min-width: 37em) {
    width: 100%;
  }
`;
export const Flag = styled.div`
  height: 10rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const About = styled.div`
  padding: 1em 2em;

  h3 {
    margin-bottom: 0.8em;
  }
  p {
    margin-bottom: 0.5em;
    font-weight: 300;
  }
`;
export const BoldSpan = styled.span`
  font-weight: 400;
`;
