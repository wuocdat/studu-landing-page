import { Box, Flex, Grid, Group, Stack, Text } from '@mantine/core';
import APP_COLORS from '@/theme/colors';

const CustomStepper = () => {
  return (
    <Grid gutter={0}>
      {/* first step */}
      <Grid.Col span={4}>
        <Stack gap={6}>
          <Group gap={0}>
            <Flex
              w={70}
              h={70}
              justify="center"
              align="center"
              bg={APP_COLORS.primary}
              style={{ borderRadius: 16 }}
            >
              <Text fz={40} fw={800} c="white">
                1
              </Text>
            </Flex>
            <Box flex={1} h={4} bg="#CECECE" />
          </Group>
          <Text fz={20} fw={700}>
            Đăng ký
          </Text>
          <Text fz={16} fw={400}>
            Để tạo hồ sơ gia sư
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack gap={6}>
          <Group gap={0}>
            <Flex
              w={70}
              h={70}
              justify="center"
              align="center"
              bg="#CECECE"
              style={{ borderRadius: 16 }}
            >
              <Text fz={40} fw={800}>
                2
              </Text>
            </Flex>
            <Box flex={1} h={4} bg="#CECECE" />
          </Group>
          <Text fz={20} fw={700}>
            STUTU duyệt
          </Text>
          <Text fz={16} fw={400}>
            trong vòng 24 giờ
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack gap={6}>
          <Group gap={0}>
            <Flex
              w={70}
              h={70}
              justify="center"
              align="center"
              bg="#CECECE"
              style={{ borderRadius: 16 }}
            >
              <Text fz={40} fw={800}>
                3
              </Text>
            </Flex>
          </Group>
          <Text fz={20} fw={700}>
            Bắt đầu dạy
          </Text>
          <Text fz={16} fw={400}>
            học viên trên khắp cả nước
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default CustomStepper;
