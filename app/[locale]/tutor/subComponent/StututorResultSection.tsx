'use client';

import { IconChevronDown } from '@tabler/icons-react';
import { Grid, Image, Select, Stack, Text, TextInput } from '@mantine/core';
import APP_COLORS from '@/theme/colors';
import TutorCard from './TutorProfileCard';

const StututorResultSection = () => {
  return (
    <Stack bg={APP_COLORS.grayBg} p={50}>
      <Grid columns={8} justify="space-around">
        <Grid.Col span={3}>
          <Text>Có 292 gia sư phù hợp với bạn!</Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <Select
            data={[
              'Lựa chọn của STUTU',
              'Mức độ phổ biến',
              'Đánh giá',
              'Học phí cao nhất',
              'Học phí thấp nhất',
            ]}
            placeholder="Sắp xếp theo ..."
            defaultValue="Lựa chọn của STUTU"
            rightSection={<IconChevronDown />}
            labelProps={{
              style: {
                width: '100%',
                textAlign: 'center',
              },
            }}
            mb={32}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextInput
            placeholder="Tìm theo tên hoặc từ khoá"
            rightSection={<Image src="/images/search.svg" />}
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <Stack>
            <TutorCard
              name="Nguyễn Tú Vy Oanh"
              avatar="/images/tutor_avatar.png"
              price="400,000 VNĐ"
              rating={4.9}
              reviews={105}
              qualification="IELTS 8./TOEIC/SAT"
              university="Trường đại học Kinh tế Quốc Dân"
              students={34}
              sessions={208}
              subjects={['IELTS', 'Tiếng Anh trẻ em', 'Luyện thi THPTQG']}
              mission="Cuộc đời tôi chỉ có hai sứ mệnh cao cả nhất: Ước mơ thành công và Cải cách nền giáo dục Việt Nam."
            />
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <></>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default StututorResultSection;
