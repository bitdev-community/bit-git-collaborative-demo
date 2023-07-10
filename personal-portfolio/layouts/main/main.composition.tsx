import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Typography } from '@showoff/design.typography.typography';
import { Link } from '@showoff/design.navigation.link';
import { Logo } from '@showoff/design.brand.logo';
import { Main } from './main';

export const BasicMain = () => (
  <MemoryRouter>
    <Main
      headerProps={{
        logo: <Link
          to="/"
        >
          <Logo />
        </Link>,
        navLinks: [
          { label: 'Projects', url: '/projects' },
          { label: 'Contact', url: '/contact' },
          { label: 'About me', url: '/about' },
        ]
      }}
      footerProps={{
        leftContent: 'Thanks for visiting.',
        rightContent: `© ${new Date().getFullYear()} Ober. All Rights Reserved.`
      }}
    >
      <Typography variant="h1">Hello World</Typography>
    </Main>
  </MemoryRouter>
);
