import React from 'react';
import { Routes, MemoryRouter, Route } from 'react-router-dom';
import { IndividualProjectPage } from './individual-project-page';

export const SampleIndividualProjectPage = () => (
  <MemoryRouter
    initialEntries={
      [
        { pathname: '/projects/1' },
      ]
    }
    initialIndex={0}
  >
    <Routes>
      <Route
        path="/projects/:id"
        element={
          <IndividualProjectPage />
        }
      />
    </Routes>
  </MemoryRouter>
);
