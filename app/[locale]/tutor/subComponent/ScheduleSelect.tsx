import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Box, Flex, Group, Image, Popover, Stack, Text, Title } from '@mantine/core';
import APP_COLORS from '@/theme/colors';

const hourOptions = [
  { value: '0-6', iconPath: '/images/06hour.svg' },
  { value: '6-12', iconPath: '/images/612hour.svg' },
  { value: '12-18', iconPath: '/images/1218hour.svg' },
  { value: '18-0', iconPath: '/images/1824hour.svg' },
];

const dayOptions = ['Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'CN'];

export default function ScheduleSelect() {
  const [selectedHours, setSelectedHours] = useState<string[]>([]);
  const [selectedDay, setSelectedDay] = useState<string[]>([]);

  const hourItems = hourOptions.map((item) => (
    <Stack
      key={item.value}
      miw={70}
      align="center"
      style={{
        border: `1px solid ${selectedHours.includes(item.value) ? APP_COLORS.primary : '#ccc'}`,
        boxShadow: selectedHours.includes(item.value) ? '0px 0px 10px rgba(0, 0, 0, 0.1)' : 'none',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
      }}
      onClick={() =>
        setSelectedHours((prev) =>
          prev.includes(item.value)
            ? prev.filter((day) => day !== item.value)
            : [...prev, item.value]
        )
      }
    >
      <Box>
        <Image h={28} src={item.iconPath} fit="contain" />
      </Box>
      <Text
        c={selectedHours.includes(item.value) ? APP_COLORS.primary : APP_COLORS.primaryText}
        fw={selectedHours.includes(item.value) ? 800 : 300}
        size="xs"
      >
        {item.value}
      </Text>
    </Stack>
  ));

  const dayItems = dayOptions.map((item) => (
    <Box
      px="md"
      key={item}
      style={{
        border: `1px solid ${selectedDay.includes(item) ? APP_COLORS.primary : '#ccc'}`,
        boxShadow: selectedDay.includes(item) ? '0px 0px 10px rgba(0, 0, 0, 0.1)' : 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={() =>
        setSelectedDay((prev) =>
          prev.includes(item) ? prev.filter((day) => day !== item) : [...prev, item]
        )
      }
    >
      <Text
        c={selectedDay.includes(item) ? APP_COLORS.primary : APP_COLORS.primaryText}
        fw={selectedDay.includes(item) ? 800 : 300}
        size="xs"
      >
        {item}
      </Text>
    </Box>
  ));

  return (
    <Popover position="bottom-start" shadow="md">
      <Popover.Target>
        <Box
          style={{
            border: `1px solid ${APP_COLORS.primaryText}`,
            borderRadius: 8,
            padding: '12px 18px',
          }}
        >
          <Stack gap="xs">
            <Text size="xs">Bạn muốn xếp lịch vào</Text>
            <Group>
              <Title order={5}>Thời gian</Title>
              <Flex flex={1} justify="flex-end">
                <IconChevronDown color="black" />
              </Flex>
            </Group>
          </Stack>
        </Box>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack>
          <Stack>
            <Title order={5}>Giờ học</Title>
            <Group>{hourItems}</Group>
          </Stack>
          <Stack>
            <Title order={5}>Thứ</Title>
            <Group wrap="wrap">{dayItems}</Group>
          </Stack>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
