import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Container, Image, Stack } from '@mantine/core';
import IntroComponent from '@/components/IntroComponent';
import relationShip from '@/public/images/friend.svg';

const IntroSection = () => {
  const t = useTranslations('find_tutors');

  return (
    <Container>
      <Stack align="center" gap={100}>
        <IntroComponent title={t('title')} description={t('subtitle')} />
        <Image component={NextImage} w={650} src={relationShip} alt="relationShip" />
      </Stack>
    </Container>
  );
};

export default IntroSection;
