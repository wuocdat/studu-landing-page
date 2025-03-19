import React from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Box, Button, Image, Stack } from '@mantine/core';
import CenterIntroSection from '@/components/CenterIntroSection';
import aboutImage from '@/public/images/about_bg.svg';

const AboutUsPage: React.FC = () => {
  const t = useTranslations('about_us');

  return (
    <Stack>
      <Box pos="relative">
        <Image
          component={NextImage}
          src={aboutImage}
          alt="aboutUs"
          fit="contain"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <Stack pos="absolute" bottom="65%" right="8%" align="center" gap="xl">
          <CenterIntroSection
            title={t.rich('title', {
              br: (chunks) => (
                <>
                  <br />
                  {chunks}
                </>
              ),
            })}
            subtitle={t('subtitle')}
            skipImage
          />
          <Button size="xl">{t('join_with_us')}</Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AboutUsPage;
