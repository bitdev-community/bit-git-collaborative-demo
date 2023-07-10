import React from 'react';
import { Header, HeaderProps } from '@showoff/design.navigation.header';
import { ThemeToggle } from '@showoff/design.theme.theme-toggle';
import { SettingsConsumer } from '@showoff/personal-portfolio.contexts.settings-context';

export type AppbarProps = {
} & HeaderProps;

export function Appbar({ logo, navLinks, ...rest }: AppbarProps) {
  return (
    <SettingsConsumer>
      {({ theme, toggleTheme }) => (
        <Header
          {...rest}
          logo={logo}
          navLinks={[
            { label: 'Projects', url: '/projects' },
            { label: 'Contact', url: '/contact' },
            { label: 'About me', url: '/about' },
          ]}
          themeToggle={<ThemeToggle
            isDark={theme === 'dark'}
            onClick={() => toggleTheme()}
            size="small"
          />}
        />
      )}
    </SettingsConsumer>
  );
}
