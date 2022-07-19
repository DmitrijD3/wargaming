import 'babel-polyfill';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './theme/global-styles';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
