import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3%;
  overflow: hidden;
  width: 15rem;
  min-width: 9rem;
  box-shadow: 2px 2px 4px -1px rgba(66, 68, 90, 1);
`;
export const Flag = styled.div`
  height: 9rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const About = styled.div`
  padding: 1em 2em;

  h3 {
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 0.5em;
  }
`;
