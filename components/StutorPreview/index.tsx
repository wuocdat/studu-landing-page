'use client';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { Stack, Text } from '@mantine/core';
import APP_COLORS from '@/theme/colors';
import TutorCard from './TutorCard';

const StutorPreview = () => {
  return (
    <Stack bg={APP_COLORS.grayBg} p={50}>
      <Stack align="center" gap={0}>
        <Text variant="big">“Hành trình vạn dặm bắt đầu từ bước chân đầu tiên”</Text>
        <Text ta="right">Lão Tử</Text>
      </Stack>

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
          root: {
            paddingRight: 70,
            paddingLeft: 70,
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
    </Stack>
  );
};

export default StutorPreview;
