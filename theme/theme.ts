'use client';

import { Button, colorsTuple, createTheme, Text } from '@mantine/core';
import textClasses from './Text.module.css';

export const theme = createTheme({
  fontFamily: 'Nunito, sans-serif',
  colors: {
    mustard_yellow: colorsTuple('#FAB900'),
    hot_pink: colorsTuple('#E63B7A'),
  },
  primaryColor: 'hot_pink',
  autoContrast: true,
  defaultRadius: '16px',
  components: {
    Button: Button.extend({
      defaultProps: {
        h: '56px',
        py: '0px',
        px: '16px',
      },
    }),
    Text: Text.extend({
      classNames: textClasses,
      styles: {
        root: {
          color: '#0A033C',
        },
      },
    }),
  },
});
