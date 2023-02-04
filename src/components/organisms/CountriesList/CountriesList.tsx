import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'components/atoms/input';
import CountryBox from 'components/molecules/CountryBox/CountryBox';
import { useEffect, useState } from 'react';
import { useGetCountriesQuery } from 'store';
import { Country } from 'types/country';
import { Container, FormField, Select, Wrapper } from './CountriesList.styles';

const CountriesList = () => {
  const { data: countries } = useGetCountriesQuery();
  const [dataToRender, setDataToRender] = useState<Array<Country> | undefined>(
    []
  );
  const [selectedRegion, setSelectedRegion] = useState<string>('');

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
    <Wrapper>
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
      <Container>
        {dataToRender?.map(
          ({
            name: { official },
            flags,
            population,
            region,
            capital,
          }: Country) => (
            <CountryBox
              key={official}
              name={official}
              flag={flags.png}
              population={population}
              region={region}
              capital={capital}
            />
          )
        )}
      </Container>
    </Wrapper>
  );
};

export default CountriesList;
