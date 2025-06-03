import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import {
  Badge,
  Box,
  Combobox,
  Flex,
  Group,
  Image,
  Stack,
  Switch,
  Text,
  Title,
  useCombobox,
} from '@mantine/core';
import APP_COLORS from '@/theme/colors';

interface BadgeOptionType {
  title: string;
  description: string;
  icon: string;
}

const badgeData: BadgeOptionType[] = [
  {
    title: 'STUTUtor',
    description: 'STUTUtor là huy hiệu được trao cho các gia sư tiêu biểu của nền tảng.',
    icon: '/images/cup.svg',
  },
  {
    title: 'Professional',
    description:
      'Professional là huy hiệu được trao cho các gia sư có bằng cấp và chứng chỉ liên quan đến ngôn ngữ mà họ giảng dạy.',
    icon: '/images/flower.svg',
  },
];

const BadgeOptionComponent = ({ data, checked }: { data: BadgeOptionType; checked?: boolean }) => {
  const { title, description, icon } = data;

  return (
    <Stack>
      <Group align="center">
        <Image src={icon} />
        <Text fz={16} flex={1} c={APP_COLORS.primary} fw={400}>
          {title}
        </Text>
        <Switch checked={checked} />
      </Group>
      <Text size="xs">{description}</Text>
    </Stack>
  );
};

export default function BadgeSelect() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = badgeData.map((item) => (
    <Combobox.Option value={item.title} key={item.title}>
      <BadgeOptionComponent data={item} checked={selectedItems.includes(item.title)} />
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
          <Group>
            <Title order={5}>Huy hiệu</Title>
            {selectedItems.length && (
              <Badge size="md" circle radius="lg" bg={APP_COLORS.primaryText}>
                {selectedItems.length}
              </Badge>
            )}
            <Flex flex={1} justify="flex-end">
              <IconChevronDown color="black" />
            </Flex>
          </Group>
        </Box>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
