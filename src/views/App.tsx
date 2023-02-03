import CountriesList from 'components/organisms/CountriesList/CountriesList';
import MainTemplate from 'components/templates/MainTemplate';

const App = () => {
  return (
    <div className="App">
      <MainTemplate>
        <CountriesList />
      </MainTemplate>
    </div>
  );
};

export default App;
