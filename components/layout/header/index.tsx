import { useTranslations } from 'next-intl';
import { Box, Button, Group } from '@mantine/core';
import StutuLogo from '@/components/icons/StutuLogo';
import TextButton from '@/components/TextButton';
import LanguageMenu from './subComponents/Language';

export default function Header() {
  const t = useTranslations('header');

  return (
    <Box px="lg" style={{ height: '80px' }}>
      <Group justify="space-between" align="center" style={{ height: '100%' }}>
        <Group gap="xl">
          <StutuLogo />
          <TextButton text={t('findTutor')} />
          <TextButton text="Trở thành gia sư" />
          <TextButton text="Hướng dẫn" withUnderline={false} />
        </Group>
        <Group gap="md">
          <LanguageMenu />

          <Button variant="filled" radius="md" size="xl" style={{ height: '36px' }}>
            Đăng nhập
          </Button>
        </Group>
      </Group>
    </Box>
  );
}
