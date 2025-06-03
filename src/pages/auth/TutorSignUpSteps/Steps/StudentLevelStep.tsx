import {
  Anchor,
  Container,
  Group,
  Mark,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

export default function StudentLevelStep() {
  return (
    <Container size="lg">
      <Stack>
        <Title order={5} ta="center">
          Bạn lưu ý điền học phí MỘT GIỜ nhé
        </Title>
        <Group grow align="flex-end" gap={50}>
          <Select
            label="IELTS"
            size="lg"
            placeholder="Trình độ học viên mong muốn"
            rightSection={<IconChevronDown size={20} />}
            data={[]}
          />
          <TextInput size="lg" placeholder="Học phí. Ví dụ: 400,000" />
        </Group>
        <Group grow align="flex-end" gap={50}>
          <Select
            label="TOEIC"
            size="lg"
            placeholder="Trình độ học viên mong muốn"
            rightSection={<IconChevronDown size={20} />}
            data={[]}
          />
          <TextInput size="lg" placeholder="Học phí. Ví dụ: 400,000" />
        </Group>
        <Group grow align="flex-end" gap={50}>
          <Select
            label="SAT"
            size="lg"
            placeholder="Trình độ học viên mong muốn"
            rightSection={<IconChevronDown size={20} />}
            data={[]}
          />
          <TextInput size="lg" placeholder="Học phí. Ví dụ: 400,000" />
        </Group>
        <Text fs="italic" fw={300}>
          Tham khảo các lưu ý về Đặt học phí & Chính sách hoa hồng của STUTU{' '}
          <Anchor underline="always">tại đây</Anchor>
        </Text>
        <Text size="lg" fw={300}>
          <Mark>Có thể bạn đã biết:</Mark>
          <br />
          Hiện mức học phí phổ biến nhất là khoảng 200,000-300,000/ giờ.
        </Text>
        <Title order={5} ta="center" mt="lg">
          Và phương thức để học viên có thể học cùng bạn
        </Title>
        <Group grow align="flex-end" gap={50}>
          <Select
            size="lg"
            placeholder="Ứng dụng*"
            rightSection={<IconChevronDown size={20} />}
            data={[]}
          />
          <TextInput size="lg" placeholder="Gắn link phòng học của bạn tại đây" />
        </Group>
      </Stack>
    </Container>
  );
}
