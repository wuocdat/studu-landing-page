import { ReactNode } from 'react';
import NextImage from 'next/image';
import { Image, Stack, Text } from '@mantine/core';
import bear from '@/public/images/bear_with_lamp.svg';

interface CenterIntroSectionProps {
  title: ReactNode;
  subtitle: string;
  image?: string;
}

export default function CenterIntroSection({ title, image, subtitle }: CenterIntroSectionProps) {
  return (
    <Stack align="center">
      <Text ta="center" lh="100%" fz={64} fw={900}>
        {title}
      </Text>
      <Text fz={24} fw={400} fs="italic">
        {subtitle}
      </Text>
      <Image component={NextImage} maw={600} src={image || bear} alt="user_guide" fit="cover" />
    </Stack>
  );
}
