import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { fireEvent } from '@testing-library/dom';

import Form from '../components/Form/Form';
import React from 'react';

describe('Form', () => {
  it('submits the form when all fields are filled correctly', () => {
    const form = render(<Form addItem={() => {}} />);
    const nameInput = form.getByLabelText('Item Title');
    const descriptionTextarea = form.getByLabelText('Item description');
    const statusInput = form.getByLabelText('Status');
    const publishedDate = form.getByLabelText('Published');
    const termsCheckbox = form.getByLabelText('I agree to the terms');
    const fileInput = form.getByTestId('form-upload');

    fireEvent.input(nameInput, { target: { value: 'Item' } });
    fireEvent.input(descriptionTextarea, { target: { value: 'Some description' } });
    fireEvent.input(statusInput, { target: { value: 'In stock' } });
    fireEvent.input(publishedDate, { target: { value: '23.04.2023' } });
    fireEvent.click(termsCheckbox);
    fireEvent.submit(form.getByTestId('form-component'));
    fireEvent.change(fileInput, {
      target: { files: [new File(['file contents'], 'filename.txt')] },
    });
  });
});
