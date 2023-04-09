import React from 'react';
import DetailsModal from '../components/DetailsModal/DetailsModal';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('DetailsModal', () => {
  it('should render as expected when DetailsModal isOpen is true', async () => {
    render(<DetailsModal isOpen={true} onClose={() => {}} id={'1'} />);
    expect(await screen.getByTestId('modal')).toBeInTheDocument();
  });
  it('should render as expected when DetailsModal isOpen is false', async () => {
    render(<DetailsModal isOpen={false} onClose={() => {}} id={'1'} />);
    const modal = screen.queryByText('DETAILS INFORMATION');
    expect(modal).toBeNull();
  });
  it('should render as expected when DetailsModal isOpen is true', async () => {
    render(<DetailsModal isOpen={true} onClose={() => {}} id={'1'} />);
    const modal = screen.queryByText('DETAILS INFORMATION');
    await userEvent.click(modal as HTMLFormElement);
    expect(await screen.getByTestId('modal')).toBeInTheDocument();
  });
});
