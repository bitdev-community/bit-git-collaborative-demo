import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ProjectsPage } from './projects-page';

export const SampleProjectsPage = () => (
  <MemoryRouter>
    <ProjectsPage />
  </MemoryRouter>
);
