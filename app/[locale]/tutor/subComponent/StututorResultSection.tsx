'use client';

import { useState } from 'react';
import { AspectRatio, Button, Card, CardSection, Center, Grid, Stack, Title } from '@mantine/core';
import APP_COLORS from '@/theme/colors';
import TutorCard from './TutorProfileCard';

const tutors = [
  {
    tutorId: '1f2d3',
    name: 'Nguyễn Tú Vy Oanh',
    avatar: '/images/tutor_avatar.png',
    price: 'Từ 400,000 VNĐ/giờ',
    rating: 4.9,
    qualification: 'IELTS 8.0 / TOEIC / SAT',
    university: 'Trường đại học Kinh tế Quốc Dân',
    students: 34,
    sessions: 208,
    language: 'Tiếng Anh',
    mission:
      'Cuộc đời tôi chỉ có hai sứ mệnh cao cả nhất: Ước mơ thành công và Cải cách nền giáo dục Việt Nam.',
  },
  {
    tutorId: '2a3b4',
    name: 'Trần Hữu Đạt',
    avatar: '/images/tutor_avatar.png',
    price: 'Từ 350,000 VNĐ/giờ',
    rating: 4.8,
    qualification: 'IELTS 7.5 / TESOL',
    university: 'Đại học Ngoại Thương',
    students: 28,
    sessions: 189,
    language: 'Tiếng Anh',
    mission: 'Giúp học viên chinh phục tiếng Anh một cách dễ dàng và hiệu quả nhất.',
  },
  {
    tutorId: '3c4d5',
    name: 'Lê Minh Châu',
    avatar: '/images/tutor_avatar.png',
    price: 'Từ 500,000 VNĐ/giờ',
    rating: 5.0,
    qualification: 'Cử nhân Sư phạm Tiếng Anh',
    university: 'Trường Đại học Sư phạm Hà Nội',
    students: 45,
    sessions: 260,
    language: 'Tiếng Anh',
    mission: 'Mong muốn giúp mọi người tự tin giao tiếp tiếng Anh trong mọi tình huống.',
  },
  {
    tutorId: '4e5f6',
    name: 'Phạm Gia Bảo',
    avatar: '/images/tutor_avatar.png',
    price: 'Từ 300,000 VNĐ/giờ',
    rating: 4.7,
    qualification: 'TOEFL 110 / GMAT 700+',
    university: 'Trường Đại học Bách Khoa Hà Nội',
    students: 30,
    sessions: 150,
    language: 'Tiếng Anh, Tiếng Pháp',
    mission: 'Giảng dạy tận tâm, truyền cảm hứng và giúp học viên đạt được mục tiêu học tập.',
  },
  {
    tutorId: '5g6h7',
    name: 'Đỗ Thị Hồng Nhung',
    avatar: '/images/tutor_avatar.png',
    price: 'Từ 450,000 VNĐ/giờ',
    rating: 4.9,
    qualification: 'Thạc sĩ Ngôn ngữ học ứng dụng',
    university: 'Trường Đại học Khoa học Xã hội và Nhân văn',
    students: 40,
    sessions: 230,
    language: 'Tiếng Anh, Tiếng Nhật',
    mission: 'Luôn mang đến những bài học sinh động và phương pháp học hiệu quả nhất.',
  },
];

const StututorResultSection = () => {
  const [lastHoveredTutorId, setLastHoveredTutorId] = useState<string | null>(null);

  return (
    <Stack bg={APP_COLORS.grayBg} p={50}>
      <Title order={3}>Có 292 gia sư phù hợp với bạn!</Title>
      {tutors.map((tutor) => (
        <Grid key={tutor.tutorId} columns={7} gutter="xl">
          <Grid.Col span={5}>
            <TutorCard
              tutorId={tutor.tutorId}
              name={tutor.name}
              avatar={tutor.avatar}
              price={tutor.price}
              rating={tutor.rating}
              qualification={tutor.qualification}
              university={tutor.university}
              students={tutor.students}
              sessions={tutor.sessions}
              language={tutor.language}
              mission={tutor.mission}
              onMouseEnter={() => setLastHoveredTutorId(tutor.tutorId)}
            />
          </Grid.Col>
          {lastHoveredTutorId === tutor.tutorId && (
            <Grid.Col span={2}>
              <Card shadow="md" radius="md" h="100%">
                <CardSection>
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      src="https://www.youtube.com/embed/mzJ4vCjSt28"
                      title="YouTube video player"
                      style={{ border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </AspectRatio>
                </CardSection>
                <Center flex={1}>
                  <Button variant="outline">Xem lịch dạy</Button>
                </Center>
              </Card>
            </Grid.Col>
          )}
        </Grid>
      ))}
    </Stack>
  );
};

export default StututorResultSection;
