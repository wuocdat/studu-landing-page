import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Box, Button, Group } from '@mantine/core';
import StutuLogo from '@/components/icons/StutuLogo';
import NavAnchor from '@/components/NavAnchor';
import LanguageMenu from './subComponents/LanguageMenu';

export default function Header() {
  const t = useTranslations('header');

  return (
    <Box
      pos="fixed"
      top={0}
      left={0}
      right={0}
      bg="white"
      px="lg"
      style={{ height: '80px', zIndex: 1 }}
    >
      <Group justify="space-between" align="center" style={{ height: '100%' }}>
        <Group gap="xl">
          <Box h={64} component={Link} href="/">
            <StutuLogo />
          </Box>
          <NavAnchor link="/tutor" text={t('findTutor')} />
          <NavAnchor link="/become_tutor" text={t('becomeTutor')} />
          <NavAnchor link="/guide" text={t('guide')} />
        </Group>
        <Group gap="md">
          <LanguageMenu />
          <Button miw={150}>{t('login')}</Button>
        </Group>
      </Group>
    </Box>
  );
}
