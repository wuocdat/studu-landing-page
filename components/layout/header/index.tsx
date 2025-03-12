import { useTranslations } from 'next-intl';
import { Box, Button, Group } from '@mantine/core';
import StutuLogo from '@/components/icons/StutuLogo';
import NavAnchor from '@/components/NavAnchor';
import LanguageMenu from './subComponents/LanguageMenu';

export default function Header() {
  const t = useTranslations('header');

  return (
    <Box px="lg" style={{ height: '80px' }}>
      <Group justify="space-between" align="center" style={{ height: '100%' }}>
        <Group gap="xl">
          <StutuLogo />
          <NavAnchor link="/" text={t('findTutor')} />
          <NavAnchor link="/" text={t('becomeTutor')} />
          <NavAnchor link="/" text={t('guide')} withUnderline={false} />
        </Group>
        <Group gap="md">
          <LanguageMenu />
          <Button size="xl">{t('login')}</Button>
        </Group>
      </Group>
    </Box>
  );
}
