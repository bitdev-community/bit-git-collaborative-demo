import React from 'react';
import { Margin, MarginType } from '@showoff/design.layouts.margin';
import { LinkText } from '@showoff/design.navigation.link-text';
import { Breadcrumb } from '@showoff/design.navigation.breadcrumb';
import { Heading } from '@showoff/design.typography.heading';
import { Typography } from '@showoff/design.typography.typography';
import { Picture } from '@showoff/personal-portfolio.ui.person.picture';
import { Grid, GridProps, Link } from '@mui/material';
import { History } from '@showoff/personal-portfolio.ui.about.history';
import { History as HistoryEntity } from '@showoff/personal-portfolio.entities.history';
import { TextIcon } from '@showoff/design.widgets.text-icon';
import Download from '@mui/icons-material/Download';

export type AboutPageProps = {
  headingText: string;
  body: {
    para1: string;
    para2?: string;
    para3?: string;
  }
  avatarUrl: string;
  cvLink?: string;
  history: HistoryEntity[]
} & GridProps;

export function AboutPage({ headingText, body, avatarUrl, history, cvLink, ...rest }: AboutPageProps) {
  return (
    <>
      <Grid
        container
        spacing={5}
        {...rest}
      >
        <Grid item xs={12}
          md={6}
        >
          <Breadcrumb
            crumbs={[
              { crumb: 'About-me.' },
            ]}
            typographyProps={{
              variant: 'body2',
              fontSize: 18,
              color: 'text.primary',
            }}
          />
          <Margin
            mt={MarginType.MEDIUM}
          >
            <Heading
              sx={{ color: (theme) => theme.palette.primary.main, lineHeight: 1.5, display: 'inline' }}
              value={headingText}
            />
          </Margin>
          <Margin
            mt={MarginType.MEDIUM}
          >
            <Typography
              color="text.secondary"
            >
              {body.para1}
            </Typography>
          </Margin>
          {body.para2 && <Margin mt={MarginType.MEDIUM}>
            <Typography
              color="text.secondary"
            >
              {body.para2}
            </Typography>
          </Margin>}

          {body.para3 && <Margin mt={MarginType.MEDIUM}>
            <Typography
              color="text.secondary"
            >
              {body.para3}
            </Typography>
          </Margin>}

        </Grid>
        <Grid item xs={12}
          md={6}
        >
          <Picture
            pictureUrl={avatarUrl}
          />
        </Grid>
      </Grid >
      <div>
        <Margin mt={MarginType.LARGE}>
          <LinkText
            linkText="Check my projects."
            url="/projects"
          />
        </Margin>
        <Margin mt={MarginType.EXTRA_LARGE}>
          <Heading
            value="A Brief History"
          />
          <Margin
            mt={MarginType.MEDIUM}
          >
            <History
              history={history}
            />
          </Margin>
          {cvLink && <Margin
            mt={MarginType.MEDIUM}
          >
            <Link
              href={cvLink}
              target="_blank"
              underline="none"
            >
              <TextIcon
                icon={<Download />}
                text="Download CV"
              />
            </Link>
          </Margin>}

        </Margin>
      </div>
    </>
  );
}
