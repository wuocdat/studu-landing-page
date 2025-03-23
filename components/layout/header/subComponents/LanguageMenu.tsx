'use client';

import { IconChevronDown } from '@tabler/icons-react';
import { useLocale } from 'next-intl';
import { Group, Menu, MenuDropdown, MenuItem, MenuTarget, Text } from '@mantine/core';
import { usePathname, useRouter } from '@/i18n/navigation';

const LanguageMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <Menu shadow="md" width={200}>
      <MenuTarget>
        <Group gap="sm" style={{ cursor: 'pointer' }}>
          <Text fz={20} size="lg" fw={600} tt="capitalize">
            {locale}
          </Text>
          <IconChevronDown />
        </Group>
      </MenuTarget>
      <MenuDropdown>
        <MenuItem onClick={() => router.push(pathname, { locale: 'vi' })}>Tiếng Việt</MenuItem>
        <MenuItem onClick={() => router.push(pathname, { locale: 'en' })}>English</MenuItem>
      </MenuDropdown>
    </Menu>
  );
};

export default LanguageMenu;
