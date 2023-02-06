import Navigation from 'components/organisms/Navigation/Navigation';
import { PropsWithChildren } from 'react';
import { Wrapper } from 'components/templates/MainTemplate.style';
import { IRootState } from 'store/themeSlice';
import { useSelector } from 'react-redux';

const MainTemplate = ({ children }: PropsWithChildren) => {
  const darkMode = useSelector((state: IRootState) => state.theme.darkMode);
  return (
    <Wrapper darkMode={darkMode}>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
