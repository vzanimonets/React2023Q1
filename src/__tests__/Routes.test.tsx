import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../components/App/App';
import { ToastProvider } from 'react-toast-notifications';

describe('Routes Component', () => {
  it('testing render of the main page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </MemoryRouter>
    );

    const mainPage = screen.getByText('Main page');
    expect(mainPage).toBeInTheDocument();
  });

  it('testing render of the about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </MemoryRouter>
    );

    const aboutPage = screen.getByText('About content');
    expect(aboutPage).toBeInTheDocument();
  });

  it('testing render of the error page', () => {
    render(
      <MemoryRouter initialEntries={['/random']}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </MemoryRouter>
    );

    const errorPage = screen.getByText('Page not found: Error 404!');
    expect(errorPage).toBeInTheDocument();
  });
  it('testing render of the form page', () => {
    render(
      <MemoryRouter initialEntries={['/forms']}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('form-component')).toBeDefined();
  });
});
