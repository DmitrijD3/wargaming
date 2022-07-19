import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './variables';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    background: ${colors.grey100};
    font-family: 'Roboto', sans-serif;
    font-size: ${fonts.normal};
  }
`;
