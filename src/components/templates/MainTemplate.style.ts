import styled from 'styled-components';
import { DarkMode } from 'types/types';

export const Wrapper = styled.div<DarkMode>`
  min-height: 100dvh;
  background-color: ${({ darkMode, theme }) =>
    darkMode ? theme.colors.darkBlueBg : theme.colors.lightGrey};
  * {
    color: ${({ darkMode, theme }) =>
      darkMode ? theme.colors.white : theme.colors.darkBlueText};
  }
`;
