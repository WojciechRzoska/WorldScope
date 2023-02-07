import CountriesList from 'components/organisms/CountriesList/CountriesList';
import MainTemplate from 'components/templates/MainTemplate';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './CountryDetails';

const App = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country" element={<CountryDetails />}>
          <Route path=":id" element={<CountryDetails />} />
        </Route>
      </Routes>
    </MainTemplate>
  );
};

export default App;
