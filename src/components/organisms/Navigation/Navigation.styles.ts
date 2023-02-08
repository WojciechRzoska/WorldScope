import styled from 'styled-components';
import { DarkMode } from 'types/types';

export const Navbar = styled.div<DarkMode>`
  width: 100%;
  padding: 1.125em 0em;
  box-shadow: 0px 3px 10px -10px rgba(66, 68, 90, 1);

  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.colors.darkBlue : theme.colors.white};
  * {
    color: ${({ darkMode, theme }) =>
      darkMode ? theme.colors.white : theme.colors.darkBlueText};
  }
`;
export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;
export const Logo = styled.div`
  h1 {
    font-size: 1.125rem;
  }
`;
export const DarkModeBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 0.8rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;
