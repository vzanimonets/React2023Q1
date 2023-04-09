import { render, screen } from "@testing-library/react";
import { describe, it } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import Form from '../components/Form/Form';
import React from 'react';
import userEvent from "@testing-library/user-event";

describe('Form', () => {
  it('submits the form when all fields are filled correctly', () => {
    const form = render(<Form addItem={() => {
    }} />);
    const nameInput = form.getByLabelText('Item Title');
    const descriptionTextarea = form.getByLabelText('Item description');
    const statusInput = form.getByLabelText('Status');
    const publishedDate = form.getByLabelText('Published');
    const termsCheckbox = form.getByLabelText('I agree to the terms');
    const fileInput = form.getByTestId('form-upload');
    const submit = form.getByTestId('submit');

    fireEvent.input(nameInput, { target: { value: 'Item' } });
    fireEvent.input(descriptionTextarea, { target: { value: 'Some description' } });
    fireEvent.input(statusInput, { target: { value: 'In stock' } });
    fireEvent.input(publishedDate, { target: { value: '23.04.2023' } });
    fireEvent.click(termsCheckbox);
    fireEvent.submit(form.getByTestId('form-component'));
    fireEvent.change(fileInput, {
      target: { files: [new File(['file contents'], 'filename.txt')] },
    });
    fireEvent.click(submit);
  });
  it('radio Delivery', () => {
    const form = render(<Form addItem={() => {}} />);
    const radio = form.getByLabelText('No');
    expect(radio).toBeInTheDocument();
    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });
  it('select', () => {
    const form = render(<Form addItem={() => {
    }} />);
    const select = form.getByLabelText('Status');
    expect(select).toBeInTheDocument();
    fireEvent.change(select, { target: { value: 'in stock' } });
    expect((select as HTMLSelectElement).value).toBe('in stock');
  });

  it('reset form', () => {
    const form = render(<Form addItem={() => {
    }} />);
    const reset = form.getByTestId('reset');
    const select = form.getByLabelText('Status');
    fireEvent.change(select, { target: { value: 'in stock' } });
    expect((select as HTMLSelectElement).value).toBe('in stock');
    fireEvent.click(reset);
    expect((select as HTMLSelectElement).value).toBe('');
  });
});
