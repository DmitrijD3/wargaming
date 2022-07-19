import styled from 'styled-components';
import { colors, sizes, fonts } from '../../theme/variables';

const TagsContainer = styled.div`
  display: flex;
  margin: ${sizes.spacing15} 0px;
`;

const Tag = styled.div`
  color: ${colors.white};
  background: ${colors.dark};
  min-width: 142px;
  padding: ${sizes.spacing5} 0 ${sizes.spacing5} ${sizes.spacing10};
  margin-right: ${sizes.spacing10};
  display: flex;
  align-item: center;
  justify-content: space-between;

  &:last-child {
    margin: 0;
  }
`;

const TagRemove = styled.div`
  width: ${sizes.spacing26};
  height: ${sizes.spacing17};
  border-left: 1px solid ${colors.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before{
    content: 'x';
    font-size: ${fonts.small};
  }
`;

export const WidgetTags = ({ tags, onRemove }) => (
    <TagsContainer>
      {tags.map(tag => (
        <Tag key={tag.id}>
          <span>{tag.value}</span>
          <TagRemove onClick={() => onRemove(tag.id)}/>
        </Tag>
      ))}
    </TagsContainer>      
  );
  