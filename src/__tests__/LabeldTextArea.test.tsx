import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import LabeledTextArea from '../components/LabeledTextArae/LabeledTextArea';
import React from 'react';

describe('Form', () => {
  it('component LabeledTextArea', async () => {
    render(
      <LabeledTextArea
        data-testid="test-textarea"
        id="customId"
        name="description"
        label="Some label"
        errors="some error"
      />
    );
    expect(await screen.getByTestId('test-textarea')).toBeInTheDocument();
    expect(await screen.getByLabelText('Some label')).toBeInTheDocument();
    expect(await screen.getByText('some error')).toBeInTheDocument();
  });
});
