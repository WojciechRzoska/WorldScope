import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  gap: 5rem;
  padding-block: 2rem;

  @media (min-width: 20em) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  @media (min-width: 37em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 58em) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 80em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 100em) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
