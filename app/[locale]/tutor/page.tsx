import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Stack } from '@mantine/core';
import IntroSection from './subComponent/IntroSection';
import StututorResultSection from './subComponent/StututorResultSection';
import TutorFilterSection from './subComponent/TutorFilterSection';

const TutorPage = ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = use<{ locale: string }>(params);

  // Enable static rendering
  setRequestLocale(locale);
  return (
    <Stack py={70}>
      <IntroSection />
      <TutorFilterSection />
      <StututorResultSection />
    </Stack>
  );
};

export default TutorPage;
