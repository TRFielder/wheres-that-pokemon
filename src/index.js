import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Helmet, HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta charset="utf-8" />
        <title>Where's That Pokémon?</title>
      </Helmet>
    </HelmetProvider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
