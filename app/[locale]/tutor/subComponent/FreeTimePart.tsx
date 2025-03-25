import { IconChevronLeft } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Checkbox,
  Container,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import CheckboxCard from '@/components/CheckboxCard';
import APP_COLORS from '@/theme/colors';

const days = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'];
const time = [
  {
    text: 'Sáng',
    value: '(6h - 12h)',
    image: '/images/morning.svg',
  },
  {
    text: 'Chiều',
    value: '(12h - 18h)',
    image: '/images/affternoon.svg',
  },
  {
    text: 'Tối',
    value: '(18h - 24h)',
    image: '/images/night.svg',
  },
  {
    text: 'Đêm',
    value: '(0h - 6h)',
    image: '/images/late_night.svg',
  },
];

interface FreeTimePartProps {
  onNext: () => void;
  onPrev: () => void;
}

export default function FreeTimePart(props: FreeTimePartProps) {
  const dayBoxes = days.map((day, index) => (
    <Stack
      key={index}
      align="center"
      p="sm"
      style={{
        borderRight: index === days.length - 1 ? 'none' : `1px solid ${APP_COLORS.primaryText}`,
      }}
    >
      <Text>{day}</Text>
      <Checkbox size="md" />
    </Stack>
  ));

  const timeCards = time.map((item) => (
    <GridCol key={item.text} span={3}>
      <CheckboxCard fontSize={20} text={item.text} image={item.image} value={item.value} />
    </GridCol>
  ));

  return (
    <Stack h="calc(100vh - 80px)" px={50} py="xl" gap="xl">
      <Group>
        <ActionIcon variant="white" size="xl" color="black" onClick={props.onPrev}>
          <IconChevronLeft size={48} />
        </ActionIcon>
        <Title flex={1} ta="center" fw={800} order={1}>
          Độ tuổi hiện tại của bạn?
        </Title>
      </Group>
      <Container>
        <Stack gap="xl">
          <Title order={2} ta="center">
            Bạn thường học được vào những ngày nào trong tuần
          </Title>
          <Stack gap={0}>
            <Image src="/images/top_calendar.svg" />
            <Group
              bd={`1px solid ${APP_COLORS.primaryText}`}
              gap={0}
              grow
              justify="space-between"
              style={{ borderBottomRightRadius: 8, borderBottomLeftRadius: 8 }}
            >
              {dayBoxes}
            </Group>
          </Stack>
          <Title order={2} ta="center" mt="sm">
            Bạn thường học được vào những khung giờ nào trong ngày?
          </Title>
          <Grid gutter="xl">{timeCards}</Grid>
        </Stack>
      </Container>
      <Stack align="center" mt="lg">
        <Button h={48} miw={150} size="xl" onClick={props.onNext}>
          Tiếp tục
        </Button>
      </Stack>
    </Stack>
  );
}
