import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { WidgetHeader } from './widget-header';
import { WidgetTags } from './widget-tags';
import { Button } from '../../components/button';
import { colors, sizes } from '../../theme/variables';


const generateArray = (n, text) => [...Array(n)].map((_, index) => {
    const idNumber = index + 1;
    return ({id: idNumber, value: `${text} ${idNumber}`})
});

const INITIAL_ARRAY = [
  {id: 5, value: `Element 5`},
  {id: 51, value: `Element 51`},
];

const DATA_ARRAY = generateArray(300, 'Element');

const MAX_SIZE = 3;

const WidgetsContainer = styled.div`
  padding: 50px 0;
`;

const WidgetActions = styled.div`
  margin: ${sizes.spacing15} 0;
  display: flex;
  justify-content: space-between;
`;

const WidgetsList = styled.div`
  background: ${colors.dark300};
  color: ${colors.white};
  height: 100%;
  max-height: 266px;
  overflow: auto;
  padding: ${sizes.spacing10} ${sizes.spacing16};
  width: 446px;
`;

const WidgetsListItem = styled.label`
  cursor: pointer;
  display: block;
  margin: ${sizes.spacing10} 0;
  padding-left: ${sizes.spacing5};
`;

const StyledCheckbox = styled.input`
  margin-right: 10px;
`;

const WidgetModal = styled.div`
  background: ${colors.grey300};
  padding: ${sizes.spacing18};
  display: inline-block;
  position: relative;
  color: ${colors.white};
`;

const WidgetModalClose = styled.div`
  top: ${sizes.spacing15};
  right: ${sizes.spacing15};
  position: absolute;
  cursor: pointer;

  &:before {
    content: 'x';
  }
`;

export const Widget = () => {
  const [selectedItems, setSelectedItems] = useState(INITIAL_ARRAY);
  const [permamentItems, setPermamentItems] = useState(selectedItems);
  const [isVisible, setIsVisible] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(0);

  useEffect(() => {
    setPermamentItems(selectedItems);
  }, [selectedItems]);

  const lengthOfSelection = permamentItems.length;

  const handleRemoveTag = (id) => {
    setSelectedItems(selectedItems.filter((item) => (item.id !== id)));
  };

  const handleRemovePermament = (id) => {
    setPermamentItems(permamentItems.filter((item) => (item.id !== id)));
  };

  const handleAddPermament = (id) => {
    setPermamentItems([...permamentItems, DATA_ARRAY.find(item => item.id === id)]);
  };

  const handleTagClick = (id, isSelected) => {
    isSelected ? handleRemovePermament(id) : handleAddPermament(id);
  };

  const handleWidgetSave = () => {
    setSelectedItems([...permamentItems]);
    setIsVisible(false)
  };

  const handleWidgetClose = () => {
    setSelectedItems([...selectedItems]);
    setIsVisible(false)
  };

  return(
    <WidgetsContainer>
      <WidgetHeader tagsLength={lengthOfSelection}/>
      {lengthOfSelection > 0 && (<WidgetTags tags={selectedItems} onRemove={handleRemoveTag}/>)}
      <WidgetActions>
        <Button
          onClick={() => setIsVisible(true)}
          text="Изменить мой выбор"
        />
      </WidgetActions>
      {isVisible && (
        <WidgetModal>
          <p>Диалог выбора элементов</p>
          <WidgetModalClose onClick={() => handleWidgetClose()}/>

          <WidgetActions>
            <input
              type="text"
              placeholder='Поиск'
              value={inputQuery}
              onChange={e => setInputQuery(e.target.value)}
            />
            <select
              value={selectedQuery}
              onChange={(e) => setSelectedQuery(e.target.value)}
            >
              <option value={0}>Без фильтра</option>
              <option value={10}>{`Номер >10`}</option>
              <option value={100}>{`Номер >100`}</option>
              <option value={200}>{`Номер >200`}</option>
            </select>
          </WidgetActions>

          <WidgetsList>
            {DATA_ARRAY
            .filter(item => {
              if (inputQuery === '') {
                return item;
              } else if (item.value.toLowerCase().includes(inputQuery.toLowerCase())) {
                return item;
              }
            })
            .filter(item => item.id > selectedQuery)
            .map(item => {
              const isSelected = permamentItems.some(element => {return element.id === item.id})

              return (
                <WidgetsListItem
                  key={item.id}
                >
                  <StyledCheckbox
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleTagClick(item.id, isSelected)}
                    disabled={lengthOfSelection === MAX_SIZE}
                  />
                  {item.value}
                </WidgetsListItem>
              )
            })}
          </WidgetsList>
          <p>Выбранные элементы на данный момент:</p>
          <WidgetTags tags={permamentItems} onRemove={handleRemovePermament}/>
          <WidgetActions>
            <Button
              onClick={() => handleWidgetSave()}
              text="Сохранить"
            />
            <Button
              onClick={() => handleWidgetClose()}
              text="Отмена"
            />
      </WidgetActions>
        </WidgetModal>
      )}
    </WidgetsContainer>
  )
};
