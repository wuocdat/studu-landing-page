import { Box, Stack, Text, Title } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconCloudUpload, IconUpload, IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

interface UploadFileContainerProps {
  title: string;
  subtitle?: string;
  description: string;
}

export default function UploadFileContainer({
  title,
  subtitle,
  description,
}: UploadFileContainerProps) {
  const { t } = useTranslation();

  return (
    <Stack my="md">
      <Title order={4} ta="center">
        {title}
      </Title>
      {subtitle && (
        <Text size="sm" mb="xs" fw={300} ta="center">
          {subtitle}
        </Text>
      )}
      <Box p="md" style={{ border: '2px solid #E63B7A', borderRadius: 6 }}>
        <Dropzone
          onDrop={(files) => console.log('accepted files', files)}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
        >
          <Stack
            align="center"
            justify="center"
            gap="sm"
            mih={220}
            style={{ pointerEvents: 'none' }}
          >
            <Dropzone.Accept>
              <IconCloudUpload size={37} color="var(--mantine-color-blue-6)" stroke={2} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={37} color="var(--mantine-color-red-6)" stroke={2} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconUpload size={37} color="var(--mantine-color-black)" stroke={2} />
            </Dropzone.Idle>

            <Text size="lg" fw={700}>
              {t('tutor-signup-steps.upload-file')} <br />
              {t('tutor-signup-steps.or-drag-file')}
            </Text>
            <Text size="lg" c="gray">
              {description}
            </Text>
          </Stack>
        </Dropzone>
      </Box>
    </Stack>
  );
}
