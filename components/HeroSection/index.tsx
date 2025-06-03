'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Box, Button, Image, Stack, Text, Title } from '@mantine/core';
import bgImage from '@/public/images/hero_bg.svg';

const HeroSection = () => {
  const t = useTranslations('HeroSection');

  return (
    <Box pos="relative">
      <Stack pos="absolute" gap="0px" align="center" bottom="65%" left={0} right={0}>
        <Title order={1}>{t('title')}</Title>
        <Text variant="subtitle">{t('subTitle')}</Text>
        <Button component={Link} href="/welcome" variant="filled" mt={40} miw={164} size="md">
          {t('startNow')}
        </Button>
      </Stack>
      <Image
        component={NextImage}
        src={bgImage}
        fit="contain"
        alt="Background"
        sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </Box>
  );
};

export default HeroSection;
