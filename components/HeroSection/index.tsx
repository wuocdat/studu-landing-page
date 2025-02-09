'use client';

import { Button, Container, Grid, Image, Text, Title } from '@mantine/core';

const HeroSection = () => {
  return (
    <Container size="xl" py="xl">
      <Grid align="center" gutter="md">
        <Grid.Col span={6}>
          <Title order={1} size="h1">
            Knowledge Connection
            <br />
            <Text component="span" inherit fw={900}>
              Open the Door to the Future
            </Text>
          </Title>
          <Text mt="md" size="lg">
            Discover a wide range of lessons across multiple subjects to enhance your knowledge.
            Whether it's Math, Literature, English, or Art, we've got you covered! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Nesciunt ipsum qui deleniti praesentium
            consequuntur eos iste facilis obcaecati, atque beatae vel eligendi, accusamus assumenda
            optio consectetur magnam officiis? Odio, commodi.
          </Text>
          <Button mt="lg" size="lg" radius="md" color="yellow">
            Get started!
          </Button>
        </Grid.Col>
        {/* Right side: Image or illustration */}
        <Grid.Col span={6}>
          <Image
            src="https://via.placeholder.com/400x300.png?text=Your+Image+Here"
            alt="Hero Image"
            radius="md"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HeroSection;
