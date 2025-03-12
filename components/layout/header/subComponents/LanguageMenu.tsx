'use client';

import { IconChevronDown } from '@tabler/icons-react';
import { useLocale } from 'next-intl';
import { Group, Menu, Text } from '@mantine/core';
import { usePathname, useRouter } from '@/i18n/navigation';

const LanguageMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Group gap="sm" style={{ cursor: 'pointer' }}>
          <Text size="xl" fw={600} tt="capitalize">
            {locale}
          </Text>
          <IconChevronDown />
        </Group>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => router.push(pathname, { locale: 'vi' })}>Tiếng Việt</Menu.Item>
        <Menu.Item onClick={() => router.push(pathname, { locale: 'en' })}>English</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default LanguageMenu;
