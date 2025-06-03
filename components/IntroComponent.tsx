import { Stack, Text, Title } from '@mantine/core';

interface IntroComponentProps {
  title: string;
  description: string;
}

const IntroComponent = ({ title, description }: IntroComponentProps) => {
  return (
    <Stack align="center">
      <Title order={1} ta="center" style={{ lineHeight: '100%' }}>
        {title}
      </Title>
      <Text variant="subtitle" ta="center" fw={200}>
        {description}
      </Text>
    </Stack>
  );
};

export default IntroComponent;
