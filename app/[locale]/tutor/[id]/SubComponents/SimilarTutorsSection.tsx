import { useTranslations } from 'next-intl';
import { Avatar, Container, Divider, Group, Stack, Text, Title } from '@mantine/core';
import ProfessionalBadge from '@/components/StutorPreview/ProfessionalBadge';
import StarRating from '@/components/StutorPreview/StarRating';
import StututorBadge from '@/components/StutorPreview/StututorBadge';
import APP_COLORS from '@/theme/colors';

const SimilarTutorsItem = () => {
  return (
    <Container size="lg" p="sm" style={{ borderBottom: '3px solid #CECECE' }}>
      <Group gap={100} wrap="nowrap">
        <Avatar w={105} h={105} src="/images/tutor_avatar.png" alt="Tutor Image" />
        <Stack flex={1} gap="xs">
          <Group>
            <Title order={4} fw={800}>
              Nguyễn Vũ Hoàng Anh
            </Title>
            <ProfessionalBadge />
            <StututorBadge />
            <StarRating rating={4.9} amount={13} />
          </Group>
          <Group gap={50}>
            <Group gap="xs">
              <Text size="xs" c={APP_COLORS.primary}>
                Tiếng Anh
              </Text>
              <Divider orientation="vertical" />
              <Text size="xs" c="gray">
                IELTS
              </Text>
              <Divider orientation="vertical" />
              <Text size="xs" c="gray">
                TOEIC
              </Text>
              <Divider orientation="vertical" />
              <Text size="xs" c="gray">
                SAT
              </Text>
            </Group>
            <Text size="xs" fw={700}>
              Từ 200,000 VND/giờ
            </Text>
          </Group>
          <Text mt="md" size="xs" fw={300} ta="justify" fs="italic">
            “Trên đời này không có bông tuyết nào là trong sạch cả. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna.”
          </Text>
        </Stack>
      </Group>
    </Container>
  );
};

export default function SimilarTutorsSection() {
  const t = useTranslations('detailed_profile');

  return (
    <Stack gap={50}>
      <Stack gap="xs" align="center">
        <Text fw={800} fz={36}>
          {t('similar_tutors')}
        </Text>
        <Container size="md">
          <Text variant="subtitle" fz={20} ta="center" fw={200}>
            {t('highlight')}
          </Text>
        </Container>
      </Stack>

      <SimilarTutorsItem />
      <SimilarTutorsItem />
      <SimilarTutorsItem />
    </Stack>
  );
}
