import { notFound } from 'next/navigation';
import { Container, Stack, Text, Title } from '@mantine/core';
import APP_COLORS from '@/theme/colors';

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  try {
    const Content = (await import(`./${locale}.mdx`)).default;
    return (
      <Stack mt="lg" mb={150}>
        <Stack gap={0}>
          <Text ff="gill-sans-ultra-bold" fz={60} ta="center" c={APP_COLORS.primaryText}>
            STUTU
          </Text>
          <Title order={1} ta="center">
            Chính sách Quyền riêng tư
          </Title>
        </Stack>
        <Container size="lg" ta="justify">
          <Content />
        </Container>
      </Stack>
    );
  } catch (error) {
    notFound();
  }
}
