import { use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Stack } from '@mantine/core';
import FrequentlyQuestions from '@/components/FrequentlyQuesions';
import StutuFeedback from '@/components/StutuFeedback';
import { QuestionType } from '@/types';
import TutorBenefitSection from './subComponents/BenefitSection';
import StepsSection from './subComponents/StepsSection';

const BecomeTutorPage = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use<{ locale: string }>(params);

  const t = useTranslations('become_tutor_stutu');

  // Enable static rendering
  setRequestLocale(locale);

  const groceries: QuestionType[] = [
    {
      question: t('questions-section.1.question'),
      answer: t('questions-section.1.answer'),
    },
    {
      question: t('questions-section.2.question'),
      answer: t('questions-section.2.answer'),
    },
    {
      question: t('questions-section.3.question'),
      answer: t('questions-section.3.answer'),
    },
  ];

  return (
    <Stack py={20}>
      <StepsSection />
      <TutorBenefitSection />
      <StutuFeedback title={t('feedback-section.title')} />
      <FrequentlyQuestions title={t('questions-section.title')} data={groceries} />
    </Stack>
  );
};

export default BecomeTutorPage;
