import PacmanIcon from '@/components/Icons/Icon/PacmanIcon';
import { BackgroundImage, Button, Center, Image, Mark, Stack, Text } from '@mantine/core';

export default function RequestUnderReviewPage() {
  return (
    <BackgroundImage src="/svg/radom-bg.svg">
      <Center h="calc(100vh - 80px)">
        <Stack maw={600} align="center">
          <div>
            <Image src="/svg/hand-up.svg" />
          </div>
          <Text size="lg" ta="center">
            Bạn đã gần hoàn tất đăng ký trở thành gia sư tại STUTU! Hồ sơ của bạn đang ở trạng thái
            <Mark>“Chờ hoàn thành”</Mark>.
          </Text>
          <Text size="lg" ta="center">
            Đừng quên cập nhật các thông tin còn thiếu càng sớm càng tốt để đưa hồ sơ về trạng thái
            <Mark>“Chờ xét duyệt"</Mark>.
          </Text>
          <Text size="lg" ta="center">
            Trong lúc đó hãy làm quen với STUTU thôi!!
          </Text>
          <Button mt="xl" size="md" leftSection={<PacmanIcon />}>
            Trang chủ
          </Button>
        </Stack>
      </Center>
    </BackgroundImage>
  );
}
