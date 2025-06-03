import { Avatar, Stack, Text, Title } from '@mantine/core';

interface MemberCardProps {
  avatar: string;
  name: string;
  teamRole: string;
  slogan: string;
}

export default function MemberCard(props: MemberCardProps) {
  return (
    <Stack align="center" gap="xs" maw={355}>
      <Avatar size={250} src={props.avatar} alt="team" />
      <Title order={3} fz={35}>
        {props.name}
      </Title>
      <Stack align="center" gap={0}>
        <Title order={4}>{props.teamRole}</Title>
        <Text ta="center" size="sm">
          {props.slogan}
        </Text>
      </Stack>
    </Stack>
  );
}
