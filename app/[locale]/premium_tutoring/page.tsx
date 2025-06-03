import { useTranslations } from 'next-intl';
import { Box, Button, Image, Stack, Text, Title } from '@mantine/core';
import ActivitySection from '@/components/ActivitySection';
import FrequentlyQuestions from '@/components/FrequentlyQuesions';
import PacmanIcon from '@/components/icons/PacmanIcon';
import { QuestionType } from '@/types';
import CommentsSection from './SubComponents/CommentsSection';
import PremiumTutoringWorkSection from './SubComponents/PremiumTutoringWorkSection';

export default function PremiumTutoringPage() {
  const tCommon = useTranslations('shared_text');
  const t = useTranslations('premium_tutoring');

  const tutorBenefits = [
    {
      icon: <Image src="/images/premium_tutoring_comunication.svg" alt="Clarity" />,
      title: t('exclusive_to_premium_tutoring.live_learning.title'),
      description: t('exclusive_to_premium_tutoring.live_learning.content'),
    },
    {
      icon: <Image src="/images/premium_tutoring_calendar.svg" alt="Autonomy" />,
      title: t('exclusive_to_premium_tutoring.priority_schedule.title'),
      description: t('exclusive_to_premium_tutoring.priority_schedule.content'),
    },
    {
      icon: <Image src="/images/premium_tutoring_location.svg" alt="Flexibility" />,
      title: t('exclusive_to_premium_tutoring.flexible_location.title'),
      description: t('exclusive_to_premium_tutoring.flexible_location.content'),
    },
  ];

  const frequentlyQuestions: QuestionType[] = [
    {
      question: t('frequently_asked_questions.1.question'),
      answer: t('frequently_asked_questions.1.answer'),
    },
    {
      question: t('frequently_asked_questions.2.question'),
      answer: t('frequently_asked_questions.2.answer'),
    },
    {
      question: t('frequently_asked_questions.3.question'),
      answer: t('frequently_asked_questions.3.answer'),
    },
  ];

  return (
    <Stack my={20}>
      <Stack align="center" gap={0}>
        <Title order={1}>{t('title')}</Title>
        <Text variant="subtitle">{t('subtitle')}</Text>
        <Button leftSection={<PacmanIcon />} mt={50}>
          {tCommon('try_now')}
        </Button>
      </Stack>
      <Box>
        <Image src="/images/premium_tutoring_hero_section.svg" alt="Premium Tutoring" />
      </Box>
      <ActivitySection
        title={t('exclusive_to_premium_tutoring.title')}
        description={t('exclusive_to_premium_tutoring.subtitle')}
        actionTitle={tCommon('try_now')}
        items={tutorBenefits}
      />
      <PremiumTutoringWorkSection />
      <CommentsSection />
      <FrequentlyQuestions
        title={t('frequently_asked_questions.title')}
        data={frequentlyQuestions}
      />
    </Stack>
  );
}
