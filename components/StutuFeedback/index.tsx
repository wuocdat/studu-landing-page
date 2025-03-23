'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Avatar, Box, Card, Stack, Text, Title } from '@mantine/core';
import APP_COLORS from '@/theme/colors';

const mockData = [
  {
    name: 'Nguyễn Tú Vy Oanh',
    feedback:
      'Với STUTU, em đã tìm được những gia sư phù hợp với phong cách học của mình với mức học phí vừa phải. ',
    image: '/images/tutor_avatar.png',
  },
  {
    name: 'Nguyễn Tú Vy Oanh',
    feedback:
      'Thực sự đây là lần đầu tiên mình dùng 1 website để tìm kiếm gia sư tiếng Anh, và mình hoàn toàn hài lòng về quyết định này. STUTU sẽ là một trong những nền tảng mình sẽ recommend cho bạn bè mình khi họ có nhu cầu tìm gia sư.',
    image: '/images/tutor_avatar.png',
  },
  {
    name: 'Nguyễn Tú Vy Oanh',
    feedback:
      'Nhờ có các anh chị gia sư ở STUTU, mình đã vượt qua được nỗi sợ khi nói tiếng Anh. Giờ đây, mình có thể tự tin thuyết trình trước đám đông hay giao tiếp với người nước ngoài mà không còn chút rụt rè nào.',
    image: '/images/tutor_avatar.png',
  },
  {
    name: 'Nguyễn Tú Vy Oanh',
    feedback: 'Học viên rất nhiệt tình, giáo viên dạy rất tận tình, giúp mình hiểu rõ hơn về IELTS',
    image: '/images/tutor_avatar.png',
  },
];

const StutuFeedback = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Stack p={50}>
      <Text ta="center" variant="big">
        Học viên nghĩ gì về STUTU
      </Text>

      <Box bg={APP_COLORS.grayBg}>
        <Carousel
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap={{ base: 0, sm: 'md' }}
          loop
          align="start"
          dragFree
          plugins={[autoplay.current]}
          withControls={false}
        >
          {mockData.map((item, index) => (
            <Carousel.Slide key={index}>
              <Card
                shadow="sm"
                radius="lg"
                styles={{
                  root: {
                    alignItems: 'center',
                  },
                }}
                m="xs"
              >
                <Avatar size="56px" src={item.image} alt={item.name} />
                <Title order={3} mt="sm">
                  {item.name}
                </Title>
                <Text mt="xs" fz={16} ta="justify" lineClamp={5}>
                  {item.feedback}
                </Text>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default StutuFeedback;
