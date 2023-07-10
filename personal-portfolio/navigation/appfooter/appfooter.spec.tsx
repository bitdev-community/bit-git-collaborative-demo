import React from 'react';
import { render } from '@testing-library/react';
import { BasicAppfooter } from './appfooter.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAppfooter />);
  const rendered = getByText('Made with ❤️ by @showoff');
  expect(rendered).toBeTruthy();
});
