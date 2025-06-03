import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import {
  Badge,
  Box,
  Checkbox,
  Combobox,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  useCombobox,
} from '@mantine/core';
import APP_COLORS from '@/theme/colors';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

export default function SkillSelect() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      <Group>
        <Text flex={1}>{item}</Text>
        <Checkbox readOnly size="sm" checked={selectedItems.includes(item)} />
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      position="bottom-start"
      onOptionSubmit={(val) => {
        setSelectedItems((prev) =>
          prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
        );
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <Box
          style={{
            border: `1px solid ${APP_COLORS.primaryText}`,
            borderRadius: 8,
            padding: '12px 18px',
          }}
          onClick={() => combobox.toggleDropdown()}
        >
          <Stack gap="xs">
            <Text size="xs">Bạn muốn cải thiện</Text>
            <Group>
              <Title order={5}>Kỹ năng</Title>
              {selectedItems.length && (
                <Badge size="md" circle radius="lg" bg={APP_COLORS.primaryText}>
                  {selectedItems.length}
                </Badge>
              )}
              <Flex flex={1} justify="flex-end">
                <IconChevronDown color="black" />
              </Flex>
            </Group>
          </Stack>
        </Box>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
