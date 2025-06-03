'use client';

import {
  Accordion,
  Anchor,
  Badge,
  Button,
  Card,
  Chip,
  colorsTuple,
  createTheme,
  List,
  rem,
  Select,
  Text,
  Textarea,
  TextInput,
  Title,
  Tooltip,
} from '@mantine/core';
import APP_COLORS from './colors';
import accordionClasses from './Accordion.module.css';
import anchorClasses from './Anchor.module.css';
import badgeClasses from './Badge.module.css';
import buttonClasses from './Button.module.css';
import cardClasses from './Card.module.css';
import chipClasses from './Chip.module.css';
import selectClasses from './Select.module.css';
import textClasses from './Text.module.css';

export const theme = createTheme({
  fontFamily: 'Nunito, sans-serif',
  colors: {
    mustard_yellow: colorsTuple('#FAB900'),
    hot_pink: colorsTuple('#E63B7A'),
  },
  lineHeights: {
    md: '1.5',
  },
  fontSizes: {
    xs: rem(14),
    sm: rem(18),
    md: rem(20),
    lg: rem(24),
    xl: rem(32),
  },
  headings: {
    sizes: {
      h1: {
        fontWeight: '900',
        fontSize: rem(60),
        lineHeight: '1.479',
      },
      h2: {
        fontWeight: '800',
        fontSize: rem(43),
        lineHeight: '1.3',
      },
      h3: {
        fontWeight: '800',
        fontSize: rem(24),
      },
      h4: {
        fontWeight: '700',
        fontSize: rem(20),
      },
      h5: {
        fontWeight: '800',
        fontSize: rem(16),
      },
      h6: {
        fontWeight: '700',
        fontSize: rem(14),
      },
    },
  },
  primaryColor: 'hot_pink',
  autoContrast: true,
  components: {
    Button: Button.extend({
      defaultProps: {
        h: '44px',
        py: '0px',
        px: '16px',
        radius: 'md',
      },
      classNames: buttonClasses,
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
        // size: 'lg',
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
        color: 'white',
      },
      styles: {
        tooltip: {
          textAlign: 'justify',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          color: APP_COLORS.primaryText,
          fontWeight: 600,
        },
      },
    }),
    Badge: Badge.extend({
      classNames: badgeClasses,
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
      styles: {
        label: {
          fontSize: 20,
        },
        content: {
          fontSize: 20,
        },
      },
    }),
    Anchor: Anchor.extend({
      classNames: anchorClasses,
    }),
    Card: Card.extend({
      classNames: cardClasses,
    }),
    Title: Title.extend({
      styles: {
        root: {
          color: APP_COLORS.primaryText,
        },
      },
    }),
  },
});
