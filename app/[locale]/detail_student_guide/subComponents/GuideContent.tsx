import { useTranslations } from 'next-intl';
import Markdown from 'react-markdown';
import { AspectRatio, Button, Stack, Text, Title } from '@mantine/core';

interface GuideTrackProps {
  scrollId: string;
  title: string;
  intro?: string;
  link?: string;
  mdContent?: string;
  subContent?: {
    title: string;
    intro?: string;
    link?: string;
    mdContent: string;
  }[];
}

export default function GuideTrack({ title, scrollId, intro, link, mdContent }: GuideTrackProps) {
  const t = useTranslations('general_information');

  return (
    <Stack fz={20}>
      <Title id={scrollId} order={1} style={{ scrollMarginTop: 100 }}>
        {title}
      </Title>
      {intro && <Text fz={20}>{intro}</Text>}
      {link && (
        <>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/mzJ4vCjSt28"
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
          <Button size="xl" style={{ alignSelf: 'center' }}>
            {t('try_now')}
          </Button>
        </>
      )}
      {mdContent && (
        <div>
          <Markdown>{mdContent}</Markdown>
        </div>
      )}
    </Stack>
  );
}
