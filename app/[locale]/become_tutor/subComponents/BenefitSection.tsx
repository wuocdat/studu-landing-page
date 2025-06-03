'use client';

import { useTranslations } from 'next-intl';
import { Button, Container, Grid, Stack, Text, Title } from '@mantine/core';

interface BenefitProps {
  title: string;
  description: string;
}

const Benefit = (props: BenefitProps) => {
  return (
    <Stack gap="xs">
      <Title order={4} fw={800}>
        {props.title}
      </Title>
      <Text size="sm" ta="justify">
        {props.description}
      </Text>
    </Stack>
  );
};

const TutorBenefitSection = () => {
  const tPage = useTranslations('become_tutor_stutu');
  const t = useTranslations('tutor_benefits');

  const benefits = [
    {
      title: t('no_introduction_fee.title'),
      description: t('no_introduction_fee.description'),
    },
    {
      title: t('no_late_or_skipped_payment.title'),
      description: t('no_late_or_skipped_payment.description'),
    },
    {
      title: t('flexible_schedule.title'),
      description: t('flexible_schedule.description'),
    },
    {
      title: t('set_your_own_fee.title'),
      description: t('set_your_own_fee.description'),
    },
    {
      title: t('personal_brand_development.title'),
      description: t('personal_brand_development.description'),
    },
    {
      title: t('broad_market_access.title'),
      description: t('broad_market_access.description'),
    },
  ];

  return (
    <Container pb={50} size="xl">
      <Grid justify="space-around" gutter={50}>
        {benefits.map((benefit, index) => {
          return (
            <Grid.Col key={index} span={5}>
              <Benefit title={benefit.title} description={benefit.description} />
            </Grid.Col>
          );
        })}
      </Grid>
      <Stack mt={50} align="center">
        <Button size="md" style={{ alignSelf: 'center' }}>
          {tPage('steps-section.create-profile-now')}
        </Button>
      </Stack>
    </Container>
  );
};

export default TutorBenefitSection;
