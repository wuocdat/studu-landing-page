import { Stack } from '@mantine/core';
import IntroSection from './subComponent/IntroSection';
import TutorFilterSection from './subComponent/TutorFilterSection';

const TutorPage = () => {
  return (
    <Stack py={150}>
      <IntroSection />
      <TutorFilterSection />
    </Stack>
  );
};

export default TutorPage;
