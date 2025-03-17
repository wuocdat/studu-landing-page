import { Stack } from '@mantine/core';
import StutuFeedback from '@/components/StutuFeedback';
import TutorBenefitSection from './subComponents/BenefitSection';
import StepsSection from './subComponents/StepsSection';
import TutorQuestion from './subComponents/TutorQuestion';

const BecomeTutorPage = () => {
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
