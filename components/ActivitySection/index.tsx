'use client';

import { Box, Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import APP_COLORS from '@/theme/colors';
import PacmanIcon from '../icons/PacmanIcon';
import IntroCard from './subComponents/IntroCard';

interface ActivitySectionProps {
  title: string;
  actionTitle: string;
  description: string;
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export default function ActivitySection(props: ActivitySectionProps) {
  return (
    <Box bg={APP_COLORS.grayBg}>
      <Container py={50}>
        <Stack align="center" gap="xs">
          <Title order={2}>{props.title}</Title>
          <Text fw={300}>{props.description}</Text>
          <Group pt={42} pb={50} grow gap="100px" wrap="nowrap" justify="center" align="flex-start">
            {props.items.map((item, index) => (
              <IntroCard key={index} data={item} />
            ))}
          </Group>
          <Button miw={160} size="md" leftSection={<PacmanIcon />}>
            {props.actionTitle}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
