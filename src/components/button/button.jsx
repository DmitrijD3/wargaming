import styled from 'styled-components';
import { colors, fonts, sizes, borderRadius } from '../../theme/variables';

const StyledButton = styled.button`
  font-size: ${fonts.xSmall};
  line-height: ${sizes.spacing37};
  cursor: pointer;
  min-width: 50px;
  padding: 0 ${sizes.spacing16};
  border-radius: ${borderRadius.normal};
  background: linear-gradient(180deg, rgba(177, 181, 183, 0) 0%, rgba(177, 181, 183, 0.25) 100%), ${colors.grey100};
  box-shadow: -1px 0px 1px rgba(0, 0, 0, 0.25), 1px 0px 1px rgba(0, 0, 0, 0.25), 0px 1px 1px rgba(0, 0, 0, 0.4), inset 0px 1px 0px rgba(255, 255, 255, 0.5);
  border: 1px solid ${colors.grey100};

  &:hover {
    background: linear-gradient(180deg, rgba(177, 181, 183, 0) 0%, rgba(155, 159, 162, 0.4) 100%), ${colors.grey100};
    box-shadow: -1px 0px 1px rgba(0, 0, 0, 0.25), 1px 0px 1px rgba(0, 0, 0, 0.25), 0px 1px 1px rgba(0, 0, 0, 0.4), inset 0px 0px 20px 7px rgba(255, 255, 255, 0.4), inset 0px 1px 0px rgba(255, 255, 255, 0.5);
  }
`;

export const Button = ({ text, ...props }) => (
  <StyledButton {...props}>{ text }</StyledButton>
);