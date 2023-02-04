import { About, BoldSpan, Flag, Wrapper } from './CountryBox.styles';

interface Props {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: Array<string>;
}

const CountryBox = ({ name, flag, population, region, capital }: Props) => {
  return (
    <Wrapper>
      <Flag>
        <img src={flag} alt="germany flag" />
      </Flag>
      <About>
        <h3>{name}</h3>
        <p>
          <BoldSpan>Population:</BoldSpan> {population}
        </p>
        <p>
          <BoldSpan>Region:</BoldSpan> {region}
        </p>
        <p>
          <BoldSpan>Capital:</BoldSpan> {capital}
        </p>
      </About>
    </Wrapper>
  );
};

export default CountryBox;
