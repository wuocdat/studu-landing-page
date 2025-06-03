import { use } from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import {
  Container,
  Grid,
  GridCol,
  Image,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import FooterImageBackground from '@/components/FooterImageBackground';
import { TableOfContents, TocItem } from '@/components/TOC/TocItemComponent';
import introImage from '@/public/images/user_with_laptop.svg';
import GuideContentPage from './subComponents/GuideContent';

export default function DetailTutorGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use<{ locale: string }>(params);

  // Enable static rendering
  setRequestLocale(locale);

  const tShared = useTranslations('shared_text');
  const t = useTranslations('detailed_guide_tutors');

  const tocData: TocItem[] = [
    {
      id: 'initial-steps',
      title: t('toc.initial_steps.title'),
      children: [
        { id: 'registration-process', title: t('toc.initial_steps.registration_process') },
        { id: 'avatar-guidelines', title: t('toc.initial_steps.avatar_guidelines') },
        { id: 'intro-video-guidelines', title: t('toc.initial_steps.intro_video_guidelines') },
        {
          id: 'self-introduction-guidelines',
          title: t('toc.initial_steps.self_introduction_guidelines'),
        },
        {
          id: 'information-verification-guide',
          title: t('toc.initial_steps.information_verification_guide'),
        },
        { id: 'tuition-guidelines', title: t('toc.initial_steps.tuition_guidelines') },
        { id: 'tutor-profile-statuses', title: t('toc.initial_steps.tutor_profile_statuses') },
      ],
    },
    { id: 'tutor-regulations', title: t('toc.initial_steps.tutor_regulations') },
    { id: 'report-block-student', title: t('toc.initial_steps.report_block_student') },
    {
      id: 'personal-schedule-management',
      title: t('toc.initial_steps.persional_schedule_management'),
      children: [
        { id: 'work-schedule-setup', title: t('toc.initial_steps.work_schedule_setup') },
        {
          id: 'student-last-minute-trial-booking',
          title: t('toc.initial_steps.student_last_minute_trial_booking'),
        },
      ],
    },
    {
      id: 'class-session-management',
      title: t('toc.initial_steps.class_session_management'),
      children: [
        {
          id: 'enrollment-confirmation',
          title: t('toc.class_session_management.enroll_confirmation'),
        },
        { id: 'provide-class-link', title: t('toc.class_session_management.provide_class_link') },
        {
          id: 'reschedule-class-session',
          title: t('toc.class_session_management.reschedule_class_session'),
        },
        { id: 'post-class-actions', title: t('toc.class_session_management.post_class_actions') },
        {
          id: 'unexpected-scenarios',
          title: t('toc.class_session_management.unexpected_scenarios'),
        },
      ],
    },
    {
      id: 'profile-management',
      title: t('toc.profile_management.title'),
      children: [
        {
          id: 'personal-information-update',
          title: t('toc.profile_management.personal_info_update'),
        },
        { id: 'password-change', title: t('toc.profile_management.password_change') },
        { id: 'tuition-fee-update', title: t('toc.profile_management.tuition_fee_update') },
        { id: 'profile-hidden', title: t('toc.profile_management.profile_hidden') },
        { id: 'profile-deletion', title: t('toc.profile_management.profile_deletion') },
      ],
    },
    {
      id: 'income-management',
      title: t('toc.income_management.title'),
      children: [
        { id: 'session-salary-basis', title: t('toc.income_management.session_salary_basis') },
        { id: 'payment-cycle', title: t('toc.income_management.payment_cycle') },
        { id: 'payment-method', title: t('toc.income_management.payment_method') },
        { id: 'tutor-tax-obligations', title: t('toc.income_management.tutor_tax_obligations') },
      ],
    },
    { id: 'performance-management', title: t('toc.performance-management.title') },
    {
      id: 'general-tips',
      title: t('toc.general-tips.title'),
      children: [
        {
          id: 'trial-class-impression-tips',
          title: t('toc.general-tips.trial_class_impression_tips'),
        },
        { id: 'student-retention', title: t('toc.general-tips.student_retention') },
        { id: 'badge-achievement', title: t('toc.general-tips.badge-achievement') },
      ],
    },
  ];

  return (
    <Stack mt={70}>
      <Container size="xl">
        <Grid columns={13}>
          <GridCol span={8}>
            <Stack h={500}>
              <Title order={1} lh="1.2">
                {t('title')}
              </Title>
              <Text fz={22} variant="subtitle">
                {t('subtitle')}
              </Text>
              <TextInput
                maw={400}
                placeholder={tShared('search_keyword')}
                styles={{
                  input: {
                    borderRadius: 6,
                    fontSize: 22,
                  },
                }}
              />
            </Stack>
          </GridCol>
          <GridCol span={5}>
            <Image component={NextImage} src={introImage} alt="student guide" fit="contain" />
          </GridCol>
        </Grid>
      </Container>
      <Grid columns={14}>
        <GridCol span={3} offset={1}>
          <Stack
            pos="sticky"
            top={100}
            pb={50}
            h="calc(100vh - 100px)"
            style={{ overflow: 'auto' }}
          >
            <TableOfContents items={tocData} />
          </Stack>
        </GridCol>
        <GridCol span={8} offset={1}>
          <GuideContentPage locale={locale} />
        </GridCol>
      </Grid>
      <Space h={50} />
      <FooterImageBackground />
    </Stack>
  );
}
