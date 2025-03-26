'use client';

import { IconChevronLeft } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Group,
  Image,
  NumberFormatter,
  RangeSlider,
  Stack,
  Title,
} from '@mantine/core';

const valueLabelFormatter = (value: number) => {
  return (
    <NumberFormatter
      suffix=" VND"
      value={value * 10000}
      thousandSeparator="."
      decimalSeparator=","
    />
  );
};

interface AmountPartProps {
  onFinish: () => void;
  onPrev: () => void;
}

export default function AmountPart(props: AmountPartProps) {
  return (
    <Stack px={50} py="xl" gap={50}>
      <Group>
        <ActionIcon variant="white" size="xl" color="black" onClick={props.onPrev}>
          <IconChevronLeft size={48} />
        </ActionIcon>
        <Title flex={1} ta="center" fw={800} order={1}>
          Học phí bạn có thể chi trả cho một giờ học?
        </Title>
      </Group>
      <Group gap={50} justify="center" p={50}>
        <Image src="/images/bear_money.svg" />
        <RangeSlider
          size="xl"
          maw={1000}
          flex={1}
          defaultValue={[5, 40]}
          marks={[
            { value: 5, label: '50.000 VND' },
            { value: 40, label: '400.000 VND' },
            { value: 65, label: '650.000 VND' },
            { value: 100, label: '1.000.000+ VND' },
          ]}
          label={valueLabelFormatter}
          labelAlwaysOn
        />
      </Group>
      <Stack align="center">
        <Button h={48} miw={150} size="xl" onClick={props.onFinish}>
          Hoàn thành
        </Button>
      </Stack>
    </Stack>
  );
}
