'use client';

import { IconWorld } from '@tabler/icons-react';
import { ActionIcon, Menu } from '@mantine/core';
import { usePathname, useRouter } from '@/i18n/navigation';

const LanguageMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon variant="subtle" color="gray">
          <IconWorld size={18} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => router.push(pathname, { locale: 'vi' })}>Tiếng Việt</Menu.Item>
        <Menu.Item onClick={() => router.push(pathname, { locale: 'en' })}>English</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default LanguageMenu;
