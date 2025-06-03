import { Box, Image, Stack, Text } from '@mantine/core';

type TutorAvatarProps = {
  imageUrl: string;
  name: string;
};

export default function TutorAvatar({ name }: TutorAvatarProps) {
  return (
    <Stack align="center">
      <Box w={150} h={150}>
        <Image h={150} fit="cover" radius="50%" src="/images/tutor_avatar.png" alt="Tutor Avatar" />
      </Box>
      <Text fz={16} fw={800}>
        {name}
      </Text>
    </Stack>
  );
}
