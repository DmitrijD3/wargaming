import styled from 'styled-components';
import { borderRadius, colors, sizes } from '../../theme/variables';

const StyledListItem = styled.li`
  margin-right: ${sizes.spacing15};
  cursor: pointer;
  border-radius: ${borderRadius.normal};
  min-height: 25px;
  display: flex;
  align-items: center;
  position: relative;

  &:last-child{
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: ${sizes.pageBrake}) {
    padding: ${sizes.spacing5} ${sizes.spacing16} ${sizes.spacing5} ${sizes.spacing32};
    margin: 0;

    ${props => !props.expanded && `
      display: none;
    `}
  }

  ${props => props.active && `
    background: ${colors.grey300};
    color: ${colors.white};
    padding: 0 ${sizes.spacing18};

    @media (max-width: ${sizes.pageBrake}) {
      background: transparent;
      color: ${colors.dark200};
      display: block;

      &:before {
        content: '';
        position: absolute;
        width: 13px;
        height: 8px;
        top: 50%;
        left: ${sizes.spacing10};
        transform: translateY(-50%);
        background: url('img/arrow-icon.svg') no-repeat center center;
      }
    }
  `}

  ${props => props.active && !props.expanded && `
    @media (max-width: ${sizes.pageBrake}) {
      span, &:after, &:before {
        width: 12px;
        height: 2px;
        background: ${colors.grey300};
        position: absolute;
        left: ${sizes.spacing10};
        top: 50%;
      }
  
      span {
        top: 10px;
      }
 
      &:after {
        content: '';
        top: 18px;
      }
  
      &:before {
        content: '';
      }
    }
  `}
`;

export const ListItem = ({ onLiClick, active, expanded, selectedId, children }) => (
  <StyledListItem
    active={active}
    expanded={expanded}
    onClick={() => onLiClick(selectedId)}
  >
    {children}
  </StyledListItem>
);
