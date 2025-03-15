import NextImage from 'next/image';
import { Badge, Button, Card, Grid, Group, Image, List, Stack, Text } from '@mantine/core';
import CheckIcon from '@/components/icons/CheckIcon';
import ratingStar from '@/public/images/pink_star.svg';

type TutorCardProps = {
  name: string;
  avatar: string;
  price: string;
  rating: number;
  reviews: number;
  qualification: string;
  university: string;
  students: number;
  sessions: number;
  subjects: string[];
  mission: string;
};

export default function TutorCard({
  name,
  avatar,
  price,
  rating,
  reviews,
  qualification,
  university,
  students,
  sessions,
  subjects,
  mission,
}: TutorCardProps) {
  return (
    <Card shadow="sm" padding="xl" radius="lg">
      <Grid gutter={{ lg: 'xl' }}>
        <Grid.Col span={4}>
          <Stack>
            <Image radius={10} h={178} w="100%" fit="cover" src={avatar} alt="Avatar" />
            <Stack align="center" gap={0}>
              <Group align="center">
                <Text fz={24} fw={800}>
                  {rating}
                </Text>
                <Image component={NextImage} src={ratingStar} alt="rating" />
              </Group>
              <Text fz={22}>({reviews} đánh giá)</Text>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={8}>
          <Stack>
            <Stack gap="sm">
              <Group gap="xs">
                <Text fw={700}>{name}</Text>
                <CheckIcon />
                <Text flex={1} ta="end" fz={16}>
                  {price}/ giờ
                </Text>
              </Group>
              <Group>
                <Badge fz={20} tt="none">
                  STUTUtor
                </Badge>
              </Group>
              <List spacing="6px">
                <List.Item icon={<Image src="/images/cer_icon.svg" />}>{qualification}</List.Item>
                <List.Item icon={<Image src="/images/study_icon.svg" />}>{university}</List.Item>
                <List.Item icon={<Image src="/images/user_icon.svg" />}>
                  {students} học viên - {sessions} buổi học
                </List.Item>
                <List.Item icon={<Image src="/images/lib_icon.svg" />}>
                  {subjects.join(', ')}
                </List.Item>
              </List>
              <Text fz={16} fw={700} ta="justify">
                {mission}
              </Text>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span="auto">
          <Group justify="flex-end" mt={-16}>
            <Button variant="outline" radius="md" h={48} fz={16}>
              Nhắn tin
            </Button>
            <Button radius="md" h={48} fz={16}>
              Đặt lịch học thử
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
