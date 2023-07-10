import React from 'react';
import { Artwork } from '@showoff/personal-portfolio.ui.person.artwork';
import {
  Box, BoxProps, Theme, useMediaQuery,
} from '@mui/material';

export type PictureProps = {
  /**
   * the picture URL to show
   */
  pictureUrl: string
} & BoxProps;

export function Picture({ pictureUrl, sx, ...rest }: PictureProps) {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', width: '100%', ...sx }}
      {...rest}
    >
      <Box sx={{
        position: 'relative',
        top: 0,
        left: smDown ? '13%' : '20%',
      }}>
        <img
          src={pictureUrl}
          style={{
            width: smDown ? 275 : 475,
            height: smDown ? 275 : 500,
          }}
          alt="person avatar"
        />
      </Box>
      <Box sx={{
        position: 'relative',
        top: -30,
        bottom: 0,
        right: 0,
        left: smDown ? -275 : -475,
      }}>
        <Artwork
          height={smDown ? 375 : 620}
          width={smDown ? 350 : 650}
        />
      </Box>
    </Box>
  );
}
