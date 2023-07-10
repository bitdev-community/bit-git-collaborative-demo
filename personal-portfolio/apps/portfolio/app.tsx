import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { SettingsProvider, SettingsConsumer } from '@showoff/personal-portfolio.contexts.settings-context';
import { Main } from '@showoff/personal-portfolio.layouts.main';
import { AboutPage } from '@showoff/personal-portfolio.pages.about-page';
import { IndividualProjectPage } from '@showoff/personal-portfolio.pages.individual-project-page';
import { LandingPage } from '@showoff/personal-portfolio.pages.landing-page';
import { ProjectsPage } from '@showoff/personal-portfolio.pages.projects-page';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { ContactPage } from '@showoff/contact-me.pages.contact-page';
import { darkPortfolioTheme } from '@showoff/personal-portfolio.theme.dark-portfolio-theme';
import { lightPortfolioTheme } from '@showoff/personal-portfolio.theme.light-portfolio-theme';
import { ABOUT_ME, FOOTER_META, HEADER_LINKS, PROJECTS, SOCIAL_LINKS, USER_PROFILE } from '@showoff/personal-portfolio.constants.data';

export function PortfolioApp() {

  const dark = useMemo(() => darkPortfolioTheme(), []);
  const light = useMemo(() => lightPortfolioTheme(), []);

  return (
    <>
      <Helmet>
        <title>My Portfolio</title>
      </Helmet>
      <SettingsProvider>
        <SettingsConsumer>
          {({ theme }) => (
            <ThemeProvider
              theme={theme === 'dark' ? dark : light}
            >
              <Main
                footerProps={FOOTER_META}
                headerProps={HEADER_LINKS}
              >
                <Routes>
                  <Route path="/" element={<LandingPage
                    profile={USER_PROFILE}
                    projects={PROJECTS}
                    socialLinks={SOCIAL_LINKS.links}
                  />} />
                  <Route path="/about" element={<AboutPage
                    {...ABOUT_ME}
                  />} />
                  <Route path="/contact" element={<ContactPage
                    email={USER_PROFILE.email}
                    socialLinks={SOCIAL_LINKS.links}
                  />} />
                  <Route path="/projects" element={<ProjectsPage
                    projects={PROJECTS}
                  />} />
                  <Route path="/projects/:id" element={<IndividualProjectPage
                    projectsToUse={PROJECTS}
                  />} />
                </Routes>
              </Main>
            </ThemeProvider>
          )}
        </SettingsConsumer>
      </SettingsProvider>
    </>
  );
}
