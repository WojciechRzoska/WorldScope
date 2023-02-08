import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BoldSpan } from 'components/molecules/CountryBox/CountryBox.styles';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetSingleCountryQuery } from 'store';
import { IRootState } from 'store/themeSlice';
import { Country } from 'types/country';
import {
  About,
  BorderCounterLink,
  BorderCountries,
  BorderCountriesLinks,
  Button,
  ButtonContainer,
  Container,
  Flag,
  InfoContainer,
  InfoContainerLeft,
  InfoContainerRight,
  Wrapper,
} from './CountryDetails.style';

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
