import { useTranslations } from 'next-intl';
import { Badge, Container, Grid, GridCol, Group, Image, Stack, Text, Title } from '@mantine/core';
import APP_COLORS from '@/theme/colors';

export default function PremiumTutoringWorkSection() {
  const t = useTranslations('premium_tutoring');

  const premiumTutoringTask = [
    {
      title: t('how_premium_tutoring_works.1.title'),
      description: t('how_premium_tutoring_works.1.description'),
      image: '/images/premium_tutoring_word_1.svg',
    },
    {
      title: t('how_premium_tutoring_works.2.title'),
      description: t('how_premium_tutoring_works.2.description'),
      image: '/images/premium_tutoring_word_2.svg',
    },
    {
      title: t('how_premium_tutoring_works.3.title'),
      description: t('how_premium_tutoring_works.3.description'),
      image: '/images/premium_tutoring_word_3.svg',
    },
    {
      title: t('how_premium_tutoring_works.4.title'),
      description: t('how_premium_tutoring_works.4.description'),
      image: '/images/premium_tutoring_word_4.svg',
    },
  ];

  const renderTask = premiumTutoringTask.map((task, index) => (
    <GridCol span={6} key={index}>
      <Stack p="md" style={{ borderRadius: 16 }} bg={APP_COLORS.grayBg} h="100%">
        <Group wrap="nowrap" align="flex-start">
          <Badge mt={4} size="xl" circle radius={999} styles={{ label: { fontWeight: 900 } }}>
            {index + 1}
          </Badge>
          <Text fz={26} fw={800} lh={1.23} flex={1}>
            {task.title}
          </Text>
        </Group>
        <Text variant="subtitle" size="md" lh={1.5} mb={20}>
          {task.description}
        </Text>
        <Group justify="flex-end" flex={1} align="flex-end">
          <Image src={task.image} alt={`Step ${index + 1}`} />
        </Group>
      </Stack>
    </GridCol>
  ));

  return (
    <Stack align="center" py={50} gap="xl">
      <Title order={2}>{t('how_premium_tutoring_works.title')}</Title>
      <Container size="lg">
        <Grid gutter="xl">{renderTask}</Grid>
      </Container>
    </Stack>
  );
}
