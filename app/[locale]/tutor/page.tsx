import { Stack } from '@mantine/core';
import IntroSection from './subComponent/IntroSection';
import StututorResultSection from './subComponent/StututorResultSection';
import TutorFilterSection from './subComponent/TutorFilterSection';

const TutorPage = () => {
  return (
    <Stack py={150}>
      <IntroSection />
      <TutorFilterSection />
      <StututorResultSection />
    </Stack>
  );
};

export default TutorPage;
