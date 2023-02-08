import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { BoldSpan } from 'components/molecules/CountryBox/CountryBox.styles';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleCountryQuery } from 'store';
import { IRootState } from 'store/themeSlice';
import styled from 'styled-components';
import { Country } from 'types/country';
import { DarkMode } from 'types/types';

const Wrapper = styled(ViewWrapper)`
  width: 90%;
`;
const ButtonContainer = styled.div`
  margin: 3em 0 1em 0;
`;
const Button = styled(Link)<DarkMode>`
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
const Container = styled.div`
  display: flex;

  @media (min-width: 10em) {
    flex-direction: column;
  }
  /* 
  @media (min-width: 37em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 58em) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 80em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } */

  @media (min-width: 40em) {
    gap: 5rem;
    flex-direction: row;
  }
`;
const Flag = styled.div`
  margin: 3em 0;
  img {
    width: 100%;
  }
  /* @media (min-width: 50em) {
    img {
      width: 100%;
    }
  } */
  @media (min-width: 40em) {
    width: 50%;
  }
`;
const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  @media (min-width: 60em) {
    width: 50%;
  }
`;
const InfoContainer = styled.div`
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
const BorderCountries = styled.div`
  p {
    font-size: 1.2rem;
    margin-bottom: 1em;
  }
  @media (max-width: 40em) {
    margin-bottom: 3em;
  }
`;
const InfoContainerLeft = styled.div``;
const InfoContainerRight = styled.div`
  margin: 3.5em 0 2rem;
  @media (min-width: 60em) {
    margin: 0;
  }
`;
const BorderCountriesLinks = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  width: 100%;
`;
const BorderCounterLink = styled(Link)<DarkMode>`
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

const CountryDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleCountryQuery(id);
  const darkMode = useSelector((state: IRootState) => state.theme.darkMode);

  return (
    <Wrapper>
      <ButtonContainer>
        <Button to="/" darkMode={darkMode}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </Button>
      </ButtonContainer>
      {data?.map(
        ({
          name: { common, nativeName },
          flags: { alt, png },
          population,
          region,
          capital,
          subregion,
          tld,
          currencies,
          languages,
          borders,
        }: Country) => (
          <Container key={common}>
            <Flag>
              <img src={png} alt={alt} />{' '}
            </Flag>
            <About>
              <h2>{common}</h2>
              <InfoContainer>
                <InfoContainerLeft>
                  <p>
                    <BoldSpan>Native Name: </BoldSpan>
                    {Object.values(nativeName)[0].common}
                  </p>
                  <p>
                    <BoldSpan>Population: </BoldSpan>
                    {population.toLocaleString()}
                  </p>
                  <p>
                    <BoldSpan>Region: </BoldSpan> {region}
                  </p>
                  <p>
                    <BoldSpan>Sub Region: </BoldSpan> {subregion}
                  </p>
                  <p>
                    <BoldSpan>Capital: </BoldSpan> {capital}
                  </p>
                </InfoContainerLeft>
                <InfoContainerRight>
                  <p>
                    <BoldSpan>Top Level Domain:</BoldSpan> {tld}
                  </p>
                  <p>
                    <BoldSpan>Currencies:</BoldSpan>{' '}
                    {Object.values(currencies)[0].name}
                  </p>
                  <p>
                    <BoldSpan>Languages:</BoldSpan>{' '}
                    {Object.values(languages).map((lang) => `${lang} `)}
                  </p>
                </InfoContainerRight>
              </InfoContainer>
              <BorderCountries>
                <p>
                  <BoldSpan> Border Countries: </BoldSpan>
                </p>
                <BorderCountriesLinks>
                  {borders?.map((country: string) => (
                    <BorderCounterLink
                      darkMode={darkMode}
                      key={country}
                      to={`/country/${country}`}
                    >
                      {country}
                    </BorderCounterLink>
                  ))}
                </BorderCountriesLinks>
              </BorderCountries>
            </About>
          </Container>
        )
      )}
    </Wrapper>
  );
};

export default CountryDetails;
