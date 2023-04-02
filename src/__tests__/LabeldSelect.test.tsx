import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import LabeledSelect from '../components/LabeledSelect/LabeledSelect';
import React from 'react';

describe('Form', () => {
  it('component LabeledTextArea', async () => {
    render(
      <LabeledSelect
        data-testid="test-select"
        id="testId"
        name="description"
        label="Some label"
        options={[
          { value: '', label: '--Select status--' },
          { value: '1', label: 'test value 1' },
          { value: '2', label: 'test value 2' },
        ]}
      />
    );
    expect(await screen.getByTestId('test-select')).toBeInTheDocument();
    expect(await screen.getByLabelText('Some label')).toBeInTheDocument();
  });
});
