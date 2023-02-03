import Navigation from 'components/organisms/Navigation/Navigation';
import { PropsWithChildren } from 'react';
import { Wrapper } from 'components/templates/MainTemplate.style';

const MainTemplate = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
