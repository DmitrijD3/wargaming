export const WidgetHeader = ({ tagsLength }) => (
  <div>
    <h2>Выбор элементов</h2>
    {tagsLength ? (
      <p>На данный момент у вас выбрано {tagsLength} элемента:</p>
    ) : (
        <p>Не выбрано ни одного элемента:</p>
    )}
  </div>      
);
