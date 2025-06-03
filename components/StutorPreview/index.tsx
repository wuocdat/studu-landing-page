'use client';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { Carousel } from '@mantine/carousel';
import { Container, Stack, Text, Title } from '@mantine/core';
import APP_COLORS from '@/theme/colors';
import TutorCard from './TutorCard';

const StutorPreview = () => {
  const t = useTranslations('home_page');

  return (
    <Stack bg={APP_COLORS.grayBg} py={50} gap="xl">
      <Stack align="center" gap="sm">
        <Title order={2}>{t('tutor_preview_section.title')}</Title>
        <Text variant="subtitle">{t('tutor_preview_section.subtitle')}</Text>
      </Stack>

      <Container size="xl">
        <Carousel
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap={{ base: 0, sm: 'md', md: 'lg', lg: 'xl' }}
          controlSize={50}
          withIndicators
          loop
          align="start"
          dragFree
          nextControlIcon={<IconChevronRight size={32} />}
          previousControlIcon={<IconChevronLeft size={32} />}
          styles={{
            control: {
              backgroundColor: 'white',
              opacity: 1,
            },
          }}
        >
          <Carousel.Slide>
            <TutorCard
              name="Nguyễn Tú Vy Oanh"
              university="Trường đại học Kinh tế Quốc Dân"
              certification="IELTS 8./TOEIC/SAT"
              experience="Kinh nghiệm 5 năm IELTS"
              price="323.333 VND - 61 phút"
              image="/images/avatar.png"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <TutorCard
              name="Nguyễn Tú Vy Oanh"
              university="Trường đại học Kinh tế Quốc Dân"
              certification="IELTS 8./TOEIC/SAT"
              experience="Kinh nghiệm 5 năm IELTS"
              price="323.333 VND - 61 phút"
              image="/images/tutor_avatar.png"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <TutorCard
              name="Nguyễn Tú Vy Oanh"
              university="Trường đại học Kinh tế Quốc Dân"
              certification="IELTS 8./TOEIC/SAT"
              experience="Kinh nghiệm 5 năm IELTS"
              price="323.333 VND - 61 phút"
              image="/images/tutor_avatar.png"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <TutorCard
              name="Nguyễn Tú Vy Oanh"
              university="Trường đại học Kinh tế Quốc Dân"
              certification="IELTS 8./TOEIC/SAT"
              experience="Kinh nghiệm 5 năm IELTS"
              price="323.333 VND - 61 phút"
              image="/images/tutor_avatar.png"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <TutorCard
              name="Nguyễn Tú Vy Oanh"
              university="Trường đại học Kinh tế Quốc Dân"
              certification="IELTS 8./TOEIC/SAT"
              experience="Kinh nghiệm 5 năm IELTS"
              price="323.333 VND - 61 phút"
              image="/images/tutor_avatar.png"
            />
          </Carousel.Slide>
        </Carousel>
      </Container>
    </Stack>
  );
};

export default StutorPreview;
