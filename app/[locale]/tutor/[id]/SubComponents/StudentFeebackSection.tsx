import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import {
  Avatar,
  Grid,
  GridCol,
  Group,
  Image,
  Mark,
  Progress,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import StarRating from '@/components/StutorPreview/StarRating';
import APP_COLORS from '@/theme/colors';

type RatingDetailProps = {
  rating: number;
  amount?: number;
};

function RatingDetail({ rating, amount }: RatingDetailProps) {
  return (
    <Group>
      <StarRating rating={rating} />
      <Progress value={rating * 20} flex={1} size="sm" />
      <Text fz={16} fw={300} c="gray" fs="italic">
        ({amount || 0})
      </Text>
    </Group>
  );
}

const RatingOverview = () => {
  return (
    <Group gap="xl">
      <Stack flex={1}>
        <RatingDetail rating={5} amount={100} />
        <RatingDetail rating={4} amount={50} />
        <RatingDetail rating={3} amount={20} />
        <RatingDetail rating={2} amount={10} />
        <RatingDetail rating={1} amount={10} />
      </Stack>
      <Stack gap={0}>
        <Group gap={4} align="center">
          <Text fw={800}>{4.9}</Text>
          <Image h={32} src="/images/pink_star.svg" />
        </Group>
        <Text fw={600}>
          <Mark fw={800} bg="transparent">
            15
          </Mark>{' '}
          đánh giá
        </Text>
      </Stack>
    </Group>
  );
};

const StudentFeedback = () => {
  return (
    <Stack bg={APP_COLORS.grayBg} style={{ borderRadius: 16 }} p={20}>
      <Group>
        <Avatar size="lg" src="/images/tutor_avatar.png" alt="Student Image" />
        <Title order={4} fw={800}>
          Lê Phương Mai
        </Title>
        <StarRating rating={5} />
      </Group>
      <Text fz={16} fw={300} lineClamp={4} ta="justify">
        Mình chọn học STUTU với mong muốn được cá nhân hóa, tập trung vào mình và mọi thứ được linh
        hoạt hơn. Mình cảm thấy thoải mái hơn với việc học và có động lực để học tiếng Anh hơn rất
        nhiều. Mình chọn học STUTU với mong muốn được cá nhân hóa, tập trung vào mình và mọi thứ
        được linh hoạt hơn. Mình cảm thấy thoải mái hơn với việc học và có động lực để học tiếng Anh
        hơn rất nhiều.
      </Text>
    </Stack>
  );
};

export default function StudentFeedbackSection() {
  const renderFeedbacks = Array.from({ length: 5 }, (_, index) => (
    <CarouselSlide key={index}>
      <StudentFeedback />
    </CarouselSlide>
  ));

  return (
    <Stack gap="xl" py={30}>
      <Title ta="center" order={3}>
        Học viên nói về gia sư
      </Title>
      <Grid gutter={70}>
        <GridCol span={6}>
          <RatingOverview />
        </GridCol>
        <GridCol span={6}>
          <Carousel
            controlSize={40}
            slideGap={50}
            loop
            nextControlIcon={<IconChevronRight size={28} />}
            previousControlIcon={<IconChevronLeft size={28} />}
            styles={{
              root: {
                padding: '0px 70px',
              },
              control: {
                opacity: 1,
                boxShadow: 'none',
              },
            }}
          >
            {renderFeedbacks}
          </Carousel>
        </GridCol>
      </Grid>
    </Stack>
  );
}
