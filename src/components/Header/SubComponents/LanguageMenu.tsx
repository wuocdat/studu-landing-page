import { IconChevronDown } from '@tabler/icons-react';
import { Group, Menu, MenuDropdown, MenuItem, MenuTarget, Text } from '@mantine/core';
import { Translation } from 'react-i18next';
import { setLang, useAppDispatch } from '@/store';

const LanguageMenu = () => {
  const dispatch = useAppDispatch();
  return (
    <Translation>
      {(_, { i18n }) => (
        <Menu shadow="md" width={200}>
          <MenuTarget>
            <Group gap="sm" style={{ cursor: 'pointer' }}>
              <Text fz={18} fw={500} tt="capitalize">
                {i18n.language}
              </Text>
              <IconChevronDown size={20} />
            </Group>
          </MenuTarget>
          <MenuDropdown>
            <MenuItem onClick={() => dispatch(setLang('vi'))}>Tiếng Việt</MenuItem>
            <MenuItem onClick={() => dispatch(setLang('en'))}>English</MenuItem>
          </MenuDropdown>
        </Menu>
      )}
    </Translation>
  );
};

export default LanguageMenu;
