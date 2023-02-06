import styled from 'styled-components';
import { DarkMode } from 'types/types';

export const Wrapper = styled.div<DarkMode>`
  width: 90%;
  margin: 0 auto;

  *:first-child,
  *:nth-child(2),
  > *:first-child > *,
  > *:nth-child(3) > * {
    background-color: ${({ darkMode, theme }) =>
      darkMode ? theme.colors.darkBlue : theme.colors.white} !important;
    color: ${({ darkMode, theme }) =>
      darkMode ? theme.colors.white : theme.colors.darkBlueText} !important;
  }
`;

export const FormField = styled.div`
  margin-top: 2em;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 0.4em 2.5em;
  border-radius: 0.3em;
  box-shadow: 0px 0px 2px -1px rgba(66, 68, 90, 1);
  color: ${({ theme }) => theme.colors.grey};
`;

export const Select = styled.select``;
export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 5rem;
  padding-block: 2rem;

  @media (min-width: 20em) {
    grid-template-columns: 1.2fr;
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
