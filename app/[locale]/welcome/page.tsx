import { use } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Button, Card, CardSection, Group, Image, Stack } from '@mantine/core';

const WelcomePage = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use<{ locale: string }>(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('welcome');

  return (
    <Stack h="100vh" p="xl" pt={100}>
      <Group gap="xl" mt={50} grow>
        <Card shadow="md" withBorder py="xl" radius={10} miw={500}>
          <CardSection>
            <Image
              height={432}
              width={500}
              component={NextImage}
              src="/images/learner.svg"
              alt="tutor guide"
              fit="contain"
            />
          </CardSection>
          <Button
            component={Link}
            href="/"
            variant="hover"
            size="xl"
            fz={26}
            mt={24}
            miw={250}
            style={{ alignSelf: 'center' }}
          >
            {t('learner')}
          </Button>
        </Card>
        <Card shadow="md" withBorder py="xl" radius={10} miw={500}>
          <CardSection>
            <Image
              height={432}
              width={500}
              component={NextImage}
              src="/images/tutor.svg"
              alt="tutor guide"
              fit="contain"
            />
          </CardSection>
          <Button
            component={Link}
            href="/become_tutor"
            variant="hover"
            size="xl"
            fz={26}
            mt={24}
            miw={250}
            style={{ alignSelf: 'center' }}
          >
            {t('tutor')}
          </Button>
        </Card>
      </Group>
    </Stack>
  );
};

export default WelcomePage;
