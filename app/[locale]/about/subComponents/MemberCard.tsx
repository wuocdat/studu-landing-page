import { Avatar, Stack, Text } from '@mantine/core';

interface MemberCardProps {
  avatar: string;
  name: string;
  teamRole: string;
  slogan: string;
}

export default function MemberCard(props: MemberCardProps) {
  return (
    <Stack align="center" gap="xs">
      <Avatar size={300} src={props.avatar} alt="team" />
      <Text fz={40} fw={800}>
        {props.name}
      </Text>
      <Text fz={24}>{props.teamRole}</Text>
      <Text ta="center" fz={24} maw={512}>
        {props.slogan}
      </Text>
    </Stack>
  );
}
