'use client';

import { useTranslations } from 'next-intl';
import {
  ActionIcon,
  Anchor,
  Box,
  Divider,
  Grid,
  Group,
  Image,
  Mark,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';

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
    // {
    //   title: t('platform_policies.title'),
    //   links: [
    //     { label: t('platform_policies.terms_of_service'), link: '#' },
    //     { label: t('platform_policies.payment_policy'), link: '#' },
    //     { label: t('platform_policies.code_of_conduct'), link: '#' },
    //     { label: t('platform_policies.privacy_policy'), link: '#' },
    //   ],
    // },
  ];

  const groups = data.map((group, index) => {
    const links = group.links.map((link, index) => (
      <Anchor fz={16} fw={400} key={index} href={link.link}>
        {link.label}
      </Anchor>
    ));

    return (
      <Stack gap="sm" key={index}>
        <Text fw={800} fz={24} style={{ textDecoration: 'underline' }}>
          {group.title}
        </Text>
        {links}
      </Stack>
    );
  });

  return (
    <Stack px={50} pb={50}>
      <Group justify="space-between">
        <Text fz={24} fw={900}>
          <Mark fw={900} bg="transparent" ff="monospace">
            STUTU
          </Mark>{' '}
          - Tie to Shine
        </Text>
        <Group>
          <ActionIcon
            size={56}
            variant="white"
            radius={13}
            styles={{
              root: {
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
              },
            }}
          >
            <Image src="/images/facebook.svg" />
          </ActionIcon>
          <ActionIcon
            size={56}
            variant="white"
            radius={13}
            styles={{
              root: {
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
              },
            }}
          >
            <Image src="/images/linked.svg" />
          </ActionIcon>
          <ActionIcon
            size={56}
            variant="white"
            radius={13}
            styles={{
              root: {
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
              },
            }}
          >
            <Image src="/images/tiktok.svg" />
          </ActionIcon>
          <ActionIcon
            size={56}
            variant="white"
            radius={13}
            styles={{
              root: {
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
              },
            }}
          >
            <Image src="/images/zalo.svg" />
          </ActionIcon>
          <ActionIcon
            size={56}
            variant="white"
            radius={13}
            styles={{
              root: {
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
              },
            }}
          >
            <Image src="/images/threas.svg" />
          </ActionIcon>
          <ActionIcon
            size={56}
            variant="white"
            radius={13}
            styles={{
              root: {
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
              },
            }}
          >
            <Image src="/images/insta.svg" />
          </ActionIcon>
          <ActionIcon
            size={56}
            variant="white"
            radius={13}
            styles={{
              root: {
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
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
          <Title order={2}>Công ty Cổ phần Tư vấn và Giải pháp Giáo dục Studiverse</Title>
          <Text fz={14} fw={400}>
            Điện thoại liên hệ: 096 969 969
          </Text>
          <Text fz={14} fw={400}>
            Email: team@stutu.com
          </Text>
          <Text fz={14} fw={400}>
            Địa chỉ trụ sở: Số nhà N5 khu D ngõ 57 Láng Hạ, Phường Thành Công, Quận Ba Đình, Thành
            phố Hà Nội, Việt Nam
          </Text>
          <Text fz={14} fw={400}>
            Giấy chứng nhận Đăng ký doanh nghiệp số: 016969696969 do Sở Kế hoạch và Đầu tư thành phố
            Hà Nội cấp ngày 17/04/2025
          </Text>
        </Box>
        <Image src="/images/bct.svg" />
      </Group>
      <Stack gap={0} align="center" mt="lg">
        <Text fw={500} fz={14}>
          STUTU.COM © Bản quyền của Công ty Cổ phần Tư vấn và Giải pháp Giáo dục Studiverse
        </Text>
        <Text fz={13} td="underline">
          Tuyên bố miễn trừ trách nhiệm
        </Text>
      </Stack>
    </Stack>
  );
}
