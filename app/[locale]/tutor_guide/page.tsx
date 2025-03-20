import { useTranslations } from 'next-intl';
import { Container, Stack } from '@mantine/core';
import CenterIntroSection from '@/components/CenterIntroSection';
import GuideBook, { GuidePart } from '@/components/GuideBook';

export default function StudentGuidePage() {
  const t = useTranslations('tutor_guide');
  const guides: GuidePart[] = [
    {
      title: t('initial_steps.title'),
      items: [
        {
          title: t('initial_steps.registration_process.title'),
          contentMd: t('initial_steps.registration_process.md_content'),
        },
        {
          title: t('initial_steps.avatar_guidelines.title'),
          contentMd: t('initial_steps.avatar_guidelines.md_content'),
        },
        {
          title: t('initial_steps.intro_video_guidelines.title'),
          contentMd: t('initial_steps.intro_video_guidelines.md_content'),
        },
        {
          title: t('initial_steps.self_introduction_tips.title'),
          contentMd: t('initial_steps.self_introduction_tips.md_content'),
        },
        {
          title: t('initial_steps.info_verification_guide.title'),
          contentMd: t('initial_steps.info_verification_guide.md_content'),
        },
        {
          title: t('initial_steps.tuition_notes.title'),
          contentMd: t('initial_steps.tuition_notes.md_content'),
        },
        {
          title: t('initial_steps.tutor_status.title'),
          contentMd: t('initial_steps.tutor_status.md_content'),
        },
        {
          title: t('initial_steps.tutor_regulations.title'),
          contentMd: t('initial_steps.tutor_regulations.md_content'),
          highlight: true,
        },
        {
          title: t('initial_steps.student_reporting.title'),
          contentMd: t('initial_steps.student_reporting.md_content'),
          highlight: true,
        },
      ],
    },
    {
      title: t('personal_schedule_management.title'),
      items: [
        {
          title: t('personal_schedule_management.setup_work_schedule.title'),
          contentMd: t('personal_schedule_management.setup_work_schedule.md_content'),
        },
        {
          title: t('personal_schedule_management.urgent_trial_booking.title'),
          contentMd: t('personal_schedule_management.urgent_trial_booking.md_content'),
        },
      ],
    },
    {
      title: t('class_management.title'),
      items: [
        {
          title: t('class_management.registration_confirmation.title'),
          contentMd: t('class_management.registration_confirmation.md_content'),
        },
        {
          title: t('class_management.class_link_provision.title'),
          contentMd: t('class_management.class_link_provision.md_content'),
        },
        {
          title: t('class_management.class_rescheduling.title'),
          contentMd: t('class_management.class_rescheduling.md_content'),
        },
        {
          title: t('class_management.post_class_actions.title'),
          contentMd: t('class_management.post_class_actions.md_content'),
        },
        {
          title: t('class_management.unwanted_situations.title'),
          contentMd: t('class_management.unwanted_situations.md_content'),
        },
      ],
    },
    {
      title: t('profile_management.title'),
      items: [
        {
          title: t('profile_management.edit_personal_info.title'),
          contentMd: t('profile_management.edit_personal_info.md_content'),
        },
        {
          title: t('profile_management.change_password.title'),
          contentMd: t('profile_management.change_password.md_content'),
        },
        {
          title: t('profile_management.update_tuition_fee.title'),
          contentMd: t('profile_management.update_tuition_fee.md_content'),
        },
        {
          title: t('profile_management.hide_profile.title'),
          contentMd: t('profile_management.hide_profile.md_content'),
        },
        {
          title: t('profile_management.delete_profile.title'),
          contentMd: t('profile_management.delete_profile.md_content'),
        },
        {
          title: t('profile_management.income_management.title'),
          contentMd: t('profile_management.income_management.md_content'),
          highlight: true,
        },
        {
          title: t('profile_management.performance_management.title'),
          contentMd: t('profile_management.performance_management.md_content'),
          highlight: true,
        },
        {
          title: t('profile_management.advice_section.title'),
          contentMd: t('profile_management.advice_section.md_content'),
          highlight: true,
        },
      ],
    },
  ];

  return (
    <Stack my={120} gap={100}>
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
    </Stack>
  );
}
