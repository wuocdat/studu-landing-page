import { useTranslations } from 'next-intl';
import { Group, Stack, Text } from '@mantine/core';
import GuideCard from '@/components/GuideCard';
import tutorImage from '@/public/images/tutor_guide.svg';
import userImage from '@/public/images/user_guide.svg';

const GuidePage = () => {
  const t = useTranslations('guidebook');

  return (
    <Stack align="center" h="100vh" p="xl" pt={100}>
      <Text fz={64} fw={900}>
        {t('title')}
      </Text>
      <Text fz={24} fw={300} fs="italic">
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
