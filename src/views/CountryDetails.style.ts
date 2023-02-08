import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DarkMode } from 'types/types';

export const Wrapper = styled(ViewWrapper)`
  width: 90%;
`;
export const ButtonContainer = styled.div`
  margin: 3em 0 1em 0;
`;
export const Button = styled(Link)<DarkMode>`
  margin-top: -5em;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.4em 2em;
  border-radius: 0.3em;
  box-shadow: 0px 0px 4px -1px rgba(66, 68, 90, 1);

  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.colors.darkBlue : theme.colors.lightGrey};

  color: ${({ darkMode, theme }) =>
    darkMode ? theme.colors.white : theme.colors.darkBlueText};
`;
export const Container = styled.div`
  display: flex;

  @media (min-width: 10em) {
    flex-direction: column;
  }

  @media (min-width: 40em) {
    gap: 5rem;
    flex-direction: row;
  }
`;
export const Flag = styled.div`
  margin: 3em 0;
  img {
    width: 100%;
  }

  @media (min-width: 40em) {
    width: 50%;
  }
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  @media (min-width: 60em) {
    width: 50%;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 1.2em 0;
    font-weight: 300;
  }
  @media (min-width: 60em) {
    flex-direction: row;
    gap: 10rem;
  }
`;
export const BorderCountries = styled.div`
  p {
    font-size: 1.2rem;
    margin-bottom: 1em;
  }
  @media (max-width: 40em) {
    margin-bottom: 3em;
  }
`;
export const InfoContainerLeft = styled.div``;
export const InfoContainerRight = styled.div`
  margin: 3.5em 0 2rem;
  @media (min-width: 60em) {
    margin: 0;
  }
`;
export const BorderCountriesLinks = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  width: 100%;
`;
export const BorderCounterLink = styled(Link)<DarkMode>`
  text-decoration: none;
  box-shadow: 0px 0px 4px -1px rgba(66, 68, 90, 1);
  padding: 0.4em 2em;
  flex: 1;
  max-width: 6em;

  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.colors.darkBlue : theme.colors.lightGrey};

  color: ${({ darkMode, theme }) =>
    darkMode ? theme.colors.white : theme.colors.darkBlueText};
`;
