'use client';

import { Button, colorsTuple, createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Nunito, sans-serif',
  colors: {
    mustard_yellow: colorsTuple('#FAB900'),
  },
  primaryColor: 'mustard_yellow',
  autoContrast: true,
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: 'lg',
        fw: 'normal',
        h: 'auto',
        py: 'sm',
        styles: {
          root: {
            lineHeight: '150%',
          },
        },
      },
    }),
  },
});
