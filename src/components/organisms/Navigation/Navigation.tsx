import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Navbar,
  Container,
  Logo,
  DarkModeBtn,
} from 'components/organisms/Navigation/Navigation.styles';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState, toogleTheme } from 'store/themeSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: IRootState) => state.theme.darkMode);

  return (
    <Navbar darkMode={darkMode}>
      <Container>
        <Logo>
          <h1>World scope</h1>
        </Logo>
        <DarkModeBtn onClick={() => dispatch(toogleTheme())}>
          <FontAwesomeIcon icon={faMoon} />
          {'  '}
          Dark mode
        </DarkModeBtn>
      </Container>
    </Navbar>
  );
};

export default Navigation;
