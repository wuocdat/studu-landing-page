import { use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Group, Stack, Text, Title } from '@mantine/core';
import GuideCard from '@/components/GuideCard';
import tutorImage from '@/public/images/tutor_guide.svg';
import userImage from '@/public/images/user_guide.svg';

const GuidePage = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use<{ locale: string }>(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('guidebook');

  return (
    <Stack align="center" h="100vh" p="xl" pt={100}>
      <Title order={1}>{t('title')}</Title>
      <Text fz={24} variant="subtitle">
        {t('subtitle')}
      </Text>
      <Group gap="xl" mt={50}>
        <GuideCard image={tutorImage} text={t('tutor_guide')} href="/tutor_guide" />
        <GuideCard image={userImage} text={t('student_guide')} href="/student_guide" />
      </Group>
    </Stack>
  );
};

export default GuidePage;
