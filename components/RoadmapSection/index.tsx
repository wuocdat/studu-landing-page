import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Container, Image, Stack, Text, Title } from '@mantine/core';
import roadmap from '@/public/images/roadmap.svg';

const RoadmapSection = () => {
  const t = useTranslations('roadmap');

  return (
    <Container size="xl">
      <Stack py={80}>
        <Title order={2} ta="center">
          {t('title')}
        </Title>
        <Text variant="subtitle" ta="center" mb="xl">
          {t('subtitle')}
        </Text>
        <Image component={NextImage} src={roadmap} alt="stutu roadmap" />
      </Stack>
    </Container>
  );
};

export default RoadmapSection;
