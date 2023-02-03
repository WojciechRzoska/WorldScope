import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Navbar,
  Container,
  Logo,
  DarkModeBtn,
} from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Navbar>
      <Container>
        <Logo>
          <h1>World scope</h1>
        </Logo>
        <DarkModeBtn>
          <FontAwesomeIcon icon={faMoon} />
          {'  '}
          Dark mode
        </DarkModeBtn>
      </Container>
    </Navbar>
  );
};

export default Navigation;
