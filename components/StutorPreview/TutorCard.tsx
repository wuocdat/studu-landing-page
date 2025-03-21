import { Anchor, Button, Card, Group, Image, Stack, Text } from '@mantine/core';
import CheckIcon from '../icons/CheckIcon';

interface TutorCardProps {
  name: string;
  university: string;
  certification: string;
  experience: string;
  price: string;
  image: string;
  star?: number;
}

export default function TutorCard({
  name,
  university,
  certification,
  experience,
  price,
  image,
  star = 5,
}: TutorCardProps) {
  const stars = Array.from({ length: star }, (_, index) => {
    return <Image h={32} src="/images/pink_star.svg" key={index} />;
  });

  return (
    <Card radius="24px" p={32}>
      <Card.Section p="sm">
        <Image src={image} alt={name} />
      </Card.Section>

      <Stack gap={0} align="center" mb={16}>
        <Group justify="center" mt="md">
          <Text fw={800} fz={24}>
            {name}{' '}
          </Text>
          <CheckIcon />
        </Group>
        <Group gap={0}>{stars}</Group>
      </Stack>

      <Group mt="sm" gap="xs">
        <Image src="/images/collect.svg" />
        <Text fz={16} fw={600}>
          {university}
        </Text>
      </Group>

      <Group mt="xs" gap="xs">
        <Image src="/images/cer_icon.svg" />
        <Text fz={16} fw={600}>
          {certification}
        </Text>
      </Group>

      <Group mt="xs" gap="xs">
        <Image src="/images/user_icon.svg" />
        <Text fz={16} fw={600}>
          {experience}
        </Text>
      </Group>

      <Group mt="xs" gap="xs">
        <Image src="/images/money_icon.svg" />
        <Text fz={16} fw={600}>
          {price}
        </Text>
      </Group>

      <Button fullWidth h={48} mt="md" size="lg">
        Đăng ký
      </Button>
      <Button fullWidth h={48} mt="xs" variant="outline" size="lg">
        Lưu vào yêu thích
      </Button>
      <Anchor mt="md" ta="center" underline="always" fz={16}>
        Tìm hiểu thêm về gia sư
      </Anchor>
    </Card>
  );
}
