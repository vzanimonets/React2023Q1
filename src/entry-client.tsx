import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const container = document.getElementById('root');

hydrateRoot(
  container as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
