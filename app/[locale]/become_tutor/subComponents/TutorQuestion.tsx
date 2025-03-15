'use client';

import NextImage from 'next/image';
import { Accordion, Grid, Image, Stack, Text } from '@mantine/core';
import bear from '@/public/images/bear_with_lamp.svg';

const groceries = [
  {
    value: 'Tôi có thể kiếm được bao nhiêu tiền trên STUTU?',
    description:
      'Thu nhập của bạn trên STUTU phụ thuộc vào nhiều yếu tố như mức học phí bạn đặt, số lượng học viên mà bạn có, khoảng thời gian rảnh của bạn và một số yếu tố khác. Bên cạnh đó, bạn cũng cần đặc biệt chú ý đến sức khoẻ của bản thân. Trung bình thu nhập nếu bạn dạy toàn thời gian là khoảng 40-50 triệu/tháng và bán thời gian là khoảng 15-20 triệu/tháng.',
  },
  {
    value: 'Tôi có mất thêm khoản phí nào không?',
    description: 'Không. STUTU hiểu rằng bạn xứng đáng với toàn bộ công sức mình bỏ ra.',
  },
  {
    value: 'Tôi muốn đi dạy trực tiếp được không?',
    description:
      'Được chứ. Nếu bạn muốn dạy trực tiếp, hãy cho chúng mình biết khi bạn đăng ký. Nhớ điền cả khu vực bạn muốn dạy và học phí nữa nhé. Có rất nhiều học viên ngoài kia đang cần bạn b',
  },
];

const TutorQuestion = () => {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Stack py={50} px="xl" gap="xl">
      <Text variant="big" ta="center">
        Gia sư thường hỏi
      </Text>
      <Grid columns={11} justify="space-around">
        <Grid.Col span={6}>
          <Accordion>{items}</Accordion>
        </Grid.Col>
        <Grid.Col span={4}>
          <Image component={NextImage} src={bear} alt="bear" fit="contain" />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default TutorQuestion;
