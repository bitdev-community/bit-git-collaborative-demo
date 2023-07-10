import React, { ReactNode } from 'react';
import { Box, Container, styled } from '@mui/material';
import { Appbar, AppbarProps } from '@showoff/personal-portfolio.navigation.appbar';
import { Appfooter, AppfooterProps } from '@showoff/personal-portfolio.navigation.appfooter';

export type MainProps = {
  /**
   * the content to be rendered inside the layout.
   */
  children?: ReactNode;

  /**
   * the header props to use
   */
  headerProps: AppbarProps

  /**
   * the footer props to use
   */
  footerProps: AppfooterProps
};

/**
 * In MUI it is recommend to use a styled component instead of a class component when dealing with
 * large styling. The `MainRoot` component contains the styling needed for the main layout.
 */
const MainRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 68,
}));

export function Main({ children, footerProps, headerProps }: MainProps) {
  return (
    <MainRoot>
      <Appbar
        {...headerProps}
      />
      <Container
        maxWidth="lg"
        sx={{ paddingTop: '68px', height: '100%' }}
      >
        <main
          style={{
            flexGrow: 1,
          }}
        >
          {children}
        </main>
      </Container>
      <div style={{ marginTop: 'auto' }}>
        <Container
          maxWidth="lg"
        >
          <Box sx={{ pt: 10 }}>
            <Appfooter
              {...footerProps}
            />
          </Box>
        </Container>
      </div>
    </MainRoot>
  );
}
