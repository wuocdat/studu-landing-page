'use client';

import NextImage from 'next/image';
import {
  Container,
  Grid,
  Image,
  Stack,
  TableOfContents,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import introImage from '@/public/images/user_with_laptop.svg';

export default function DetailStudentGuide() {
  return (
    <Stack my={70}>
      <Container size="xl">
        <Grid columns={13}>
          <Grid.Col span={8}>
            <Stack h={500}>
              <Text fz={64} fw={900} lh="100%">
                Lời khuyên và hướng dẫn dành cho học viên
              </Text>
              <Text fz={22} fw={300} fs="italic">
                Tất tần tật để trở thành học viên STUTU
              </Text>
              <TextInput
                maw={400}
                placeholder="Tìm kiếm từ khoá"
                styles={{
                  input: {
                    borderRadius: 6,
                    fontSize: 22,
                  },
                }}
              />
            </Stack>
          </Grid.Col>
          <Grid.Col span={5}>
            <Image component={NextImage} src={introImage} alt="student guide" fit="contain" />
          </Grid.Col>
        </Grid>
      </Container>
      <Container w="100%" size="xl">
        <Grid gutter={50}>
          <Grid.Col span={3}>
            <TableOfContents
              pos="sticky"
              top={120}
              variant="filled"
              size="sm"
              radius="sm"
              depthOffset={24}
              scrollSpyOptions={{
                selector: 'h1, h2',
              }}
              getControlProps={({ data }) => ({
                onClick: () => data.getNode().scrollIntoView(),
                children: data.value,
              })}
              styles={{
                control: {
                  fontSize: 14,
                  fontWeight: 600,
                },
              }}
            />
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack>
              <Title order={1}>Hướng dẫn đăng ký tài khoản</Title>
              <Title order={1}>Hướng dẫn đăng nhập</Title>
              <Title order={1}>Quy định dành cho học viên</Title>
              <Title order={2}>Quy định dành cho học viên</Title>
              <Title order={2}>Quy định dành cho học viên</Title>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  );
}
