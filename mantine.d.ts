import { AnchorVariant, ButtonVariant, MantineSize, TextVariant, TitleOrder } from '@mantine/core';

type ExtendedTextVariant = TextVariant | 'big' | 'subtitle';
type ExtendedButtonVariant = ButtonVariant | 'hover';
type ExtendedAnchorVariant = AnchorVariant | 'small';
type ExtendedSelectVariant = SelectVariant | 'border';

declare module '@mantine/core' {
  export interface TextProps {
    variant?: ExtendedTextVariant;
  }

  export interface ButtonProps {
    variant?: ExtendedButtonVariant;
  }

  export interface AnchorProps {
    variant?: ExtendedAnchorVariant;
  }

  export interface SelectProps {
    variant?: ExtendedSelectVariant;
  }
}
