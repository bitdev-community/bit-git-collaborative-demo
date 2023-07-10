import React from 'react';
import { Icons } from './icons';

export const SocialIcons = () => {
  return (
    <Icons
      links={[
        { name: 'github', url: 'https://github.com' },
        { name: 'linkedin', url: 'https://linkedin.com' },
        { name: 'twitter', url: 'https://twitter.com' },
        { name: 'website', url: 'https://enlear.com' },
      ]}
    />
  );
}
