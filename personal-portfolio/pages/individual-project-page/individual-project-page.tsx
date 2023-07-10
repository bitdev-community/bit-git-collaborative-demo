import React from 'react';
import { useParams } from 'react-router-dom';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { LinkText } from '@showoff/design.navigation.link-text';
import { Breadcrumb } from '@showoff/design.navigation.breadcrumb';
import { Chip } from '@showoff/design.elements.chip';
import { Heading } from '@showoff/design.typography.heading';
import { Typography } from '@showoff/design.typography.typography';
import { useProject } from '@showoff/personal-portfolio.hooks.use-project';
import { Container, Grid, GridProps, Box, useTheme } from '@mui/material';
import { ComponentShowcase } from '@showoff/design.widgets.component-showcase';
import { IconTextButton } from '@showoff/design.inputs.icon-text-button';
import { Bit } from '@showoff/design.icons.bit';
import { Github } from '@showoff/design.icons.github';
import { LinkIcon } from '@showoff/design.icons.link-icon';
import { ZoomInCardMedia } from '@showoff/design.elements.zoom-in-card-media';
import { Project } from '@showoff/personal-portfolio.entities.project';

type IconButtonProp = {
  onClick: () => void;
}

const GitHubButton = ({ onClick }: IconButtonProp) => (
  <IconTextButton
    icon={<Github />}
    textPrimary="GitHub"
    textSecondary="View on"
    onClick={onClick}
  />
)

const BitButton = ({ onClick }: IconButtonProp) => (
  <IconTextButton
    icon={<Bit />}
    textPrimary="Bit"
    textSecondary="View on"
    onClick={onClick}
  />
)

const LinkButton = ({ onClick }: IconButtonProp) => (
  <IconTextButton
    icon={<LinkIcon />}
    textPrimary="Project"
    textSecondary="View"
    onClick={onClick}
  />
)

export type IndividualProjectPageProps = {
  /**
   * Projects to use for the showcase
   * @default sampleProjects from @showoff/personal-portfolio.entities.project
   */
  projectsToUse?: Project[]
} & GridProps;

export function IndividualProjectPage({ projectsToUse, ...rest }: IndividualProjectPageProps) {
  const { id } = useParams();
  const { project } = useProject({ id: id as string, projects: projectsToUse });
  const theme = useTheme();

  if (!project) {
    return (
      <Box sx={{ display: 'flex', my: 15, justifyContent: 'center' }}>
        <Heading
          value="Project not found"
        />
      </Box>
    );
  }

  const handleGithubClick = () => {
    window.open(project.links.github, '_blank');
  };

  const handlesBitClick = () => {
    window.open(project.links.bit, '_blank');
  };

  const handleLinkClick = () => {
    window.open(project.links.website, '_blank');
  }

  return (
    <>
      <Grid container
        {...rest}
      >
        <Grid item
          xs={4}
          md={4}
        >
          <LinkText
            linkText="Back to Projects"
            url="/projects"
            color="secondary"
          />
        </Grid>
        <Grid item
          xs={4}
          md={4}
        >
          <Heading
            value={project.name}
            sx={{ color: theme.palette.primary.main }}
          />
        </Grid>
        <Grid item
          xs={4}
          md={4}
        />
      </Grid>
      <Container
        maxWidth="md"
      >
        <Margin
          mt={MarginType.LARGE}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ZoomInCardMedia
              media={project.image}
              height={496}
              width={100}
              heightOperator="px"
              widthOperator="%"
            />
          </Box>
        </Margin>
      </Container>
      <Container
        maxWidth="sm"
      >
        <Margin
          mt={MarginType.LARGE}
        >
          <Breadcrumb
            crumbs={[
              { crumb: 'description.' },
            ]}
            typographyProps={{
              color: 'text.primary',
              variant: 'body1',
              fontSize: 28,
              fontWeight: 700
            }}
          />
          <Typography
            fontSize={22}
            sx={{ mt: 3 }}
          >
            {project.description}
          </Typography>
        </Margin>
      </Container>
      <Margin mt={MarginType.LARGE} />
      <Container maxWidth="sm">
        {project.tags.length > 0 && (
          <Margin
            mt={MarginType.MEDIUM}
          >
            <Breadcrumb
              crumbs={[
                { crumb: 'attributes' },
              ]}
              typographyProps={{
                color: 'text.primary',
                variant: 'body1',
                fontSize: 28,
                fontWeight: 700
              }}
            />
            <Box sx={{
              display: 'flex', gap: 1.3, mt: 3, flexWrap: 'wrap',
            }}>
              {project.tags.map((tag) => (
                <Chip
                  key={tag}
                  content={tag}
                />
              ))}
            </Box>
          </Margin>
        )}
        <Margin
          mt={MarginType.LARGE}
        >
          <div style={{
            display: 'flex',
            gap: 20,
          }}>
            <GitHubButton
              onClick={handleGithubClick}
            />
            {project.type === 'component-based' && <BitButton
              onClick={handlesBitClick}
            />}
            <LinkButton
              onClick={handleLinkClick}
            />
          </div>
        </Margin>
      </Container>
      {(project.type === 'component-based' && !!project.componentId) && (
        <Margin
          mt={MarginType.LARGE}
        >
          <Grid container>
            <Grid item
              xs={12}
              md={12}
            >
              <ComponentShowcase
                componentId={project.componentId}
                style={{
                  color: theme.palette.text.primary,
                  fontFamily: theme.typography.fontFamily
                }}
              />
            </Grid>
          </Grid>
        </Margin>
      )}
    </>
  );
}
