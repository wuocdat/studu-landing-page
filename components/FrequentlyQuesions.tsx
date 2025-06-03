'use client';

import NextImage from 'next/image';
import { Accordion, Grid, Image, Stack, Title } from '@mantine/core';
import bear from '@/public/images/bear_with_lamp.svg';
import { QuestionType } from '@/types';

interface FrequentlyQuestionsProps {
  title: string;
  data: QuestionType[];
}

const FrequentlyQuestions = ({ title, data }: FrequentlyQuestionsProps) => {
  const items = data.map((item) => (
    <Accordion.Item key={item.question} value={item.question}>
      <Accordion.Control>{item.question}</Accordion.Control>
      <Accordion.Panel>{item.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Stack py={50} px="xl" gap="xl">
      <Title order={2} ta="center">
        {title}
      </Title>
      <Grid columns={11} justify="space-around">
        <Grid.Col span={6}>
          <Accordion>{items}</Accordion>
        </Grid.Col>
        <Grid.Col span={4}>
          <Image component={NextImage} src={bear} alt="bear" fit="contain" />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default FrequentlyQuestions;
