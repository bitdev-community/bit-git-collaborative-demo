import React from 'react';
import { Footer, FooterProps } from '@showoff/design.navigation.footer';

export type AppfooterProps = {
} & FooterProps;

export function Appfooter(props: AppfooterProps) {
  return (
    <Footer
      {...props}
    />
  );
}
