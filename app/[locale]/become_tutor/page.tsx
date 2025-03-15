import { Stack } from '@mantine/core';
import StutuFeedback from '@/components/StutuFeedback';
import TutorBenefitSection from './subComponents/BenefitSection';
import StepsSection from './subComponents/StepsSection';

const BecomeTutorPage = () => {
  return (
    <Stack py={100}>
      <StepsSection />
      <TutorBenefitSection />
      <StutuFeedback />
    </Stack>
  );
};

export default BecomeTutorPage;
