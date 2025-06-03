import { Anchor, Box, Button, Group } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import AppLogo from '../Icons/AppLogo';
import { Link, useLocation } from 'react-router-dom';
import LanguageMenu from './SubComponents/LanguageMenu';

const withoutHeaderPaths = ['/student-register', '/tutor-register'];

export default function Header() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  if (withoutHeaderPaths.includes(pathname)) return <></>;

  return (
    <Box bg="white" px="lg" h={80}>
      <Group justify="space-between" align="center" style={{ height: '100%' }}>
        <Group gap="xl">
          <Box h={64} component={Link} to={'/'}>
            <AppLogo />
          </Box>
          <Anchor href="https://mantine.dev/">{t('header.find_tutor')}</Anchor>
          <Anchor href="https://mantine.dev/">{t('header.become_tutor')}</Anchor>
          <Anchor href="https://mantine.dev/">{t('header.guide')}</Anchor>
        </Group>
        <Group gap="md">
          <LanguageMenu />
          <Button miw={150}>{t('header.login')}</Button>
        </Group>
      </Group>
    </Box>
  );
}
