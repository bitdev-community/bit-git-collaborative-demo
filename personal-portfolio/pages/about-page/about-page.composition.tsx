import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { History as HistoryEntity } from '@showoff/personal-portfolio.entities.history';
import { AboutPage } from './about-page';

export const SampleAboutPage = () => (
  <MemoryRouter>
    <AboutPage
      avatarUrl='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
      body={{
        para1: "I’ve spent the past 12+ years working across different areas of digital design; front-end development, email design, marketing site pages, app UI/UX, to my current role designing products for mobile platforms.",
        para2: "These days my time is spent researching, designing, prototyping, and coding. I also help designers get started with their careers.",
        para3: "Out of the office you’ll find me dreaming of soccer, playing bass guitar, and petting all the good dogs."
      }}
      headingText="I’m Tobias Sundberg, a Creative web developer UX Engineer and a designOps. Working remotely from sunny Dublin, Ireland"
      history={[
        new HistoryEntity({
          designation: 'Software Engineer',
          company: 'Sample Company',
          yearsOfExperience: 1,
          period: '2020 - 2021',
        }),
      ]}
      cvLink='https://enlear.com'
    />
  </MemoryRouter>
);
