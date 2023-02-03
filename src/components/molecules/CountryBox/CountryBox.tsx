import { About, Flag, Wrapper } from './CountryBox.styles';

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
        <p>Population:{population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </About>
    </Wrapper>
  );
};

export default CountryBox;
