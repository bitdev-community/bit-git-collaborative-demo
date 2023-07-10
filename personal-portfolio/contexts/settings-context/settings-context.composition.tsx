import React from 'react';
import { Button } from '@showoff/design.inputs.button';
import { darkTheme } from '@showoff/design.theme.dark-theme';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { Heading } from '@showoff/design.typography.heading';
import { SettingsProvider, SettingsConsumer } from './settings-context';

export const BasicSettingsContext = () => (
  <SettingsProvider>
    <SettingsConsumer>
      {({ theme, toggleTheme }) => (
        <ThemeProvider
          theme={theme === 'dark' ? darkTheme() : lightTheme()}
        >
          <Heading
            value="Settings Context"
          />
          <Button
            value="Toggle Theme"
            onClick={toggleTheme}
          />
        </ThemeProvider>
      )}
    </SettingsConsumer>
  </SettingsProvider>
);
