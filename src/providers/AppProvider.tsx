import { GlobalStyle } from 'assets/styles/GlobalStyles.styles';
import { theme } from 'assets/styles/theme';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default AppProvider;
