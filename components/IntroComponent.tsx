import { Stack, Text } from '@mantine/core';

interface IntroComponentProps {
  title: string;
  description: string;
}

const IntroComponent = ({ title, description }: IntroComponentProps) => {
  return (
    <Stack align="center">
      <Text variant="big" ta="center" style={{ lineHeight: '100%' }}>
        {title}
      </Text>
      <Text fz={24} fw={300} ta="center">
        {description}
      </Text>
    </Stack>
  );
};

export default IntroComponent;
