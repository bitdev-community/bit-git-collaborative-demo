import React from 'react';
import { useTheme } from '@mui/material';
import { ArtworkSvg } from './artwork.svg';

export type ArtworkProps = {
  /**
   * The width of the artwork.
   */
  width?: number;
  /**
   * The height of the artwork.
   */
  height?: number;
} & React.SVGProps<SVGSVGElement>;

export function Artwork({ width = 755, height = 726, ...rest }: ArtworkProps) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  return (
    <ArtworkSvg
      height={height}
      width={width}
      strokeColor={primary}
      {...rest}
    />
  );
}
