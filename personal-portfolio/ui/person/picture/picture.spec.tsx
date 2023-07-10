import React from 'react';
import { render } from '@testing-library/react';
import { MUIPreviewContext } from '@showoff/dev.preview-contexts.mui-preview-context';
import { SamplePicture } from './picture.composition';

it('should render an img tag', () => {
  const rendered = render(<MUIPreviewContext><SamplePicture /></MUIPreviewContext>);
  expect(rendered.getByRole('img')).toBeTruthy();
});
