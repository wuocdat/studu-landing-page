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
      <Text size="sm">{day}</Text>
      <Checkbox size="md" />
    </Stack>
  ));

  const timeCards = time.map((item) => (
    <GridCol key={item.text} span={3}>
      <CheckboxCard text={item.text} image={item.image} value={item.value} />
    </GridCol>
  ));

  return (
    <Stack h="calc(100vh - 80px)" px={50} py="xl" gap="xl">
      <Group>
        <ActionIcon variant="white" size="xl" color="black" onClick={props.onPrev}>
          <IconChevronLeft size={48} />
        </ActionIcon>
        <Title flex={1} ta="center" order={3} fz={30}>
          Thời gian rảnh hiện tại của bạn?
        </Title>
      </Group>
      <Container>
        <Stack gap="xl">
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
          <Grid gutter="xl">{timeCards}</Grid>
        </Stack>
      </Container>
      <Stack align="center" mt="lg">
        <Button miw={150} size="md" onClick={props.onNext}>
          Tiếp tục
        </Button>
      </Stack>
    </Stack>
  );
}
