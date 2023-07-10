import React from 'react';
import { Box } from '@mui/material';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { Breadcrumb, BreadcrumbProps } from '@showoff/design.navigation.breadcrumb';
import { ProjectsList } from '@showoff/personal-portfolio.ui.projects.projects-list';
import { Project } from '@showoff/personal-portfolio.entities.project';

export type ProjectsPageProps = {
  /**
   * Projects to use for the showcase
   * @default sampleProjects from @showoff/personal-portfolio.entities.project
   */
  projects?: Project[]
} & Partial<BreadcrumbProps>;

export function ProjectsPage({ crumbs = [{ crumb: 'projects.' }], projects }: ProjectsPageProps) {
  return (
    <>
      <Breadcrumb
        crumbs={crumbs}
      />
      <Margin
        mt={MarginType.LARGE}
      >
        <Box
          sx={{
            mx: {
              xs: '0px',
              sm: '0px',
              md: '0px',
              lg: 10
            }
          }}
        >
          <ProjectsList
            view='list'
            withFilter
            projectsToUse={projects}
          />
        </Box>
      </Margin>
    </>
  );
}
