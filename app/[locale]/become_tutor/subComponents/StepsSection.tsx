'use client';

import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Box, Button, Grid, Image, Stack, Text, Title } from '@mantine/core';
import step from '@/public/images/step_section.svg';
import CustomStepper from './CustomStepper';

const StepsSection = () => {
  const t = useTranslations('become_tutor_stutu');
  return (
    <Box p={50}>
      <Grid justify="center">
        <Grid.Col span={5}>
          <Stack gap={50}>
            <Stack gap={0}>
              <Title order={1}>{t('steps-section.title')}</Title>
              <Text size="lg" variant="subtitle">
                {t('steps-section.subtitle')}
              </Text>
            </Stack>
            <CustomStepper />
            <Button size="md" style={{ alignSelf: 'flex-start' }}>
              {t('steps-section.create-profile-now')}
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={5}>
          <Image component={NextImage} src={step} alt="Step" fit="contain" />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default StepsSection;
