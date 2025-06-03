'use client';

import { useState } from 'react';
import { IconChevronLeft } from '@tabler/icons-react';
import { ActionIcon, Box, Button, Group, RadioGroup, Stack, Title } from '@mantine/core';
import RadioCard from '@/components/RadioCard';

const purposes = [
  {
    title: 'Học sinh cấp 2 & nhỏ hơn',
    image: '/images/exam.svg',
    age: '(<15 tuổi)',
  },
  {
    title: 'Học sinh cấp 3',
    image: '/images/calendar.svg',
    age: '(15-18 tuổi)',
  },
  {
    title: 'Sinh viên',
    image: '/images/dream.svg',
    age: '(19-22 tuổi)',
  },
  {
    title: 'Người đi làm',
    image: '/images/fin.svg',
    age: '(>22 tuổi)',
  },
];

interface AgePartProps {
  onNext: () => void;
  onBack: () => void;
}

export default function AgePart(props: AgePartProps) {
  const [value, setValue] = useState<string | null>(null);

  const cards = purposes.map((purpose, index) => {
    return (
      <Box key={index} w={280}>
        <RadioCard image={purpose.image} text={purpose.title} age={purpose.age} />
      </Box>
    );
  });

  return (
    <Stack px={50} py="xl" gap={50}>
      <Group>
        <ActionIcon variant="white" size="xl" color="black" onClick={props.onBack}>
          <IconChevronLeft size={48} />
        </ActionIcon>
        <Title flex={1} ta="center" fw={800} fz={30} order={3}>
          Độ tuổi hiện tại của bạn?
        </Title>
      </Group>
      <RadioGroup value={value} onChange={setValue}>
        <Group justify="center" align="stretch" gap="xl">
          {cards}
        </Group>
      </RadioGroup>
      <Stack align="center">
        <Button h={48} miw={150} size="md" disabled={!value} onClick={props.onNext}>
          Tiếp tục
        </Button>
      </Stack>
    </Stack>
  );
}
