import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Container, Stack, Title } from '@mantine/core';
import classes from '@/components/styles/Carousel.module.css';
import TutorAvatar from '@/components/TutorAvatar';

const collaborators = [
  'Nguyễn Văn An',
  'Trần Thị Bích',
  'Lê Minh Tuấn',
  'Phạm Ngọc Hân',
  'Hoàng Văn Dũng',
  'Võ Thị Kim',
  'Đặng Quốc Khánh',
  'Bùi Thị Mai',
  'Đỗ Hữu Tài',
  'Ngô Thị Lan',
];

export default function OutstandingCollaboratorSection() {
  const t = useTranslations('referral_program');

  const slides = collaborators.map((name, index) => (
    <CarouselSlide key={index}>
      <TutorAvatar name={name} imageUrl="" />
    </CarouselSlide>
  ));

  return (
    <Stack my={50}>
      <Title order={2} ta="center">
        {t('top_contributor')}
      </Title>
      <Container size="xl">
        <Carousel
          withIndicators
          controlSize={40}
          loop
          slideSize="16.666666%"
          slideGap="md"
          align="start"
          nextControlIcon={<IconChevronRight size={24} />}
          previousControlIcon={<IconChevronLeft size={24} />}
          classNames={classes}
          styles={{
            root: {
              padding: '70px 50px',
            },
            control: {
              backgroundColor: 'white',
              opacity: 1,
            },
          }}
        >
          {slides}
        </Carousel>
      </Container>
    </Stack>
  );
}
