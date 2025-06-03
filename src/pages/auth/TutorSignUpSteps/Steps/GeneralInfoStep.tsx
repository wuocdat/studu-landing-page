import {
  Anchor,
  Box,
  Container,
  Grid,
  GridCol,
  Group,
  Image,
  Mark,
  Radio,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import UploadFileContainer from '@/components/UploadFileContainer';

export default function GeneralInfoStep() {
  const { t } = useTranslation();

  return (
    <Container size="lg">
      <Stack>
        <Group grow gap={50}>
          <TextInput size="lg" placeholder={t('tutor-signup-steps.fullname')} />
          <TextInput size="lg" placeholder={t('tutor-signup-steps.birthday')} />
        </Group>
        <Group grow gap={50}>
          <TextInput size="lg" placeholder={t('tutor-signup-steps.your-phone')} />
          <TextInput size="lg" placeholder={t('tutor-signup-steps.email')} />
        </Group>
        <Stack my="sm" gap="xs">
          <Text size="lg">{t('tutor-signup-steps.your-location')}</Text>
          <Group grow gap={50}>
            <Radio size="lg" label={t('tutor-signup-steps.vietnam')} />
            <Radio size="lg" label={t('tutor-signup-steps.foreign-country')} />
          </Group>
        </Stack>
        <Group grow gap={50}>
          <TextInput size="lg" placeholder="Quận/ Huyện" />
          <TextInput size="lg" placeholder="Quốc gia*" />
        </Group>
        <Grid gutter={50}>
          <GridCol span={6}>
            <TextInput size="lg" placeholder="Tỉnh/ Thành phố*" />
          </GridCol>
        </Grid>

        <Stack mt="xl" gap="xs">
          <UploadFileContainer
            title={t('tutor-signup-steps.upload-doc')}
            description={t('tutor-signup-steps.recommend-file-type')}
          />
          <Text size="sm" fs="italic" fw={300}>
            {t('tutor-signup-steps.more-detail-guide')}{' '}
            <Anchor underline="always">{t('tutor-signup-steps.here')}</Anchor>
          </Text>
          <Text mt="xs" size="sm" fs="italic" fw={300}>
            <Mark>{t('tutor-signup-steps.stutu-promise')}</Mark> {t('tutor-signup-steps.promise-1')}{' '}
            <Mark>{t('tutor-signup-steps.unique')}</Mark> {t('tutor-signup-steps.promise-2')}{' '}
            <Anchor>{t('tutor-signup-steps.privacy-terms')}</Anchor>.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
