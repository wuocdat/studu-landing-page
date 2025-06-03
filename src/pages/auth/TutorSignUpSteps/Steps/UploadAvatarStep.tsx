import { Anchor, Container, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import UploadFileContainer from '@/components/UploadFileContainer';

export default function UploadAvatar() {
  const { t } = useTranslation();

  return (
    <Container size="lg">
      <Stack gap="xs">
        <UploadFileContainer
          title={t('tutor-signup-steps.upload-avatar')}
          subtitle={t('tutor-signup-steps.subtitle-2')}
          description={t('tutor-signup-steps.hidden-avatar')}
        />
        <Text size="sm" fs="italic" fw={300} ta="center">
          {t('tutor-signup-steps.avatar-guide')}{' '}
          <Anchor underline="always">{t('tutor-signup-steps.here')}</Anchor>
        </Text>
      </Stack>
    </Container>
  );
}
