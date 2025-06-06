import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import {
  Anchor,
  Button,
  Card,
  Checkbox,
  CheckboxProps,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import StutuBadge from '../StutuBadge';

interface TutorCardProps {
  name: string;
  university: string;
  certification: string;
  experience: string;
  price: string;
  image: string;
  langue?: string;
  star?: number;
}

interface InfoRowProps {
  icon: string;
  text: string;
}

const InfoRow = ({ icon, text }: InfoRowProps) => {
  return (
    <Group gap="xs">
      <Image src={icon} />
      <Text fz={12} fw={400}>
        {text}
      </Text>
    </Group>
  );
};

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconHeart {...others} /> : <IconHeartFilled {...others} />;

export default function TutorCard({
  name,
  university,
  certification,
  experience,
  price,
  image,
  star = 5,
  langue = 'Tiếng Anh',
}: TutorCardProps) {
  const t = useTranslations('find_tutors');

  return (
    <Card radius="lg" m="md" padding="lg" shadow="sm">
      <Card.Section>
        <Image src={image} h={280} alt={name} fit="cover" />
      </Card.Section>

      <Group justify="space-between" align="flex-start" mt="md">
        <Stack gap={0}>
          <Title order={6}>{name}</Title>
          <Group gap={6}>
            <StutuBadge icon="/images/cup.svg" text="STUTUtor" tooltip={t('STUTUtor_badge')} />
            <StutuBadge
              icon="/images/flower.svg"
              text="Professional"
              tooltip={t('professional_badge')}
            />
          </Group>
        </Stack>
        <Group gap={4}>
          <Text fz={16} fw={600}>
            {star}
          </Text>
          <Image h={32} src="/images/pink_star.svg" />
        </Group>
      </Group>

      <Stack gap={4} mt="sm">
        <InfoRow icon="/images/collect.svg" text={university} />
        <InfoRow icon="/images/language.svg" text={langue} />
        <InfoRow icon="/images/cer_icon.svg" text={certification} />
        <InfoRow icon="/images/exper.svg" text={experience} />
      </Stack>

      <Text fz={13} fw={400} mt="md" ta="justify" lineClamp={3}>
        “Mình tin rằng học ngoại ngữ không khó. Bạn chỉ cần có một người đồng hành phù hợp. Và mình
        có thể trở thành người mà bạn đang tìm kiếm.”
      </Text>

      <Text fz={13} fw={700} mt="md" ta="center">
        {price}
      </Text>

      <Group mt="lg" justify="space-evenly">
        <Button miw={100} size="sm" h="auto" py="6px" fz={12} radius="md">
          Học thử
        </Button>
        <Button variant="outline" miw={100} size="sm" h="auto" py="6px" fz={12} radius="md">
          Đăng ký
        </Button>
        <Checkbox variant="outline" icon={CheckboxIcon} defaultChecked />
      </Group>
      <Anchor mt="lg" ta="center" underline="always" fz={12} fw={300}>
        Tìm hiểu thêm về gia sư
      </Anchor>
    </Card>
  );
}
