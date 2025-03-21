'use client';

import { useTranslations } from 'next-intl';
import { Anchor, Box, Grid, Group, Image, Stack, Text } from '@mantine/core';

interface FooterLink {
  title: string;
  links: { label: string; link: string }[];
}
export function Footer() {
  const t = useTranslations();

  const data: FooterLink[] = [
    {
      title: t('general_information.title'),
      links: [
        { label: t('general_information.about_us'), link: '#' },
        { label: t('general_information.our_team'), link: '#' },
        { label: t('general_information.how_stutu_works'), link: '#' },
        { label: t('general_information.direct_questions'), link: '#' },
        { label: t('general_information.contact_us'), link: '#' },
      ],
    },
    {
      title: t('for_students.title'),
      links: [
        { label: t('for_students.why_choose_stutu'), link: '#' },
        { label: t('for_students.find_a_tutor'), link: '#' },
        { label: t('for_students.english_proficiency_test'), link: '#' },
        { label: t('for_students.refer_a_friend'), link: '#' },
        { label: t('for_students.frequently_asked_questions'), link: '#' },
      ],
    },
    {
      title: t('for_tutors.title'),
      links: [
        { label: t('for_tutors.benefits_of_joining'), link: '#' },
        { label: t('for_tutors.registration_guide'), link: '#' },
        { label: t('for_tutors.frequently_asked_questions'), link: '#' },
      ],
    },
    {
      title: t('platform_policies.title'),
      links: [
        { label: t('platform_policies.terms_of_service'), link: '#' },
        { label: t('platform_policies.payment_policy'), link: '#' },
        { label: t('platform_policies.code_of_conduct'), link: '#' },
        { label: t('platform_policies.privacy_policy'), link: '#' },
      ],
    },
  ];

  const groups = data.map((group, index) => {
    const links = group.links.map((link, index) => (
      <Anchor fz={16} fw={400} key={index} href={link.link}>
        {link.label}
      </Anchor>
    ));

    return (
      <Grid.Col key={index} span={3} offset={1}>
        <Stack gap="sm" pb={36}>
          <Text fw={800} fz={24} style={{ textDecoration: 'underline' }}>
            {group.title}
          </Text>
          {links}
        </Stack>
      </Grid.Col>
    );
  });

  return (
    <Box py={50}>
      <Grid columns={17} w="100%">
        {groups}
        <Grid.Col span={4} offset={1}>
          <Text fz={24} fw={900}>
            STUTU - Tie to Shine
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Group>
            <Image src="/images/facebook.svg" />
            <Image src="/images/zalo.svg" />
            <Image src="/images/linked.svg" />
            <Image src="/images/insta.svg" />
            <Image src="/images/big_a.svg" />
          </Group>
        </Grid.Col>
        <Grid.Col span="auto">
          <Stack w="fit-content" gap={0}>
            <Text fz={20} fw={900}>
              Công ty cổ phần tư vấn và giải pháp giáo dục StudiVerse
            </Text>
            <Group justify="space-between">
              <Text fz={20} fw={900}>
                Giấy chứng nhận số: ...
              </Text>
              <Text fz={20} fw={900}>
                Ngày cấp: .../.../2025
              </Text>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
