'use client';

import React from 'react';
import { alpha, Button, Container, Grid, Group, Text, TextInput, Title } from '@mantine/core';

const CTASection: React.FC = () => {
  return (
    <Container size="xl" bg="#1E1E1E" p="xl" style={{ borderRadius: '20px' }}>
      <Grid justify="center" align="stretch">
        <Grid.Col span={5}>
          <Title order={2} c="white" mb="md" ta="center">
            Do you still have any questions?
          </Title>
          <Text c="gray" size="md" mb="lg" ta="center">
            Don't hesitate to leave us your phone number. We will contact you to discuss any
            questions you may have.
          </Text>
          <Group gap={0} bg={alpha('#fff', 0.1)} style={{ borderRadius: '10px' }}>
            <TextInput
              placeholder="Enter your phone number"
              size="md"
              flex={1}
              radius="0px"
              styles={{
                input: {
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'white',
                },
              }}
            />
            <Button color="yellow" style={{ borderRadius: '0 10px 10px 0' }}>
              Subscribe
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default CTASection;
