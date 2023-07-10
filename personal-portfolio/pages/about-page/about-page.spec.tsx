import React from 'react';
import { render } from '@testing-library/react';
import { MUIPreviewContext } from '@showoff/dev.preview-contexts.mui-preview-context';
import { SampleAboutPage } from './about-page.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<MUIPreviewContext><SampleAboutPage /></MUIPreviewContext>);
  const rendered = getByText('About-me.');
  expect(rendered).toBeTruthy();
});
