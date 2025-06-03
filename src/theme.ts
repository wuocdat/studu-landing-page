import {
  Anchor,
  Button,
  Card,
  colorsTuple,
  Container,
  createTheme,
  Mark,
  Paper,
  rem,
  Select,
  Text,
  TextInput,
} from '@mantine/core';
import type { MantineThemeOverride } from '@mantine/core';
import buttonClasses from '@/styles/Button.module.css';
import anchorClasses from '@/styles/Anchor.module.css';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem('200px'),
  xs: rem('300px'),
  sm: rem('400px'),
  md: rem('700px'),
  lg: rem('1000px'),
  xl: rem('1200px'),
  xxl: rem('1400px'),
};

export const theme: MantineThemeOverride = createTheme({
  fontFamily: 'Nunito, sans-serif',
  colors: {
    hot_pink: colorsTuple('#E63B7A'),
  },
  /** Put your mantine theme override here */
  fontSizes: {
    xs: rem('14px'),
    sm: rem('16px'),
    md: rem('18px'),
    lg: rem('20px'),
    xl: rem('24px'),
    '2xl': rem('30px'),
    '3xl': rem('36px'),
    '4xl': rem('48px'),
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
        fontSize: rem(30),
      },
      h4: {
        fontWeight: '800',
        fontSize: rem(24),
      },
      h5: {
        fontSize: rem(20),
      },
    },
  },
  spacing: {
    '3xs': rem('4px'),
    '2xs': rem('8px'),
    xs: rem('10px'),
    sm: rem('12px'),
    md: rem('16px'),
    lg: rem('20px'),
    xl: rem('24px'),
    '2xl': rem('28px'),
    '3xl': rem('32px'),
  },
  primaryColor: 'hot_pink',
  components: {
    /** Put your mantine component override here */
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
    Paper: Paper.extend({
      defaultProps: {
        p: 'md',
        shadow: 'xl',
        radius: 'md',
        withBorder: true,
      },
    }),

    Card: Card.extend({
      defaultProps: {
        p: 'xl',
        shadow: 'xl',
        radius: 'var(--mantine-radius-default)',
        withBorder: true,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: 'right',
      },
      styles: {
        label: {
          marginBottom: 6,
        },
        input: {
          borderColor: '#0A033C',
          borderRadius: 10,
        },
        section: {
          color: '#0A033C',
        },
      },
    }),
    Anchor: Anchor.extend({
      classNames: anchorClasses,
    }),
    Button: Button.extend({
      classNames: buttonClasses,
      defaultProps: {
        size: 'sm',
      },
    }),
    TextInput: TextInput.extend({
      styles: {
        input: {
          borderRadius: 10,
        },
      },
    }),
    Mark: Mark.extend({
      styles: {
        root: {
          backgroundColor: 'transparent',
          fontWeight: 700,
        },
      },
    }),
    Text: Text.extend({
      defaultProps: {
        fw: 400,
      },
    }),
  },
  other: {
    style: 'mantine',
  },
});
