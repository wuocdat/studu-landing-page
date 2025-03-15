'use client';

import NextImage from 'next/image';
import { Box, Button, Grid, Image, Stack, Text } from '@mantine/core';
import step from '@/public/images/step_section.svg';
import CustomStepper from './CustomStepper';

const StepsSection = () => {
  return (
    <Box p={50}>
      <Grid justify="center">
        <Grid.Col span={5}>
          <Stack gap={50}>
            <Stack gap={0}>
              <Text fw={900} fz={64}>
                Tạm biệt mưa gió
              </Text>
              <Text fw={300}>Thu nhập không giới hạn ngay tại nhà của bạn</Text>
            </Stack>
            <CustomStepper />
            <Button size="xl" style={{ alignSelf: 'flex-start' }}>
              Tạo hồ sơ ngay
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={5}>
          <Image component={NextImage} src={step} alt="Step" fit="contain" />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default StepsSection;
