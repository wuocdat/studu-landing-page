import DeleteButton from '@/components/base/DeleteButton';
import UploadFileContainer from '@/components/UploadFileContainer';
import {
  Anchor,
  Center,
  Divider,
  Group,
  Radio,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconChevronDown } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

type CertificateType = {
  name?: string;
  point?: number;
  year?: number;
};

interface FormValues {
  subjects: { certificates: CertificateType[] }[];
}

export default function ExpertiseForm() {
  const { t } = useTranslation();

  const form = useForm<FormValues>({
    initialValues: {
      subjects: [{ certificates: [{}] }],
    },
  });

  const hasMore1Subject = form.values.subjects.length > 1;

  const handleAddNewSubject = () => form.insertListItem('subjects', { certificates: [{}] });

  const handleAddNewCer = (subjectIndex: number) =>
    form.insertListItem(`subjects.${subjectIndex}.certificates`, {});

  const handleRemoveCer = (subjectIndex: number, cerIndex: number) => {
    if (form.values.subjects[subjectIndex].certificates.length > 1) {
      form.removeListItem(`subjects.${subjectIndex}.certificates`, cerIndex);
    } else if (hasMore1Subject) {
      handleRemoveSubject(subjectIndex);
    }
  };

  const handleRemoveSubject = (index: number) => {
    if (form.values.subjects.length <= 1) return;

    form.removeListItem('subjects', index);
  };

  const languages = [
    t('expertise-form.en'),
    t('expertise-form.cn'),
    t('expertise-form.other-lang'),
  ];

  const renderLanguageRadio = languages.map((item, index) => (
    <Radio size="lg" key={index} value={item} label={item} />
  ));

  const fields = form.values.subjects.map((subject, index) => (
    <Stack key={index} gap="xl">
      {index !== 0 && <Divider />}
      <Group>
        <Select
          label={t('expertise-form.teaching-subject')}
          placeholder={t('expertise-form.subject')}
          size="lg"
          rightSection={<IconChevronDown size={20} />}
          data={['React', 'Angular', 'Vue', 'Svelte']}
        />
        <Center flex={1}>
          <Select
            label={t('expertise-form.core-skills')}
            placeholder={t('expertise-form.skill')}
            size="lg"
            rightSection={<IconChevronDown size={20} />}
            data={['React', 'Angular', 'Vue', 'Svelte']}
          />
        </Center>
      </Group>
      <Stack gap="sm">
        {subject.certificates.map((_, cerIndex) => (
          <Group key={cerIndex} gap="xl">
            <Group grow gap={50} flex={1}>
              <TextInput
                {...form.getInputProps(`subjects.${index}.certificates.${cerIndex}.name`)}
                size="lg"
                placeholder={t('expertise-form.certificate')}
              />
              <TextInput
                {...form.getInputProps(`subjects.${index}.certificates.${cerIndex}.point`)}
                size="lg"
                placeholder={t('expertise-form.optional-point-field')}
              />
              <TextInput
                {...form.getInputProps(`subjects.${index}.certificates.${cerIndex}.year`)}
                size="lg"
                placeholder={t('expertise-form.issued-year')}
              />
            </Group>
            <DeleteButton
              visibility={hasMore1Subject || subject.certificates.length > 1}
              onClick={() => handleRemoveCer(index, cerIndex)}
            />
          </Group>
        ))}
        <Anchor w="max-content" mt="xs" onClick={() => handleAddNewCer(index)}>
          {t('expertise-form.add-other-cer')}
        </Anchor>
      </Stack>
    </Stack>
  ));

  return (
    <Stack gap="xl">
      <Radio.Group
        name="language"
        label={t('expertise-form.teaching-language')}
        withAsterisk
        styles={{
          label: {
            fontSize: 20,
          },
        }}
      >
        <Group grow mt="xs">
          {renderLanguageRadio}
        </Group>
      </Radio.Group>
      <Stack gap="xs">
        {fields}
        <Anchor w="max-content" onClick={handleAddNewSubject}>
          {t('expertise-form.add-other-subject')}
        </Anchor>
      </Stack>
      <Stack gap="xs">
        <UploadFileContainer
          title={t('expertise-form.upload-cer-photo')}
          description={t('expertise-form.file-note')}
        />
        <Text size="sm" fs="italic" fw={300} ta="center">
          {t('expertise-form.file-guide')}{' '}
          <Anchor underline="always">{t('expertise-form.here')}</Anchor>
        </Text>
      </Stack>
    </Stack>
  );
}
