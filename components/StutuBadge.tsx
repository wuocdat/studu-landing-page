import { Badge, Group, Image, Tooltip } from '@mantine/core';

interface StutuBadgeProps {
  icon: string;
  text: string;
  tooltip: string;
}

export default function StutuBadge({ icon, text, tooltip }: StutuBadgeProps) {
  return (
    <Group gap={6}>
      <Image src={icon} />
      <Tooltip label={tooltip}>
        <Badge variant="outline" radius="sm" size="md" fz={12} tt="none" fw={500}>
          {text}
        </Badge>
      </Tooltip>
    </Group>
  );
}
