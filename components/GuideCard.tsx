'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { Button, Card, Image } from '@mantine/core';
import classes from './styles/GuideCard.module.css';

interface GuideCardProps {
  image: string;
  text: string;
  href: string;
  onClick?: () => {};
}

export default function ({ image, text, href, onClick }: GuideCardProps) {
  return (
    <Card shadow="md" miw={300} withBorder py="xl" radius={10} classNames={{ root: classes.root }}>
      <Card.Section>
        <Image component={NextImage} h={132} src={image} alt="tutor guide" fit="contain" />
      </Card.Section>
      <Button
        component={Link}
        href={href}
        variant="hover"
        size="xl"
        fz={26}
        mt={24}
        onClick={onClick}
      >
        {text}
      </Button>
    </Card>
  );
}
