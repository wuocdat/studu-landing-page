'use client';

import { Anchor, Button, Card, Grid, Group, Image, List, Space, Stack, Text } from '@mantine/core';
import HeartCheckbox from '@/components/base/HeartCheckbox';
import ProfessionalBadge from '@/components/StutorPreview/ProfessionalBadge';
import StarRating from '@/components/StutorPreview/StarRating';
import StututorBadge from '@/components/StutorPreview/StututorBadge';
import { useRouter } from '@/i18n/navigation';

type TutorCardProps = {
  tutorId: string;
  name: string;
  avatar: string;
  price: string;
  rating: number;
  qualification: string;
  university: string;
  students: number;
  sessions: number;
  language: string;
  mission: string;
  onMouseEnter?: () => void;
};

export default function TutorCard({
  tutorId,
  name,
  avatar,
  price,
  rating,
  qualification,
  university,
  students,
  sessions,
  language,
  mission,
  onMouseEnter,
}: TutorCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tutor/${tutorId}`);
  };

  return (
    <Card shadow="sm" padding="xl" radius="lg" h="100%" onMouseEnter={onMouseEnter}>
      <Grid gutter={{ lg: 'xl' }}>
        <Grid.Col span={4}>
          <Image
            radius={10}
            w="100%"
            fit="cover"
            src={avatar}
            alt="Avatar"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          />
        </Grid.Col>
        <Grid.Col span={8}>
          <Stack>
            <Group align="flex-start">
              <Stack>
                <Text fw={800}>{name}</Text>
                <List spacing="2px">
                  <List.Item fz={14} icon={<Image src="/images/collect.svg" />}>
                    {university}
                  </List.Item>
                  <List.Item fz={14} icon={<Image src="/images/language.svg" />}>
                    {language}
                  </List.Item>
                  <List.Item fz={14} icon={<Image src="/images/cer_icon.svg" />}>
                    {qualification}
                  </List.Item>
                  <List.Item fz={14} icon={<Image src="/images/exper.svg" />}>
                    {students} học viên - {sessions} buổi học
                  </List.Item>
                </List>
              </Stack>
              <Stack align="flex-end" flex={1} gap={2}>
                <StututorBadge />
                <Space h={4} />
                <ProfessionalBadge />
                <StarRating rating={rating} />
                <Text fz={16} fw={500}>
                  {price}
                </Text>
              </Stack>
            </Group>
            <Text fz={12} variant="subtitle">
              {mission}
            </Text>
            <Group gap="xl">
              <Button miw={100} h={32} radius="sm">
                Học thử
              </Button>
              <Button miw={100} h={32} radius="sm" variant="outline">
                Đăng ký
              </Button>
              <HeartCheckbox checked onChange={(value) => value} />
              <Group flex={1} justify="flex-end">
                <Anchor fz={14} underline="always">
                  Tìm hiểu thêm
                </Anchor>
              </Group>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
