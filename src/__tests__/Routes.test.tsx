import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../components/App/App';
import { ToastProvider } from 'react-toast-notifications';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

describe('Routes Component', () => {
  it('testing render of the main page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <ToastProvider>
            <App />
          </ToastProvider>
        </MemoryRouter>
      </Provider>
    );

    const mainPage = screen.getByText('Main page');
    expect(mainPage).toBeInTheDocument();
  });

  it('testing render of the about page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <ToastProvider>
            <App />
          </ToastProvider>
        </MemoryRouter>
      </Provider>
    );

    const aboutPage = screen.getByText('About content');
    expect(aboutPage).toBeInTheDocument();
  });

  it('testing render of the error page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/random']}>
          <ToastProvider>
            <App />
          </ToastProvider>
        </MemoryRouter>
      </Provider>
    );

    const errorPage = screen.getByText('Page not found: Error 404!');
    expect(errorPage).toBeInTheDocument();
  });
  it('testing render of the form page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/forms']}>
          <ToastProvider>
            <App />
          </ToastProvider>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('form-component')).toBeDefined();
  });
});
