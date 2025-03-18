import { use } from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Anchor, Container, Grid, GridCol, Image, Stack, Text, TextInput } from '@mantine/core';
import introImage from '@/public/images/user_with_laptop.svg';
import GuideTrack from './subComponents/GuideContent';

export default function DetailStudentGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use<{ locale: string }>(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('detailed_guide_students');

  return (
    <Stack my={70}>
      <Container size="xl">
        <Grid columns={13}>
          <GridCol span={8}>
            <Stack h={500}>
              <Text fz={64} fw={900} lh="100%">
                {t('title')}
              </Text>
              <Text fz={22} fw={300} fs="italic">
                {t('subtitle')}
              </Text>
              <TextInput
                maw={400}
                placeholder="Tìm kiếm từ khoá"
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
      <Grid>
        <GridCol span={3} offset={1}>
          <Anchor href="#account_registration">{t('login_guide.title')}</Anchor>
        </GridCol>
        <GridCol span={7}>
          <Stack>
            <GuideTrack
              scrollId="account_registration"
              title={t('account_registration.title')}
              intro={t('account_registration.intro')}
              link="abc"
              mdContent={t('account_registration.md_content')}
            />
            <GuideTrack
              scrollId="login_guide"
              title={t('login_guide.title')}
              intro={t('login_guide.intro')}
              link="abc"
              mdContent={t('login_guide.md_content')}
            />
            <GuideTrack
              scrollId="student_regulations"
              title={t('student_regulations.title')}
              mdContent={t.raw('student_regulations.md_content')}
            />
          </Stack>
        </GridCol>
      </Grid>
    </Stack>
  );
}
