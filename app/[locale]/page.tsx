import { useTranslations } from 'next-intl';
import ActivitySection from '@/components/ActivitySection';
import HeroSection from '@/components/HeroSection';
import AutonomyIcon from '@/components/icons/AutonomyIcon';
import CalendarIcon from '@/components/icons/CalendarIcon';
import ClarityIcon from '@/components/icons/ClarityIcon';
import FlexIcon from '@/components/icons/FlexIcon';
import MobileIcon from '@/components/icons/MobileIcon';
import PizzaIcon from '@/components/icons/PizzaIcon';
import IntroductionSection from '@/components/IntroductionSection';
import RoadmapSection from '@/components/RoadmapSection';
import TutorCarousel from '@/components/StutorPreview';
import StutuFeedback from '@/components/StutuFeedback';

export default function HomePage() {
  const t = useTranslations();

  const stutuBenefits = [
    {
      icon: <ClarityIcon />,
      title: t('become_student_stutu.transparency.title'),
      description: t('become_student_stutu.transparency.description'),
    },
    {
      icon: <AutonomyIcon />,
      title: t('become_student_stutu.autonomy.title'),
      description: t('become_student_stutu.autonomy.description'),
    },
    {
      icon: <FlexIcon />,
      title: t('become_student_stutu.flexibility.title'),
      description: t('become_student_stutu.flexibility.description'),
    },
  ];

  const tutorBenefits = [
    {
      icon: <CalendarIcon />,
      title: t('become_tutor_stutu.proactive.title'),
      description: t('become_tutor_stutu.proactive.description'),
    },
    {
      icon: <MobileIcon />,
      title: t('become_tutor_stutu.secure.title'),
      description: t('become_tutor_stutu.secure.description'),
    },
    {
      icon: <PizzaIcon />,
      title: t('become_tutor_stutu.no_commission.title'),
      description: t('become_tutor_stutu.no_commission.description'),
    },
  ];

  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ActivitySection
        title={t('become_student_stutu.title')}
        actionTitle={t('become_student_stutu.button')}
        description={t('become_student_stutu.subtitle')}
        items={stutuBenefits}
      />
      <ActivitySection
        title={t('become_tutor_stutu.title')}
        actionTitle={t('become_tutor_stutu.button')}
        description={t('become_tutor_stutu.subtitle')}
        items={tutorBenefits}
      />
      <RoadmapSection />
      <TutorCarousel />
      <StutuFeedback />
    </>
  );
}
