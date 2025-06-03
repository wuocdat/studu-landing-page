import { useTranslations } from 'next-intl';
import { Box, Button, Center, Container, Image, Stack } from '@mantine/core';
import CenterIntroSection from '@/components/CenterIntroSection';
import GuideBook, { GuidePart } from '@/components/GuideBook';
import PacmanIcon from '@/components/icons/PacmanIcon';

const trialSectionInfo = [
  'session_content',
  'free_and_paid_sessions',
  'booking_guide',
  'unwanted_situations',
];

const officialCourseInfo = [
  'course_registration',
  'single_lesson_purchase',
  'class_entry',
  'schedule_management',
  'post_class_actions',
  'unwanted_situations',
  'course_cancellation',
];

export default function StudentGuidePage() {
  const tShared = useTranslations('shared_text');
  const t = useTranslations('student_guide');
  const guides: GuidePart[] = [
    {
      title: t('initial_steps.title'),
      items: [
        {
          title: t('initial_steps.account_registration.title'),
          contentMd: t('initial_steps.account_registration.md_content'),
        },
        {
          title: t('initial_steps.login_guide.title'),
          contentMd: t('initial_steps.login_guide.md_content'),
        },
        {
          title: t('initial_steps.student_regulations.title'),
          contentMd: t('initial_steps.student_regulations.md_content'),
        },
        {
          title: t('initial_steps.profile_update.title'),
          contentMd: t('initial_steps.profile_update.md_content'),
        },
        {
          title: t('initial_steps.password_change.title'),
          contentMd: t('initial_steps.password_change.md_content'),
        },
      ],
    },
    {
      title: t('tutor_selection.title'),
      items: [
        {
          title: t('tutor_selection.search_tutor.title'),
          contentMd: t('tutor_selection.search_tutor.md_content'),
        },
        {
          title: t('tutor_selection.report_block_tutor.title'),
          contentMd: t('tutor_selection.report_block_tutor.md_content'),
        },
      ],
    },
    {
      title: t('trial_session_info.title'),
      items: trialSectionInfo.map((item) => ({
        title: t(`trial_session_info.${item}.title`),
        contentMd: t(`trial_session_info.${item}.md_content`),
      })),
    },
    {
      title: t('official_course_info.title'),
      items: officialCourseInfo.map((item) => ({
        title: t(`official_course_info.${item}.title`),
        contentMd: t(`official_course_info.${item}.md_content`),
      })),
    },
    {
      title: t('tuition_and_payment.title'),
      items: [
        {
          title: t('tuition_and_payment.payment_methods.title'),
          contentMd: t('tuition_and_payment.payment_methods.md_content'),
        },
        {
          title: t('tuition_and_payment.tuition_refund.title'),
          contentMd: t('tuition_and_payment.tuition_refund.md_content'),
        },
      ],
    },
    {
      title: t('other_programs.title'),
      items: [
        {
          title: t('other_programs.referral_program.title'),
          contentMd: t('other_programs.referral_program.md_content'),
        },
        {
          title: t('other_programs.premium_tutoring.title'),
          contentMd: t('other_programs.premium_tutoring.md_content'),
        },
      ],
    },
  ];

  return (
    <Stack mt={120} gap={100}>
      <CenterIntroSection
        title={t.rich('title', {
          br: (chunks) => (
            <>
              <br />
              {chunks}
            </>
          ),
        })}
        subtitle={t('subtitle')}
      />
      <Container w="100%" size="xl">
        <GuideBook guides={guides} />
      </Container>
      <Box pos="relative">
        <Center pos="absolute" top={50} left={0} right={0}>
          <Button leftSection={<PacmanIcon />}>{tShared('try_now')}</Button>
        </Center>
        <Image src="/images/footer_bg_1.svg" />
      </Box>
    </Stack>
  );
}
