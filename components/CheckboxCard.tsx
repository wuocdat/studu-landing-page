'use client';

import { useState } from 'react';
import { Box, Checkbox, Image, Stack, Text } from '@mantine/core';
import classes from '../styles/CheckboxCard.module.css';

interface CheckboxCardProps {
  image: string;
  text: string;
  value?: string;
}

export default function CheckboxCard({ image, text, value }: CheckboxCardProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Card
      className={classes.root}
      radius="md"
      px="xl"
      py="lg"
      h="100%"
      value={text}
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Stack align="center">
        <Box flex={1}>
          <Image src={image} />
        </Box>
        <Stack gap={0} ta="center">
          <Text mt="xs" lh="100%">
            {text}
          </Text>
          {value && <Text lh="100%">{value}</Text>}
        </Stack>
        <Checkbox.Indicator size="md" />
      </Stack>
    </Checkbox.Card>
  );
}
