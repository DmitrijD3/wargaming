import { Container } from './components/container';
import { Search } from './feature/search';
import { Taglist } from './feature/taglist';
import { Article } from './feature/article';
import { Widget } from './feature/widget';

 const App = () => (
  <>
    <Container>
      <Search />
    </Container>
    <Container>
      <Taglist />
    </Container>
    <Container>
      <Article />
    </Container>
    <Container>
      <Widget />
    </Container>
  </>
);

export default App;
