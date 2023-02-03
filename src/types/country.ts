export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: Array<string>;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: Array<string>;
  };
  capital: Array<string>;
  altSpellings: Array<string>;
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: Array<number>;
  landlocked: boolean;
  area: number;
  demonyms: { [key: string]: { f: string; m: string } };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: { [key: string]: string };
  fifa: string;
  car: {
    signs: Array<string>;
    side: string;
  };
  timezones: Array<string>;
  continents: Array<string>;
  flags: { [key: string]: string };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: Array<number>;
  };
  postalCode: {
    format: string;
    regex: string;
  };
}
