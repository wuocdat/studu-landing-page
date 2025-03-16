'use client';

import Markdown from 'react-markdown';
import { Accordion, Stack, Text } from '@mantine/core';

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
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Stack>
      ))}
    </Stack>
  );
}
