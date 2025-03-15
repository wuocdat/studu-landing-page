'use client';

import { IconChevronDown } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import {
  Box,
  Button,
  Chip,
  Container,
  Flex,
  Grid,
  Select,
  Stack,
  Text,
  Textarea,
  Tooltip,
} from '@mantine/core';
import APP_COLORS from '@/theme/colors';

const TutorFilterSection = () => {
  const t = useTranslations('find_tutors');

  return (
    <Container size="xl">
      <Stack align="center" py={50} gap={40}>
        <Select
          label={t('languageSelection')}
          data={['Tất Cả', 'Tiếng Anh', 'Tiếng Việt', 'Tiếng Pháp']}
          defaultValue="Tất Cả"
          size="lg"
          rightSectionWidth={0}
          wrapperProps={{
            styles: {
              root: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 24,
              },
            },
          }}
          labelProps={{
            style: {
              marginBottom: 0,
            },
          }}
        />{' '}
        <Box style={{ alignSelf: 'stretch' }}>
          <Grid>
            <Grid.Col span={4}>
              <Select
                label={t('subject')}
                data={['IELTS', 'TOEIC', 'TOEFL', 'Tiếng Anh giao tiếp']}
                defaultValue="IELTS"
                rightSection={<IconChevronDown />}
                labelProps={{
                  style: {
                    width: '100%',
                    textAlign: 'center',
                  },
                }}
                mb={32}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Select
                label={t('hourlyRate')}
                data={['Dưới 200,000', '200,000 - 750,000', 'Trên 750,000']}
                defaultValue="200,000 - 750,000"
                rightSection={<IconChevronDown />}
                labelProps={{
                  style: {
                    width: '100%',
                    textAlign: 'center',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Select
                label={t('freeTime')}
                data={['Tất cả mọi lúc', 'Sáng', 'Chiều', 'Tối']}
                defaultValue="Tất cả mọi lúc"
                rightSection={<IconChevronDown />}
                labelProps={{
                  style: {
                    width: '100%',
                    textAlign: 'center',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Textarea
                label={t('skillsToImprove')}
                rows={4}
                labelProps={{
                  style: {
                    width: '100%',
                    textAlign: 'center',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Stack h="100%">
                <Text ta="center" fz={26} fw={700}>
                  {t('tutorBadge')}
                </Text>
                <Flex
                  flex={1}
                  p="sm"
                  gap="sm"
                  style={{
                    border: `1px solid ${APP_COLORS.primaryText}`,
                    borderRadius: 10,
                  }}
                >
                  <Tooltip label={t('STUTUtor_badge')} refProp="rootRef">
                    <Chip defaultChecked>STUTUtor</Chip>
                  </Tooltip>

                  <Tooltip label={t('professional_badge')} refProp="rootRef">
                    <Chip defaultChecked>Professional</Chip>
                  </Tooltip>
                </Flex>
              </Stack>
            </Grid.Col>
          </Grid>
        </Box>
        <Stack align="end" style={{ alignSelf: 'stretch' }}>
          <Button
            variant="transparent"
            size="xl"
            fw={300}
            fs="italic"
            td="underline"
            c={APP_COLORS.primaryText}
          >
            {t('clear_filter')}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default TutorFilterSection;
