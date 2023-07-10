import React from 'react';
import { render } from '@testing-library/react';
import { MUIPreviewContext } from '@showoff/dev.preview-contexts.mui-preview-context';
import { SampleHistory } from './history.composition';

it('should render with the correct text', () => {
  const { getAllByText } = render(<MUIPreviewContext><SampleHistory /></MUIPreviewContext>);
  const rendered = getAllByText('ABC Company');
  expect(rendered.length).toBeGreaterThan(0);
});
