'use client';

import { useState } from 'react';
import { Box, Image, Radio, Stack, Text } from '@mantine/core';
import classes from '../styles/RaidoCard.module.css';

interface RadioCardProps {
  image: string;
  text: string;
  age: string;
}

export default function RadioCard({ image, text, age }: RadioCardProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Radio.Card
      className={classes.root}
      radius="md"
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Stack align="center">
        <Box flex={1}>
          <Image src={image} />
        </Box>
        <Text ta="center" fz={24}>
          {text}
          <br />
          {age}
        </Text>
        <Radio.Indicator size="lg" />
      </Stack>
    </Radio.Card>
  );
}
