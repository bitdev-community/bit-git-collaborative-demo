import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { Logo } from '@showoff/design.brand.logo';
import { Appbar } from './appbar';

export const SampleAppbar = () => (
  <MemoryRouter>
    <Appbar
      logo={<Link
        to="/"
      >
        <Logo />
      </Link>}
      navLinks={[
        { label: 'Projects', url: '/projects' },
        { label: 'Contact', url: '/contact' },
        { label: 'About me', url: '/about' },
      ]}
    />
  </MemoryRouter>
);
