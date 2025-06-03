import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import {
  Box,
  Flex,
  Group,
  NumberFormatter,
  Popover,
  RangeSlider,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import APP_COLORS from '@/theme/colors';

export default function FeeConfig() {
  const [value, setValue] = useState<[number, number]>([5, 40]);

  return (
    <Popover width="target" position="bottom" shadow="md">
      <Popover.Target>
        <Box
          style={{
            border: `1px solid ${APP_COLORS.primaryText}`,
            borderRadius: 8,
            padding: '12px 18px',
          }}
        >
          <Stack gap="xs">
            <Text size="xs">Bạn sẵn sàng chi trả</Text>
            <Group>
              <Title order={5}>Học phí theo giờ(VND)</Title>

              <Flex flex={1} justify="flex-end">
                <IconChevronDown color="black" />
              </Flex>
            </Group>
          </Stack>
        </Box>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <Title order={5} ta="center">
            <NumberFormatter value={value[0] * 10000} thousandSeparator="." decimalSeparator="," />{' '}
            -{' '}
            <NumberFormatter value={value[1] * 10000} thousandSeparator="." decimalSeparator="," />
          </Title>
          <RangeSlider
            size="sm"
            flex={1}
            value={value}
            onChange={setValue}
            marks={[{ value: 5 }, { value: 40 }, { value: 65 }, { value: 100 }]}
          />
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
