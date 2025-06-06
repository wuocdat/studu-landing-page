import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Anchor, Container, Group, Image, Stack, Text, Title } from '@mantine/core';
import bear from '@/public/images/stutu_bear.svg';
import APP_COLORS from '@/theme/colors';

const IntroductionSection = () => {
  const t = useTranslations('IntroductionSection');
  return (
    <Container size="lg" p="40px">
      <Group wrap="nowrap" align="stretch">
        <Image component={NextImage} src={bear} alt="stutu bear" />
        <Stack pos="relative" justify="center">
          <Title order={2}>{t('title')}</Title>
          <Text ta="justify">{t('content')}</Text>
          <Anchor
            component="a"
            pos="absolute"
            bottom={0}
            right={0}
            href="/about"
            mt={20}
            underline="always"
            fs="italic"
            fw={300}
            c={APP_COLORS.primary}
          >
            {t('learnMore')}
          </Anchor>
        </Stack>
      </Group>
    </Container>
  );
};

export default IntroductionSection;
