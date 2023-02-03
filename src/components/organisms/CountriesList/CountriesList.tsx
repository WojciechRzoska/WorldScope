import CountryBox from 'components/molecules/CountryBox/CountryBox';
import { useGetCountriesQuery } from 'store';
import { Country } from 'types/country';
import { Wrapper } from './CountriesList.styles';

const CountriesList = () => {
  const { data } = useGetCountriesQuery();
  return (
    <Wrapper>
      {data?.map(
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
    </Wrapper>
  );
};

export default CountriesList;
