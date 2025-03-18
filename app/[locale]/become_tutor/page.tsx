import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Stack } from '@mantine/core';
import StutuFeedback from '@/components/StutuFeedback';
import TutorBenefitSection from './subComponents/BenefitSection';
import StepsSection from './subComponents/StepsSection';
import TutorQuestion from './subComponents/TutorQuestion';

const BecomeTutorPage = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use<{ locale: string }>(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <Stack py={20}>
      <StepsSection />
      <TutorBenefitSection />
      <StutuFeedback />
      <TutorQuestion />
    </Stack>
  );
};

export default BecomeTutorPage;
