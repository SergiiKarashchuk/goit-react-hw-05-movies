import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink, Wrapper } from './BackLink.Styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <Wrapper>
        <HiArrowLeft size="24" />
        {children}
      </Wrapper>
    </StyledLink>
  );
};

export default BackLink;
