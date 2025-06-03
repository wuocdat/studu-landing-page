'use client';

import { IconChevronDown } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { Box, Button, Container, Grid, Image, Select, Stack, TextInput } from '@mantine/core';
import BadgeSelect from './BadgeSelect';
import FeeConfig from './FeeConfig';
import ScheduleSelect from './ScheduleSelect';
import SkillSelect from './SkillSelect';

const TutorFilterSection = () => {
  const t = useTranslations('find_tutors');

  return (
    <Container size="xl">
      <Stack align="center" py={50} gap={40}>
        <Select
          label={t('languageSelection')}
          data={['Tất Cả', 'Tiếng Anh', 'Tiếng Việt', 'Tiếng Pháp']}
          defaultValue="Tất Cả"
          rightSection={<IconChevronDown size={18} color="black" />}
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
              fontSize: 18,
              fontWeight: 400,
            },
          }}
        />
        <Box style={{ alignSelf: 'stretch' }}>
          <Grid gutter="xl">
            <Grid.Col span={3}>
              <Select
                label={t('subject')}
                data={['IELTS', 'TOEIC', 'TOEFL', 'Tiếng Anh giao tiếp']}
                defaultValue="IELTS"
                rightSection={<IconChevronDown color="black" />}
                checkIconPosition="right"
                mb={32}
                variant="border"
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <SkillSelect />
            </Grid.Col>
            <Grid.Col span={3}>
              <FeeConfig />
            </Grid.Col>
            <Grid.Col span={3}>
              <ScheduleSelect />
            </Grid.Col>
            <Grid.Col span={3}>
              <BadgeSelect />
            </Grid.Col>
            <Grid.Col span={2} offset={3}>
              <Select
                size="lg"
                placeholder="Sắp xếp theo"
                data={['Theo độ phổ biến', 'Theo thời gian', 'Theo giá tiền']}
                rightSection={<IconChevronDown color="black" />}
                styles={{
                  input: {
                    fontSize: 16,
                  },
                  option: {
                    fontSize: 16,
                    padding: '8px 12px',
                  },
                }}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                placeholder="Tìm theo tên hoặc từ khoá"
                rightSection={<Image src="/images/search.svg" />}
                styles={{
                  input: {
                    fontSize: 16,
                  },
                }}
              />
            </Grid.Col>
          </Grid>
        </Box>
        <Stack align="end" style={{ alignSelf: 'stretch' }}>
          <Button
            variant="transparent"
            fw={300}
            fs="italic"
            td="underline"
            c="gray"
            style={{
              textDecorationThickness: 0.5,
            }}
          >
            {t('clear_filter')}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default TutorFilterSection;
