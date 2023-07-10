import React from 'react';
import { SocialLinks } from '@teambit/people.ui.social-links';

export type IconsProps = {
  links: {
    name: 'twitter' | 'github' | 'linkedin' | 'website';
    url: string;
  }[]
};

export function Icons({ links }: IconsProps) {
  return (
    <SocialLinks
      links={links}
      style={{
        display: 'flex',
        gap: 15,
        justifyContent: 'flex-start',
      }}
    />
  );
}
