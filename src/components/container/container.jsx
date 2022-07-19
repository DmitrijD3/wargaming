import styled from 'styled-components';
import { sizes } from '../../theme/variables';

const StyledContainer = styled.div`
  max-width: ${sizes.maxPageSize};
  margin: ${sizes.spacing32} auto;
  padding: 0 ${sizes.spacing16};
`;

export const Container = ({ children }) => (
  <StyledContainer>{ children }</StyledContainer>
);
