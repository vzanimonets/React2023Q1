import React from 'react';
import { render, screen } from '@testing-library/react';

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
});
