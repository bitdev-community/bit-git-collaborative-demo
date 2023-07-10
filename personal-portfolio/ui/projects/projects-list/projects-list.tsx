import React, { useMemo, useState } from 'react';
import { Box, Grid, GridProps, Switch, Theme, useMediaQuery } from '@mui/material';
import { Link } from '@showoff/design.navigation.link';
import { useProjects } from '@showoff/personal-portfolio.hooks.use-projects';
import { Card } from '@showoff/design.elements.card';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { Typography } from '@showoff/design.typography.typography';
import { Project } from '@showoff/personal-portfolio.entities.project';

export type ProjectsListProps = {
  /**
   * the maximum number of projects to render
   * @default undefined
   */
  max?: number | undefined;

  /**
   * the view to render the projects in
   * @default 'grid'
   */
  view?: 'grid' | 'list';

  /**
   * whether to show a filter to help filter the projects to only show component-based projects
   * @default false
   */
  withFilter?: boolean;

  /**
   * projects to use
   * @default sampleProjects from @showoff/personal-portfolio.entities.project
   */
  projectsToUse?: Project[];
} & GridProps;

type ProjectFilterProps = {
  /**
   * callback to handle the toggle of the filter
   * @param newState the new state of the filter
   */
  onCheckToggle: (newState: boolean) => void;
}

function ProjectFilter({ onCheckToggle }: ProjectFilterProps) {
  const [checked, setChecked] = useState(false);

  const handleCheckToggle = () => {
    setChecked(!checked);
    onCheckToggle(!checked);
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Switch size='small'
        checked={checked}
        onChange={handleCheckToggle}
      />
      <Typography variant="body2">
        Show only component-based
      </Typography>
    </Box>
  )
}

export function ProjectsList({ max, view = 'grid', withFilter = false, projectsToUse, ...rest }: ProjectsListProps) {
  const [componentOnly, setComponentOnly] = useState(false);
  const { projects } = useProjects(max, componentOnly ? 'component-based' : undefined, projectsToUse);
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const forceMaxBreakpints = view === 'list' && !smDown;

  const cardView = useMemo(() => {
    if (smDown) {
      return 'compact';
    }
    return view === 'grid' ? 'compact' : 'detailed';
  }, [smDown, view]);

  const handleComponentOnlyToggle = (isComponentOnly: boolean) => {
    setComponentOnly(isComponentOnly);
  }

  return (
    <>
      {withFilter && (
        <>
          <ProjectFilter
            onCheckToggle={handleComponentOnlyToggle}
          />
          <Margin
            mt={MarginType.MEDIUM}
          />
        </>
      )}
      <Grid
        container
        spacing={view === 'list' ? 12 : 3}
        {...rest}
      >
        {projects.map((project) => (
          <Grid
            item
            xs={12}
            sm={forceMaxBreakpints ? 12 : 6}
            md={forceMaxBreakpints ? 12 : 4}
            key={project.id}
          >
            <Link
              to={`/projects/${project.id}`}
            >
              <Card
                title={project.name}
                bannerImage={project.image}
                subtitle={project.description}
                tags={project.tags}
                view={cardView}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
