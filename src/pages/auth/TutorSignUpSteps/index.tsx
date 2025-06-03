import { Button, Center, Container, Image, Stack, Stepper, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Stepper.module.css';
import GeneralInfoStep from './Steps/GeneralInfoStep';
import PacmanIcon from '@/components/Icons/Icon/PacmanIcon';
import UploadAvatar from './Steps/UploadAvatarStep';
import EducationStep from './Steps/EducationStep';
import ExpertiseForm from './Steps/ExpertiseForm';
import StudentLevelStep from './Steps/StudentLevelStep';
import ScheduleStep from './Steps/ScheduleStep';
import IntroductionStep from './Steps/IntroductionStep';
import IntroVideoStep from './Steps/IntroVideoStep';

export default function TutorSignUpSteps() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 8 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const stepSubtitles = [
    t('tutor-signup-steps.subtitle-1'),
    t('tutor-signup-steps.pick-avatar'),
    t('tutor-signup-steps.update-education'),
    t('tutor-signup-steps.expertise-title'),
    t('tutor-signup-steps.student-level-title'),
    t('tutor-signup-steps.schedule-title'),
    t('tutor-signup-steps.introduction-title'),
    t('tutor-signup-steps.intro-video-title'),
  ];

  return (
    <Container size="xl" my="xl">
      <Stack>
        <Title order={1} ta="center">
          {t('tutor-signup-steps.title')}
        </Title>
        <Text fz={24} fs="italic" fw={200} ta="center">
          {stepSubtitles[active]}
        </Text>

        <Stepper active={active} classNames={classes}>
          <Stepper.Step label={t('tutor-signup-steps.general-info')}>
            <GeneralInfoStep />
          </Stepper.Step>
          <Stepper.Step label={t('tutor-signup-steps.avatar')}>
            <UploadAvatar />
          </Stepper.Step>
          <Stepper.Step label={t('tutor-signup-steps.education')}>
            <EducationStep />
          </Stepper.Step>
          <Stepper.Step label={t('tutor-signup-steps.expertise')}>
            <ExpertiseForm />
          </Stepper.Step>
          <Stepper.Step label={t('tutor-signup-steps.student-level')}>
            <StudentLevelStep />
          </Stepper.Step>
          <Stepper.Step label={t('tutor-signup-steps.schedule')}>
            <ScheduleStep />
          </Stepper.Step>
          <Stepper.Step label={t('tutor-signup-steps.referral')}>
            <IntroductionStep />
          </Stepper.Step>
          <Stepper.Step label={t('tutor-signup-steps.intro-video')}>
            <IntroVideoStep />
          </Stepper.Step>
        </Stepper>

        <Center component={Stack} align="center" gap={50}>
          <Button mt={20} px={30} leftSection={<PacmanIcon />} onClick={nextStep}>
            {t('tutor-signup-steps.save-next')}
          </Button>
          <Image w={230} src="/svg/plant-pot.svg" />
        </Center>
      </Stack>
    </Container>
  );
}
