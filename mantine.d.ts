import { ButtonVariant, MantineSize, TextVariant, TitleOrder } from '@mantine/core';

type ExtendedTextVariant = TextVariant | 'big';
type ExtendedButtonVariant = ButtonVariant | 'hover';

declare module '@mantine/core' {
  export interface TextProps {
    variant?: ExtendedTextVariant;
  }

  export interface ButtonProps {
    variant?: ExtendedButtonVariant;
  }
}
