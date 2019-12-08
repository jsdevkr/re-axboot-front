import * as react from 'react';
import { createGlobalStyle } from 'styled-components';

const Normalize: react.ComponentType = require('styled-normalize').Normalize;
export { Normalize };

import './less/app.less';

export const GlobalStyles = createGlobalStyle`
  .clearfix:before, .clearfix:after {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }

  html, body{
    margin: 0; padding: 0;
  }
  body {
    overflow-y: auto;
    overflow-x: hidden;
  }

  .container {
    max-width: 1180px;
    margin: 0 auto;
  }
`;
