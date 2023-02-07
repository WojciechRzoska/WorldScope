import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'components/atoms/input';
import CountryBox from 'components/molecules/CountryBox/CountryBox';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetCountriesQuery } from 'store';
import { IRootState } from 'store/themeSlice';
import { Country } from 'types/country';
import {
  Container,
  Filters,
  FormField,
  LinkStyle,
  Select,
  Wrapper,
} from './CountriesList.styles';

const CountriesList = () => {
  const { data: countries } = useGetCountriesQuery();
  const [dataToRender, setDataToRender] = useState<Array<Country> | undefined>(
    []
  );
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const darkMode = useSelector((state: IRootState) => state.theme.darkMode);

  useEffect(() => {
    setDataToRender(countries);
  }, [countries]);

  const filterCountries = (phrase: string) =>
    setDataToRender(
      countries?.filter(
        (country: { name: { common: string }; region: string }) =>
          country.name.common.toLowerCase().includes(phrase.toLowerCase()) &&
          (!selectedRegion || country.region === selectedRegion)
      )
    );

  const filtredRegion = (region: string) => {
    setSelectedRegion(region);
    setDataToRender(
      countries?.filter((country: { region: string }) =>
        region ? country.region === region : countries
      )
    );
  };

  return (
    <Wrapper darkMode={darkMode}>
      <Filters>
        <FormField>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Input
            placeholder="Search for a country..."
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              filterCountries(e.currentTarget.value)
            }
          />
        </FormField>
        <Select
          value={selectedRegion}
          onChange={(e) => filtredRegion(e.target.value)}
        >
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </Filters>
      <Container>
        {dataToRender?.map(
          ({
            name: { common, official },
            flags,
            population,
            region,
            capital,
            cca3,
          }: Country) => (
            <LinkStyle key={common} to={`/country/${cca3}`}>
              <CountryBox
                key={common}
                name={common}
                flag={flags.png}
                population={population}
                region={region}
                capital={capital}
              />
            </LinkStyle>
          )
        )}
      </Container>
    </Wrapper>
  );
};

export default CountriesList;
