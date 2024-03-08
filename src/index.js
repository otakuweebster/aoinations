import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  ChakraBaseProvider, extendTheme 
} from '@chakra-ui/react'
import '@fontsource-variable/montserrat';

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat Variable', sans-serif`,
    body: `'Montserrat Variable', sans-serif`,
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>
);

