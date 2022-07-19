import styled from 'styled-components';
import { borderRadius, colors, fonts, sizes } from '../../theme/variables';


const StyledInput = styled.input`
  background: ${colors.grey200};
  border: 1px solid ${colors.white};
  border-radius: ${borderRadius.normal};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1), inset 0px -1px 2px rgba(0, 0, 0, 0.6), inset 0px 2px 3px rgba(0, 0, 0, 0.6); 
  color: ${colors.dark300};
  font-size: ${fonts.normal};
  outline: none;
  padding: 0 ${sizes.spacing37};
  line-height: ${sizes.spacing37};
  width: 100%;

  &:active, &:focus {
    background: ${colors.white};
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1), inset 0px -1px 3px rgba(0, 0, 0, 0.6), inset 0px 2px 5px rgba(0, 0, 0, 0.6);
  }
`;

export const InputText = () => (
    <StyledInput type='text' />
);