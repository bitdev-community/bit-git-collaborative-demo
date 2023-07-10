import React from 'react';
import { render } from '@testing-library/react';
import { MUIPreviewContext } from '@showoff/dev.preview-contexts.mui-preview-context';
import { SampleLandingPage } from './landing-page.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<MUIPreviewContext><SampleLandingPage /></MUIPreviewContext>);
  const rendered = getByText('John Doe');
  expect(rendered).toBeTruthy();
});
