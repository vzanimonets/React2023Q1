import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../components/Card/Card';
import { fireEvent } from '@testing-library/dom';
import { ToastProvider } from "react-toast-notifications";

describe('Item test', () => {
  test('Should show title', async() => {
    const item = {
      firstName: 'firstName',
      lastName: 'lastName',
      age: 23,
      id: '1',
      image: 'image.jpg',
    };
    render(
      <ToastProvider>
        <Card {...item} />{' '}
      </ToastProvider>
    );
    expect(screen.getByText(/firstName lastName,23/i)).toBeDefined();
    const details = screen.getByText('Show Details');
    fireEvent.click(details);
    expect(await screen.getByTestId('modal')).toBeInTheDocument();
  });
});
