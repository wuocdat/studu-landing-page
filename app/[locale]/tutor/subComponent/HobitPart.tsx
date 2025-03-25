'use client';

import { useState } from 'react';
import { IconChevronLeft } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Card,
  Checkbox,
  Grid,
  GridCol,
  Group,
  Image,
  Radio,
  RadioCard,
  RadioGroup,
  RadioIndicator,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import classes from '@/styles/RaidoCard.module.css';
import APP_COLORS from '@/theme/colors';

const languageData = [
  {
    name: 'Tiếng Anh',
    image: '/images/england_country.svg',
  },
  {
    name: 'Tiếng Trung',
    image: '/images/china_country.svg',
  },
  {
    name: 'Ngôn ngữ khác',
    image: '/images/other_country.svg',
  },
];

const subjectData = [
  'IELTS',
  'TOEIC',
  'SAT',
  'VSTEP',
  'Tiếng Anh THPTQG',
  'Tiếng Anh giao tiếp',
  'Tiếng Anh trẻ em',
  'Tiếng Anh trong kinh doanh',
  'Khác',
];

const levelData = [
  'Người mới bắt đầu',
  'Dưới trung cấp',
  'Trung cấp',
  'Trên trung cấp',
  'Nâng cao',
];

interface HobbitPartProps {
  onNext: () => void;
  onBack: () => void;
}

export default function HabitPart(props: HobbitPartProps) {
  const [value, setValue] = useState<string | null>(null);

  const cards = languageData.map((item) => (
    <RadioCard className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="center">
        <RadioIndicator size="lg" />
        <Group flex={1}>
          <Text flex={1}>{item.name}</Text>
          <Image src={item.image} />
        </Group>
      </Group>
    </RadioCard>
  ));

  const subjectList = subjectData.map((item) => (
    <Checkbox
      key={item}
      size="lg"
      labelPosition="left"
      label={item}
      value={item}
      styles={{
        label: {
          fontSize: 20,
        },
        body: {
          gap: 32,
        },
        labelWrapper: {
          flex: 1,
          borderBottom: `1px solid ${APP_COLORS.primaryText}`,
        },
      }}
    />
  ));

  const levelList = levelData.map((item) => (
    <Radio
      key={item}
      size="lg"
      labelPosition="left"
      label={item}
      value={item}
      styles={{
        label: {
          fontSize: 20,
        },
        body: {
          gap: 32,
        },
        labelWrapper: {
          flex: 1,
          borderBottom: `1px solid ${APP_COLORS.primaryText}`,
        },
      }}
    />
  ));

  return (
    <Stack h="calc(100vh - 80px)" px={50} py="xl" gap={50}>
      <Group>
        <ActionIcon variant="white" size="xl" color="black" onClick={props.onBack}>
          <IconChevronLeft size={48} />
        </ActionIcon>
        <Title flex={1} ta="center" fw={800} order={1}>
          Chia sẻ một chút về nhu cầu học của bạn nhé
        </Title>
      </Group>
      <Grid justify="center" gutter="xl">
        <GridCol span={4}>
          <Stack>
            <Title ta="center" order={2}>
              Ngôn ngữ
            </Title>
            <RadioGroup value={value} onChange={setValue}>
              <Stack gap="xs">{cards}</Stack>
            </RadioGroup>
          </Stack>
        </GridCol>
        <GridCol span={4}>
          <Stack>
            <Title ta="center" order={2}>
              Môn học
            </Title>
            <Card withBorder radius="md" p="md" pr="lg">
              <Checkbox.Group>
                <Stack>{subjectList}</Stack>
              </Checkbox.Group>
            </Card>
          </Stack>
        </GridCol>
        <GridCol span={4}>
          <Stack>
            <Title ta="center" order={2}>
              Trình độ hiện tại của bạn
            </Title>
            <Card withBorder radius="md" p="md" pr="lg">
              <Radio.Group>
                <Stack>{levelList}</Stack>
              </Radio.Group>
            </Card>
          </Stack>
        </GridCol>
      </Grid>
      <Stack align="center">
        <Button h={48} miw={150} size="xl" onClick={props.onNext}>
          Tiếp tục
        </Button>
      </Stack>
    </Stack>
  );
}
