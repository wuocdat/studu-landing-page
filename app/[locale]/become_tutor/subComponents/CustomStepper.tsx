import { useTranslations } from 'next-intl';
import { Box, Flex, Grid, Group, Stack, Text, Title } from '@mantine/core';
import APP_COLORS from '@/theme/colors';

const CustomStepper = () => {
  const t = useTranslations('become_tutor_stutu.steps-section');

  return (
    <Grid gutter={0}>
      {/* first step */}
      <Grid.Col span={4}>
        <Stack gap={6}>
          <Group gap={0}>
            <Flex
              w={70}
              h={70}
              justify="center"
              align="center"
              bg={APP_COLORS.primary}
              style={{ borderRadius: 16 }}
            >
              <Text fz={40} fw={800} c="white">
                1
              </Text>
            </Flex>
            <Box flex={1} h={4} bg="#CECECE" />
          </Group>
          <Title order={4}>{t('1.title')}</Title>
          <Text size="sm" lh="1">
            {t('1.description')}
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack gap={6}>
          <Group gap={0}>
            <Flex
              w={70}
              h={70}
              justify="center"
              align="center"
              bg="#CECECE"
              style={{ borderRadius: 16 }}
            >
              <Text fz={40} fw={800}>
                2
              </Text>
            </Flex>
            <Box flex={1} h={4} bg="#CECECE" />
          </Group>
          <Title order={4}>{t('2.title')}</Title>
          <Text size="sm" lh="1">
            {t('2.description')}
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack gap={6}>
          <Group gap={0}>
            <Flex
              w={70}
              h={70}
              justify="center"
              align="center"
              bg="#CECECE"
              style={{ borderRadius: 16 }}
            >
              <Text fz={40} fw={800}>
                3
              </Text>
            </Flex>
          </Group>
          <Title order={4}>{t('3.title')}</Title>
          <Text size="sm" lh="1">
            {t('3.description')}
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default CustomStepper;
