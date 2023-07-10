import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ProjectsList } from './projects-list';

export const BasicProjectsList = () => (
  <MemoryRouter>
    <ProjectsList />
  </MemoryRouter>
);

