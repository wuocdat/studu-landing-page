import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Image, Stack, Text } from '@mantine/core';
import roadmap from '@/public/images/roadmap.svg';

const RoadmapSection = () => {
  const t = useTranslations('roadmap');

  return (
    <Stack pt={80}>
      <Text variant="big" ta="center">
        {t('title')}
      </Text>
      <Image component={NextImage} src={roadmap} alt="stutu roadmap" />
    </Stack>
  );
};

export default RoadmapSection;
