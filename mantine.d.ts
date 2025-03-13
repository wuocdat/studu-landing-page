import { ButtonVariant, MantineSize, TextVariant, TitleOrder } from '@mantine/core';

type ExtendedTextVariant = TextVariant | 'big';

declare module '@mantine/core' {
  export interface TextProps {
    variant?: ExtendedTextVariant;
  }
}
