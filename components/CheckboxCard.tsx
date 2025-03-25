'use client';

import { useState } from 'react';
import { Box, Checkbox, Image, Stack, Text } from '@mantine/core';
import classes from '../styles/CheckboxCard.module.css';

interface CheckboxCardProps {
  image: string;
  text: string;
}

export default function CheckboxCard({ image, text }: CheckboxCardProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Card
      className={classes.root}
      radius="md"
      px="xl"
      py="lg"
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Stack align="center">
        <Box flex={1}>
          <Image src={image} />
        </Box>
        <Text fz={24}>{text}</Text>
        <Checkbox.Indicator size="lg" />
      </Stack>
    </Checkbox.Card>
  );
}
