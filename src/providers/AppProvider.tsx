import { GlobalStyle } from 'assets/styles/GlobalStyles.styles';
import { theme } from 'assets/styles/theme';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default AppProvider;
