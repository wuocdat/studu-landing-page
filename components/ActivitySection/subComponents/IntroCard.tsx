import { Flex, Stack, Text } from '@mantine/core';

export default function IntroCard({
  data,
}: {
  data: { icon: React.ReactNode; title: string; description: string };
}) {
  return (
    <Stack align="center" w={240}>
      <Flex
        align="center"
        justify="center"
        w={240}
        h={240}
        bg="white"
        style={{ borderRadius: '50%' }}
      >
        {data.icon}
      </Flex>
      <Text fz={26} fw={700}>
        {data.title}
      </Text>
      <Text fz={20} fw={200} ta="center">
        {data.description}
      </Text>
    </Stack>
  );
}
