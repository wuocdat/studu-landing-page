'use client';

import { useState } from 'react';
import { Box } from '@mantine/core';
import AgePart from './subComponent/AgePart';
import AmountPart from './subComponent/AmountPart';
import FreeTimePart from './subComponent/FreeTimePart';
import HabitPart from './subComponent/HobitPart';
import IntroSection from './subComponent/IntroSection';
import PurposePart from './subComponent/PurposePart';
import StututorResultSection from './subComponent/StututorResultSection';
import TutorFilterSection from './subComponent/TutorFilterSection';

const TutorPage = () => {
  const [counter, setCounter] = useState(0);

  const handleNext = () => {
    setCounter(counter + 1);
  };

  const handleSkip = () => {
    setCounter(5);
  };

  const handleBack = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      {counter === 0 && <PurposePart onNext={handleNext} onSkip={handleSkip} />}
      {counter === 1 && <AgePart onNext={handleNext} onBack={handleBack} />}
      {counter === 2 && <HabitPart onNext={handleNext} onBack={handleBack} />}
      {counter === 3 && <FreeTimePart onNext={handleNext} onPrev={handleBack} />}
      {counter === 4 && <AmountPart onFinish={handleNext} onPrev={handleBack} />}
      {counter === 5 && (
        <Box py={50}>
          <IntroSection />
          <TutorFilterSection />
          <StututorResultSection />
        </Box>
      )}
    </>
  );
};

export default TutorPage;
