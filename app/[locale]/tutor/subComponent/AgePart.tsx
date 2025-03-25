import { Button, Grid, GridCol, Group, RadioGroup, Stack, Title } from '@mantine/core';
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

export default function AgePart() {
  const cards = purposes.map((purpose, index) => {
    return (
      <GridCol span={3} key={index}>
        <RadioCard image={purpose.image} text={purpose.title} age={purpose.age} />
      </GridCol>
    );
  });

  return (
    <Stack h="calc(100vh - 80px)" px={50} py="xl" gap={50}>
      <Group>
        <Title ta="center" fw={800} order={1}>
          Độ tuổi hiện tại của bạn?
        </Title>
      </Group>
      <RadioGroup>
        <Grid gutter="xl">{cards}</Grid>
      </RadioGroup>
      <Stack align="center">
        <Button h={48} miw={150} size="xl">
          Tiếp tục
        </Button>
      </Stack>
    </Stack>
  );
}
