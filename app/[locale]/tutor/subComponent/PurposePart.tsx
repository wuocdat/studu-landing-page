'use client';

import { useState } from 'react';
import {
  Anchor,
  Button,
  CheckboxGroup,
  Container,
  Grid,
  GridCol,
  Stack,
  Title,
} from '@mantine/core';
import CheckboxCard from '@/components/CheckboxCard';

interface PurposePartProps {
  onNext: () => void;
  onSkip: () => void;
}

const purposes = [
  {
    title: 'Giao tiếp và công việc',
    image: '/images/hand-shake.svg',
  },
  {
    title: 'Luyện thi chứng chỉ',
    image: '/images/exam.svg',
  },
  {
    title: 'Ôn thi THPTQG',
    image: '/images/building.svg',
  },
  {
    title: 'Du học',
    image: '/images/earth.svg',
  },
  {
    title: 'Sở thích cá nhân',
    image: '/images/media.svg',
  },
];

export default function PurposePart({ onNext, onSkip }: PurposePartProps) {
  const [value, setValue] = useState<string[]>([]);

  const cards = purposes.map((purpose, index) => {
    return (
      <GridCol span={4} key={index}>
        <CheckboxCard image={purpose.image} text={purpose.title} />
      </GridCol>
    );
  });

  return (
    <Stack h="calc(100vh - 80px)" px={50} py="xl" gap={50}>
      <Title ta="center" fw={800} order={2} fz={30}>
        Mục đích hiện tại của bạn khi học ngôn ngữ là gì?
      </Title>
      <Container flex={1} size="xl">
        <CheckboxGroup value={value} onChange={setValue}>
          <Grid justify="center" gutter="xl">
            {cards}
          </Grid>
        </CheckboxGroup>
      </Container>
      <Stack align="center" gap="xl">
        <Button miw={150} size="md" disabled={value.length === 0} onClick={onNext}>
          Tiếp tục
        </Button>
        <Anchor fz={20} fw={300} fs="italic" underline="always" onClick={onSkip}>
          Đến danh sách gia sư ngay
        </Anchor>
      </Stack>
    </Stack>
  );
}
