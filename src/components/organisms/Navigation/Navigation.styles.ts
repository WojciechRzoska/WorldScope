import styled from 'styled-components';

export const Navbar = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1em 0em;
  box-shadow: 0px 3px 10px -10px rgba(66, 68, 90, 1);
`;
export const Container = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;
export const Logo = styled.div`
  h1 {
    font-size: 1rem;
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
