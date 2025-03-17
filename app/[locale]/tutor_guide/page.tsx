import { useTranslations } from 'next-intl';
import { Container, Stack } from '@mantine/core';
import CenterIntroSection from '@/components/CenterIntroSection';
import GuideBook, { GuidePart } from '@/components/GuideBook';

export default function StudentGuidePage() {
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
