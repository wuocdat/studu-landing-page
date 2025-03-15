import { IconCertificate, IconCoins } from '@tabler/icons-react';
import { Anchor, Button, Card, Group, Image, Stack, Text } from '@mantine/core';
import CheckIcon from '../icons/CheckIcon';
import ShcoolIcon from '../icons/ShcoolIcon';

interface TutorCardProps {
  name: string;
  university: string;
  certification: string;
  experience: string;
  price: string;
  image: string;
}

export default function TutorCard({
  name,
  university,
  certification,
  experience,
  price,
  image,
}: TutorCardProps) {
  return (
    <Card radius="24px" p={32}>
      <Card.Section p="sm">
        <Image src={image} alt={name} />
      </Card.Section>

      <Stack gap={0} align="center">
        <Group justify="center" mt="md" mb="xs">
          <Text fw={800} fz={32}>
            {name}{' '}
          </Text>
          <CheckIcon />
        </Group>
        <Image w={140} src="/images/rate.png" alt="rate" />
      </Stack>

      <Group mt="sm" gap="xs">
        <ShcoolIcon />
        <Text fz={16} fw={600}>
          {university}
        </Text>
      </Group>

      <Group mt="xs" gap="xs">
        <IconCertificate size={16} />
        <Text size="sm">{certification}</Text>
      </Group>

      <Text mt="xs" size="sm">
        🏅 {experience}
      </Text>

      <Group mt="xs" gap="xs">
        <IconCoins size={16} />
        <Text size="sm">{price}</Text>
      </Group>

      <Button fullWidth mt="md" color="pink">
        Đăng ký
      </Button>
      <Button fullWidth mt="xs" variant="outline" color="pink">
        Lưu vào yêu thích
      </Button>
      <Anchor mt="md" ta="center" underline="always">
        Tìm hiểu thêm về gia sư
      </Anchor>
    </Card>
  );
}
