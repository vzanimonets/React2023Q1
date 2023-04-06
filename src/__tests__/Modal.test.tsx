import React from 'react';
import Modal from '../components/Modal/Modal';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

describe('Modal', () => {
  it('should render as expected when Modal isOpen is true', async () => {
    render(<Modal isOpen={true} onClose={() => {}} />);
    expect(await screen.getByTestId('modal')).toBeInTheDocument();
  });
});
