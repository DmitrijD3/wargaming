import { List } from '../../components/list';

const tags = [
  {tagId: 1, tagText: 'World Of Tanks'},
  {tagId: 2, tagText: 'World Of Warplanes'},
  {tagId: 3, tagText: 'World Of Warships'},
];

export const Taglist = () => {
  return(
    <List itemsToList={tags} />
  );
};