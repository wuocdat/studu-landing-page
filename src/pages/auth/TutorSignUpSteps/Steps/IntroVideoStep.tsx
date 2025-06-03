import { APP_COLORS } from '@/constants/color.constant';
import {
  Anchor,
  Box,
  Center,
  Container,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconCloudUpload, IconUpload, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function IntroVideoStep() {
  const [showLinkInput, setShowLinkInput] = useState(false);

  return (
    <Container size="lg">
      <Stack>
        <Title order={4}>Thêm video quay ngang có độ dài tối đa 1 phút</Title>
        <Text size="lg">
          Chọn file video và tải lên. Hãy đảm bảo video đã đủ tuân thủ đúng theo quy định của STUTU
          nhé.
        </Text>
        <Center my="xl">
          <Dropzone
            onDrop={(files) => console.log('accepted files', files)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            w={700}
            maw="100%"
            styles={{
              root: {
                border: '2px solid #E63B7A',
                borderRadius: 14,
              },
            }}
          >
            <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
              <Dropzone.Accept>
                <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload size={52} color={APP_COLORS.primary} stroke={1.5} />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Kéo và thả file ghi hình
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  hoặc click để chọn file
                </Text>
              </div>
            </Group>
          </Dropzone>
        </Center>
        <Text size="lg">Nếu bạn đã có sẵn video của bản thân trên Youtube,</Text>
        {!showLinkInput ? (
          <Anchor variant="dark" fw={800} onClick={() => setShowLinkInput(true)}>
            Nhập link
          </Anchor>
        ) : (
          <Box style={{ alignSelf: 'flex-start' }}>
            <Title order={5}>Copy link video trên Youtube của bạn</Title>
            <TextInput placeholder="www.youtube.com/watch?..." />
          </Box>
        )}
        <Text mt="xl" size="lg" fs="italic" fw={300}>
          Cần chút ý tưởng cho video giới thiệu? Tham khảo hướng dẫn <Anchor>tại đây</Anchor>
        </Text>
      </Stack>
    </Container>
  );
}
