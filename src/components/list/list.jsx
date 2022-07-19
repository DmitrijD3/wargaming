import { useState } from 'react';
import styled from 'styled-components';
import { ListItem } from './list-item';
import { colors, sizes } from '../../theme/variables';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0 ${sizes.spacing14};
  margin: 0;
  color: ${colors.grey300};
  display: flex;

  @media (max-width: ${sizes.pageBrake}) {
    background: ${colors.grey500};
    flex-direction: column;
    width: fit-content;
    padding: ${sizes.spacing5} 0;
    border: 1px solid ${colors.grey700};
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.05), inset 2px -2px 0px ${colors.white}, inset -2px 2px 0px ${colors.white};
  }
`;

export const List = ({ itemsToList }) => {
  const [selectedItem, setSelectedItem] = useState(2);
  const [isListExpanded, setIsListExpanded] = useState(false);

  const handleLiClick = (itemId) => {
    setSelectedItem(itemId);
    if(window.innerWidth <= 800)
       setIsListExpanded(prev => !prev);
  };

  return(
    <StyledList expanded={isListExpanded}>
        {itemsToList.map(item => (
          <ListItem
            key={item.tagId}
            active={item.tagId === selectedItem}
            expanded={isListExpanded}
            onLiClick={handleLiClick}
            selectedId={item.tagId}
          >
            {item.tagId === selectedItem && (<span/>)}
            {item.tagText}
          </ListItem>
        ))}
    </StyledList>
  );
};
