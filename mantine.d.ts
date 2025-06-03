import { AnchorVariant, DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

type ExtendedCustomColors = 'hot_pink' | DefaultMantineColor;
type ExtendedAnchorVariant = 'dark' | AnchorVariant;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }

  export interface AnchorProps {
    variant?: ExtendedAnchorVariant;
  }
}
