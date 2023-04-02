import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import LabeledInput from '../components/LabeledInput/LabeledInput';
import React from 'react';

describe('Form', () => {
  it('component LabeledTextArea', async () => {
    render(
      <LabeledInput data-testid="test-input" id="customId" name="description" label="Some label" />
    );
    expect(await screen.getByTestId('test-input')).toBeInTheDocument();
    expect(await screen.getByLabelText('Some label')).toBeInTheDocument();
  });
});
