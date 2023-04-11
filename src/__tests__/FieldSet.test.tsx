import React from 'react';
import { render, screen } from '@testing-library/react';
import styles from '../components/Form/form.module.css';

import FieldSet from '../components/FieldSet/FieldSet';

describe('FieldSet Component', () => {
  it('testing render of the FieldSet component', () => {
    render(
      <FieldSet>
        <p>Test element</p>
      </FieldSet>
    );

    const testElement = screen.getByText('Test element');
    expect(testElement).toBeInTheDocument();
  });
  it('test error class name', () => {
    render(
      <FieldSet errors={'some error'}>
        <p>Test</p>
      </FieldSet>
    );
    const fieldSet = screen.getByTestId('form-error');
    expect(fieldSet).toHaveClass(styles.hasError);
  });
});
