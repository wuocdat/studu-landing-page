import { ReactNode } from 'react';
import NextImage from 'next/image';
import { Image, Stack, Text, Title } from '@mantine/core';
import bear from '@/public/images/bear_with_lamp.svg';

interface CenterIntroSectionProps {
  title: ReactNode;
  subtitle: string;
  image?: string;
  skipImage?: boolean;
}

export default function CenterIntroSection({
  title,
  image,
  subtitle,
  skipImage,
}: CenterIntroSectionProps) {
  return (
    <Stack align="center">
      <Title order={1} ta="center" lh="1.2">
        {title}
      </Title>
      <Text fz={24} variant="subtitle">
        {subtitle}
      </Text>
      {!skipImage && (
        <Image component={NextImage} maw={600} src={image || bear} alt="user_guide" fit="cover" />
      )}
    </Stack>
  );
}
