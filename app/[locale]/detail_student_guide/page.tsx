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

const tocData: TocItem[] = [
  { id: 'registration-guide', title: 'Hướng dẫn đăng ký' },
  { id: 'login-guide', title: 'Hướng dẫn đăng nhập' },
  { id: 'student-rules', title: 'Quy định dành cho học viên' },
  {
    id: 'tutor-selection',
    title: 'Lựa chọn gia sư phù hợp',
    children: [
      { id: 'search-tutor', title: 'Tìm kiếm gia sư' },
      { id: 'report-tutor', title: 'Báo cáo / Chặn gia sư' },
    ],
  },
  {
    id: 'trial-lesson',
    title: 'Buổi học thử',
    children: [
      { id: 'trial-content', title: 'Nội dung buổi học thử' },
      { id: 'free-paid-trial', title: 'Buổi học thử miễn phí & trả phí' },
      { id: 'trial-scheduling', title: 'Hướng dẫn đặt lịch học thử' },
      { id: 'trial-issues', title: 'Các tình huống không mong muốn' },
    ],
  },
  {
    id: 'official-course',
    title: 'Gói học chính thức',
    children: [
      { id: 'course-registration', title: 'Đăng ký gói học chính thức' },
      { id: 'single-lesson', title: 'Mua lẻ từng buổi học' },
      { id: 'join-class', title: 'Vào lớp học' },
      { id: 'schedule-management', title: 'Quản lý lịch học' },
      { id: 'after-class', title: 'Thao tác sau buổi học' },
      { id: 'official-issues', title: 'Các tình huống không mong muốn' },
    ],
  },
  {
    id: 'profile-management',
    title: 'Quản lý hồ sơ',
    children: [
      { id: 'update-info', title: 'Thay đổi thông tin' },
      { id: 'change-password', title: 'Thay đổi mật khẩu' },
    ],
  },
  {
    id: 'payment',
    title: 'Học phí và thanh toán',
    children: [
      { id: 'payment-methods', title: 'Phương pháp thanh toán' },
      { id: 'refund-policy', title: 'Hoàn lại học phí' },
    ],
  },
  {
    id: 'referral-program',
    title: 'Chương trình giới thiệu',
    children: [
      { id: 'become-affiliate', title: 'Trở thành cộng tác viên' },
      { id: 'affiliate-rewards', title: 'Phần thưởng công tác viên' },
    ],
  },
  {
    id: 'premium-tutoring',
    title: 'Chương trình “Premium tutoring”',
  },
];

export default function DetailStudentGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use<{ locale: string }>(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('detailed_guide_students');

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
      <Grid columns={14}>
        <GridCol span={3} offset={1}>
          <Stack
            pos="sticky"
            top={100}
            pb={50}
            h="calc(100vh - 100px)"
            style={{ overflow: 'auto' }}
          >
            {/* <Anchor variant="small" href="#account_registration">
              {t('account_registration.title')}
            </Anchor>
            <Anchor variant="small" href="#login_guide">
              {t('login_guide.title')}
            </Anchor>
            <Anchor variant="small" href="#student_regulations">
              {t('student_regulations.title')}
            </Anchor> */}
            <TableOfContents items={tocData} />
          </Stack>
        </GridCol>
        <GridCol span={8} offset={1}>
          {/* <Stack>
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
          </Stack> */}
          <GuideContentPage locale={locale} />
        </GridCol>
      </Grid>
      <Space h={50} />
      <FooterImageBackground />
    </Stack>
  );
}
