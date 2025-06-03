import { Anchor, Container, Group, Image, Stack, Text, Textarea, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

type IntroductionFromProps = {
  title: string;
  description: string;
  placeholder: string;
  maxLetterAmount: number;
};

const IntroductionForm = ({
  title,
  description,
  placeholder,
  maxLetterAmount,
}: IntroductionFromProps) => {
  return (
    <Stack>
      <Group align="flex-end">
        <Image src="/svg/half-body-bear.svg" />
        <Title mb="md" order={4}>
          {title}
        </Title>
      </Group>
      <Text size="lg" ta="justify">
        {description}
      </Text>
      <Textarea
        size="md"
        maxLength={maxLetterAmount}
        placeholder={placeholder}
        rows={5}
        radius="md"
      />
      <Text mt={-8} size="lg" fw={300}>
        0/200
      </Text>
    </Stack>
  );
};

export default function IntroductionStep() {
  const { t } = useTranslation();

  return (
    <Container size="md">
      <Stack gap="xl">
        <IntroductionForm
          title={t('introduction-form.1.title')}
          description={t('introduction-form.1.description')}
          placeholder={t('introduction-form.1.placeholder')}
          maxLetterAmount={200}
        />

        <IntroductionForm
          title={t('introduction-form.2.title')}
          description={t('introduction-form.2.description')}
          placeholder={t('introduction-form.2.placeholder')}
          maxLetterAmount={30}
        />
        <Text size="lg" fs="italic" fw={300}>
          {t('introduction-form.guide')} <Anchor>{t('tutor-signup-steps.here')}</Anchor>
        </Text>
      </Stack>
    </Container>
  );
}
