import { useTranslations } from 'next-intl';
import { Box, Button, Center, Image } from '@mantine/core';
import PacmanIcon from './icons/PacmanIcon';

interface FooterImageBackgroundProps {
  variant?: '1' | '2';
}

export default function FooterImageBackground({ variant = '1' }: FooterImageBackgroundProps) {
  const tShared = useTranslations('shared_text');

  return (
    <Box pos="relative">
      {variant === '1' && (
        <Center pos="absolute" top={50} left={0} right={0}>
          <Button leftSection={<PacmanIcon />}>{tShared('try_now')}</Button>
        </Center>
      )}
      <Image
        src={variant === '1' ? '/images/footer_bg_1.svg' : '/images/footer_background_2.svg'}
      />
    </Box>
  );
}
