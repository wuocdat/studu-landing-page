'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Markdown from 'react-markdown';
import { Accordion, Anchor, Flex, Stack, Text } from '@mantine/core';
import APP_COLORS from '@/theme/colors';

export type ContentGuide = {
  highlight?: boolean;
  title: string;
  contentMd: string;
};

export type GuidePart = {
  title: string;
  items: ContentGuide[];
};

interface GuideBookProps {
  guides: GuidePart[];
}

export default function GuideBook({ guides }: GuideBookProps) {
  const t = useTranslations('general_information');

  return (
    <Stack>
      {guides.map((guide, index) => (
        <Stack key={index} gap={0}>
          <Text pl="md" fz={30} fw={800}>
            {guide.title}
          </Text>
          <Accordion
            styles={{
              item: {
                paddingTop: 0,
              },
            }}
          >
            {guide.items.map((item, index) => (
              <Accordion.Item key={index} value={item.title}>
                <Accordion.Control
                  styles={{
                    label: {
                      fontWeight: item.highlight ? 800 : 600,
                    },
                  }}
                >
                  {item.title}
                </Accordion.Control>
                <Accordion.Panel>
                  <Markdown>{item.contentMd}</Markdown>
                  <Flex justify="end">
                    <Anchor
                      component={Link}
                      href="/detail_student_guide"
                      fz={22}
                      fs="italic"
                      c={APP_COLORS.primary}
                      fw={300}
                    >
                      {t('see_guide_detail')}
                    </Anchor>
                  </Flex>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Stack>
      ))}
    </Stack>
  );
}
