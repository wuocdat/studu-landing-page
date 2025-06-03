import { Flex, Stack, Text, Title } from '@mantine/core';

export default function IntroCard({
  data,
}: {
  data: { icon: React.ReactNode; title: string; description: string };
}) {
  return (
    <Stack align="center" w={288}>
      <Flex
        align="center"
        justify="center"
        w={180}
        h={180}
        p="md"
        bg="white"
        style={{ borderRadius: '50%' }}
      >
        {data.icon}
      </Flex>
      <Title order={4}>{data.title}</Title>
      <Text fz="sm" fw={300} ta="center">
        {data.description}
      </Text>
    </Stack>
  );
}
