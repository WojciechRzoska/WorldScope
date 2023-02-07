import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DarkMode } from 'types/types';

export const Wrapper = styled(ViewWrapper)<DarkMode>`
  *:first-child > *,
  *:nth-child(2) > * {
    background-color: ${({ darkMode, theme }) =>
      darkMode ? theme.colors.darkBlue : theme.colors.white} !important;
    color: ${({ darkMode, theme }) =>
      darkMode ? theme.colors.white : theme.colors.darkBlueText} !important;
  }
`;
export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1em) {
    flex-direction: column;
  }
  @media (min-width: 37em) {
    flex-direction: row;
  }
`;
export const FormField = styled.div`
  margin-top: 2em;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.4em 2.5em;
  border-radius: 0.3em;
  box-shadow: 0px 0px 2px -1px rgba(66, 68, 90, 1);
  color: ${({ theme }) => theme.colors.grey};

  @media (min-width: 20em) {
    width: 100%;
  }

  @media (min-width: 37em) {
    max-width: 20rem;
    min-width: 20rem;
    width: 30%;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  @media (min-width: 20em) {
    width: 70%;
  }
  @media (min-width: 37em) {
    width: 100%;
  }
`;
export const Select = styled.select`
  border: none;
  padding: 1.425em 3em;
  margin-top: 2.4em;
  border-radius: 0.3em;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 2px -1px rgba(66, 68, 90, 1);

  @media (min-width: 1em) {
    align-self: flex-start;
  }
`;
export const Container = styled.div`
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
