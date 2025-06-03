import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { AspectRatio, Container, Group, Image, Stack, Text, Title } from '@mantine/core';
import APP_COLORS from '@/theme/colors';

const comments = [
  {
    name: 'John Doe',
    image: '/images/random_avatar.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Jane Smith',
    image: '/images/random_avatar.png',
    description: 'The tutors are very knowledgeable and helpful.',
  },
  {
    name: 'Alice Johnson',
    image: '/images/random_avatar.png',
    description: 'I love the flexibility of the schedule.',
  },
];

interface CommentItemProps {
  name: string;
  image: string;
  description: string;
}

const CommentItem = ({ name, image, description }: CommentItemProps) => {
  return (
    <Group align="stretch" gap={50}>
      <AspectRatio ratio={1} maw={150} mx="auto">
        <Image src={image} alt={name} radius={16} fit="cover" />
      </AspectRatio>
      <Stack flex={1}>
        <Text variant="subtitle" size="sm" ta="justify">
          "{description}"
        </Text>
        <Text>{name}</Text>
      </Stack>
    </Group>
  );
};

export default function CommentsSection() {
  const t = useTranslations('premium_tutoring');

  const renderComments = comments.map((comment, index) => (
    <CarouselSlide key={index}>
      <CommentItem {...comment} />
    </CarouselSlide>
  ));

  return (
    <Stack align="center" py={50} gap="xl" bg={APP_COLORS.grayBg}>
      <Title order={2}>{t('customer_reviews_premium_tutoring')}</Title>

      <Container size="xl">
        <Carousel
          controlSize={40}
          slideGap={50}
          loop
          nextControlIcon={<IconChevronRight size={24} />}
          previousControlIcon={<IconChevronLeft size={24} />}
          styles={{
            root: {
              padding: '0px 100px',
            },
            control: {
              backgroundColor: 'white',
              opacity: 1,
            },
          }}
        >
          {renderComments}
        </Carousel>
      </Container>
    </Stack>
  );
}
