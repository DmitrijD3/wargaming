import styled from 'styled-components';
import { sizes } from '../../theme/variables';
import { InputText } from '../../components/input';
import { Button } from '../../components/button';
import { SearchIcon, RemoveIcon } from '../../assets/icons';

const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SearchInputContainer = styled.div`
  margin-right: ${sizes.spacing10};
  position: relative;
  width: 100%;
`;

const IconsContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${props => !props.remove ? `
    left: 11px;
  ` : `
    right: 11px;
    cursor: pointer;
  `}
`;

export const Search = () => {
  return(
    <SearchContainer>
      <SearchInputContainer>
        <IconsContainer >
          <SearchIcon />
        </IconsContainer>
        <IconsContainer remove>
          <RemoveIcon />
        </IconsContainer>
        <InputText />
      </SearchInputContainer>
      <Button text='Go' />
    </SearchContainer>
  );
};
