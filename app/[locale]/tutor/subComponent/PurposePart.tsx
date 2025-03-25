import { Anchor, Box, Button, CheckboxGroup, Group, Stack, Title } from '@mantine/core';
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
  const cards = purposes.map((purpose, index) => {
    return (
      <Box w="28vw" key={index}>
        <CheckboxCard image={purpose.image} text={purpose.title} />
      </Box>
    );
  });

  return (
    <Stack h="calc(100vh - 80px)" px={50} py="xl" gap={50}>
      <Title ta="center" fw={800} order={1}>
        Mục đích hiện tại của bạn khi học ngôn ngữ là gì?
      </Title>
      <Box flex={1} style={{ overflow: 'hidden' }}>
        <CheckboxGroup>
          <Group justify="center" gap="xl">
            {cards}
          </Group>
        </CheckboxGroup>
      </Box>
      <Stack align="center">
        <Button h={48} miw={150} size="xl" onClick={onNext}>
          Tiếp tục
        </Button>
        <Anchor fz={20} fw={300} fs="italic" underline="always" onClick={onSkip}>
          Đến danh sách gia sư ngay
        </Anchor>
      </Stack>
    </Stack>
  );
}
