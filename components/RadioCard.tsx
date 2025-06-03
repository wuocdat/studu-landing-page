import { Box, Image, Radio, Stack, Text } from '@mantine/core';
import classes from '../styles/RaidoCard.module.css';

interface RadioCardProps {
  image: string;
  text: string;
  age: string;
}

export default function RadioCard({ image, text, age }: RadioCardProps) {
  return (
    <Radio.Card className={classes.root} radius="md" h="100%" value={text}>
      <Stack align="center">
        <Box flex={1}>
          <Image src={image} />
        </Box>
        <Text ta="center">
          {text}
          <br />
          {age}
        </Text>
        <Radio.Indicator size="lg" />
      </Stack>
    </Radio.Card>
  );
}
