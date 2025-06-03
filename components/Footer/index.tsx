'use client';

import { useTranslations } from 'next-intl';
import {
  ActionIcon,
  Anchor,
  Box,
  Container,
  Divider,
  Group,
  Image,
  Mark,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { usePathname } from '@/i18n/navigation';
import APP_COLORS from '@/theme/colors';

const pageWithoutFooter = [
  '/tutor',
  '/welcome',
  '/student_guide',
  '/tutor_guide',
  '/detail_student_guide',
  '/detail_tutor_guide',
];

interface FooterLink {
  title: string;
  links: { label: string; link: string }[];
}
export function Footer() {
  const pathname = usePathname();

  const t = useTranslations('footer');

  const data: FooterLink[] = [
    {
      title: t('general_information.title'),
      links: [
        { label: t('general_information.about-stutu'), link: '/about' },
        { label: t('general_information.join-us'), link: '/join-us' },
        { label: t('general_information.terms'), link: '/terms' },
        { label: t('general_information.code-conduct'), link: '/code_conduct' },
        { label: t('general_information.privacy-policy'), link: '/privacy_policy' },
      ],
    },
    {
      title: t('for_students.title'),
      links: [
        { label: t('for_students.become_student'), link: '#' },
        { label: t('for_students.referral_program'), link: '/referral_program' },
        { label: 'Premium Tutoring', link: '/premium_tutoring' },
        { label: t('for_students.student_guideline'), link: '/student_guide' },
      ],
    },
    {
      title: t('for_tutors.title'),
      links: [
        { label: t('for_tutors.become-tutor'), link: '/become_tutor' },
        { label: t('for_tutors.referral-program'), link: '/referral_program' },
        { label: 'Premium Tutoring', link: '#' },
        { label: t('for_tutors.tutor_guideline'), link: '/tutor_guide' },
      ],
    },
  ];

  const groups = data.map((group, index) => {
    const links = group.links.map((link, index) => (
      <Anchor fz={14} fw={300} key={index} href={link.link}>
        {link.label}
      </Anchor>
    ));

    return (
      <Stack gap="sm" key={index}>
        <Title order={5}>{group.title}</Title>
        {links}
      </Stack>
    );
  });

  if (pageWithoutFooter.some((item) => item === pathname || pathname.includes(item))) {
    return <></>;
  }

  return (
    <Box bg={APP_COLORS.grayBg}>
      <Container size="xl">
        <Stack py="xl">
          <Group justify="space-between">
            <Title order={3}>
              <Mark fw={900} bg="transparent" ff="text">
                STUTU
              </Mark>{' '}
              - Tie to Shine
            </Title>
            <Group>
              <ActionIcon
                size={40}
                variant="white"
                radius={13}
                styles={{
                  root: {
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  },
                }}
              >
                <Image src="/images/facebook.svg" />
              </ActionIcon>
              <ActionIcon
                size={40}
                variant="white"
                radius={13}
                styles={{
                  root: {
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  },
                }}
              >
                <Image src="/images/linked.svg" />
              </ActionIcon>
              <ActionIcon
                size={40}
                variant="white"
                radius={13}
                styles={{
                  root: {
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  },
                }}
              >
                <Image src="/images/tiktok.svg" />
              </ActionIcon>
              <ActionIcon
                size={40}
                variant="white"
                radius={13}
                styles={{
                  root: {
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  },
                }}
              >
                <Image src="/images/zalo.svg" />
              </ActionIcon>
              <ActionIcon
                size={40}
                variant="white"
                radius={13}
                styles={{
                  root: {
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  },
                }}
              >
                <Image src="/images/threas.svg" />
              </ActionIcon>
              <ActionIcon
                size={40}
                variant="white"
                radius={13}
                styles={{
                  root: {
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  },
                }}
              >
                <Image src="/images/insta.svg" />
              </ActionIcon>
              <ActionIcon
                size={40}
                variant="white"
                radius={13}
                styles={{
                  root: {
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  },
                }}
              >
                <Image src="/images/tele.svg" />
              </ActionIcon>
            </Group>
          </Group>
          <Divider />
          <Group justify="space-between" align="flex-start">
            {groups}
          </Group>
          <Divider />
          <Group justify="space-between">
            <Box>
              <Title order={6} fz={13}>
                {t('studiverse-company')}
              </Title>
              <Text fz={11} fw={300}>
                {t('phone-number')}
              </Text>
              <Text fz={11} fw={300}>
                {t('email')}
              </Text>
              <Text fz={11} fw={300}>
                {t('company-address')}
              </Text>
              <Text fz={11} fw={300}>
                {t('business-license')}
              </Text>
            </Box>
            <Image src="/images/bct.svg" />
          </Group>
          <Stack gap={0} align="center" mt="lg">
            <Text fw={400} fz={11}>
              {t('copyright')}
            </Text>
            <Text fz={10} td="underline">
              {t('disclaimer')}
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
