import { Group, Image, Text } from '@mantine/core';

export default function StarRating({ rating, amount }: { rating: number; amount?: number }) {
  return (
    <Group gap={4} align="center">
      <Text fz={16} fw={700}>
        {rating}
      </Text>
      <Image h={32} src="/images/pink_star.svg" />
      {amount && (
        <Text fz={14} fw={300} c="gray" fs="italic">
          ({amount})
        </Text>
      )}
    </Group>
  );
}
