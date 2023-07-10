import React from 'react';
import { render } from '@testing-library/react';
import { MUIPreviewContext } from '@showoff/dev.preview-contexts.mui-preview-context';
import { SampleProjectsPage } from './projects-page.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<MUIPreviewContext><SampleProjectsPage /></MUIPreviewContext>);
  const rendered = getByText('projects.');
  expect(rendered).toBeTruthy();
});
