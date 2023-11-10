import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    main: 'silver',
    button: 'grey',
    good: 'green',
    neutral: 'orange',
    bad: 'red',
    statistics: 'black',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
