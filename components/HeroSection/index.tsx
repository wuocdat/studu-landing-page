'use client';

import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Box, Button, Image, Stack, Text } from '@mantine/core';
import bgImage from '@/public/images/hero_bg.svg';

const HeroSection = () => {
  const t = useTranslations('HeroSection');

  return (
    <Box pos="relative" pt={80}>
      <Stack pos="absolute" gap="0px" align="center" bottom="50%" left={0} right={0}>
        <Text fw="900" fz={64}>
          {t('title')}
        </Text>
        <Text fw={200} fz={40} fs="italic">
          {t('subTitle')}
        </Text>
        <Button variant="filled" size="xl" mt={40}>
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
