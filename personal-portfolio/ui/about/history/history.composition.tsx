import React from 'react';
import { History as HistoryEntity } from "@showoff/personal-portfolio.entities.history";
import { History } from './history';

export const SampleHistory = () => (
  <History
    history={[
      new HistoryEntity({
        designation: 'Software Engineer',
        company: 'ABC Company',
        yearsOfExperience: 3,
        period: '2019 - Present',
      }),
      new HistoryEntity({
        designation: 'Senior Software Engineer',
        company: 'ABC Company',
        yearsOfExperience: 3,
        period: '2019 - Present',
      }),
      new HistoryEntity({
        designation: 'Associate Technical Lead',
        company: 'ABC Company',
        yearsOfExperience: 5,
        period: '2020 - 2021',
      }),
    ]}
  />
);
