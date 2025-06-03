import {
  ActionIcon,
  Anchor,
  Container,
  Flex,
  Group,
  Image,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './EducationStep.module.css';
import UploadFileContainer from '@/components/UploadFileContainer';

export default function EducationStep() {
  const form = useForm({
    initialValues: {
      educations: [{ university: 'John Doe', major: 'john@mantine.dev' }],
    },
  });

  const handleAddNewEducation = () =>
    form.insertListItem('educations', { university: '', major: '' });
  const handleRemoveEducation = (index: number) => form.removeListItem('educations', index);

  const fields = form.values.educations.map((_, index) => (
    <Stack key={index} mt="lg">
      <Select
        maw={310}
        label={index === 0 ? 'Trình độ học vấn cao nhất' : 'Học vấn khác'}
        withAsterisk={index === 0}
        placeholder="Pick value"
        value={'Đang học đại học'}
        size="lg"
        rightSection={<IconChevronDown size={20} />}
        data={['Đang học đại học', 'Angular', 'Vue', 'Svelte']}
      />
      <Group gap="lg" align="center">
        <Flex flex={1} classNames={form.values.educations.length !== index + 1 ? classes : {}}>
          <Group flex={1} pb="lg" grow mb={1} gap={50} style={{ border: '2px solid white' }}>
            <TextInput
              {...form.getInputProps(`educations.${index}.university`)}
              size="lg"
              placeholder="Trường*"
            />
            <TextInput
              {...form.getInputProps(`educations.${index}.major`)}
              size="lg"
              placeholder="Chuyên ngành*"
            />
          </Group>
        </Flex>
        <ActionIcon
          mb="lg"
          size="sm"
          variant="transparent"
          style={{ visibility: index === 0 ? 'hidden' : 'visible' }}
          onClick={() => handleRemoveEducation(index)}
        >
          <Image src="/svg/trash.svg" />
        </ActionIcon>
      </Group>
    </Stack>
  ));

  return (
    <Container size="lg">
      <Stack gap={0}>
        {fields}
        <Anchor size="md" variant="dark" onClick={handleAddNewEducation}>
          + Thêm học vấn khác
        </Anchor>
        <UploadFileContainer
          title="Tải ảnh chụp bằng cấp"
          description="Bạn nên sử dụng các định dạng sau: SVG, JPG, PNG và PDF"
        />
        <Text size="sm" fs="italic" fw={300} ta="center">
          Vui lòng tải lên ảnh chụp bằng cấp chính xác và rõ thông tin với định dạng hợp lệ (tối đa
          ...MB). Xem hướng dẫn <Anchor underline="always">tại đây</Anchor>
        </Text>
      </Stack>
    </Container>
  );
}
