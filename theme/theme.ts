'use client';

import {
  Accordion,
  Badge,
  Button,
  Chip,
  colorsTuple,
  createTheme,
  List,
  Select,
  Text,
  Textarea,
  TextInput,
  Tooltip,
} from '@mantine/core';
import APP_COLORS from './colors';
import accordionClasses from './Accordion.module.css';
import chipClasses from './Chip.module.css';
import selectClasses from './Select.module.css';
import textClasses from './Text.module.css';

export const theme = createTheme({
  fontFamily: 'Nunito, sans-serif',
  colors: {
    mustard_yellow: colorsTuple('#FAB900'),
    hot_pink: colorsTuple('#E63B7A'),
  },
  primaryColor: 'hot_pink',
  autoContrast: true,
  components: {
    Button: Button.extend({
      defaultProps: {
        h: '56px',
        py: '0px',
        px: '16px',
        radius: 16,
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
    Select: Select.extend({
      defaultProps: {
        size: 'lg',
      },
      classNames: selectClasses,
    }),
    TextInput: TextInput.extend({
      styles: {
        label: {
          fontSize: 26,
          marginBottom: 12,
          fontWeight: 700,
        },
        input: {
          fontSize: 26,
          color: APP_COLORS.primaryText,
          borderColor: APP_COLORS.primaryText,
          borderRadius: 10,
        },
      },
      defaultProps: {
        size: 'lg',
      },
    }),
    Textarea: Textarea.extend({
      styles: {
        label: {
          fontSize: 26,
          marginBottom: 12,
          fontWeight: 700,
        },
        input: {
          fontSize: 26,
          color: APP_COLORS.primaryText,
          borderColor: APP_COLORS.primaryText,
          borderRadius: 10,
        },
      },
      defaultProps: {
        size: 'lg',
      },
    }),
    Chip: Chip.extend({
      defaultProps: {
        radius: 'md',
        size: 'md',
      },
      classNames: chipClasses,
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        withArrow: true,
        arrowOffset: 10,
        arrowSize: 10,
        position: 'top-start',
        w: 220,
        multiline: true,
      },
      styles: {
        tooltip: {
          textAlign: 'justify',
        },
      },
    }),
    Badge: Badge.extend({
      defaultProps: {
        size: 'xl',
        radius: 'sm',
      },
    }),
    List: List.extend({
      styles: {
        item: {
          color: APP_COLORS.primaryText,
          fontSize: 16,
        },
      },
    }),
    Accordion: Accordion.extend({
      classNames: accordionClasses,
    }),
  },
});
