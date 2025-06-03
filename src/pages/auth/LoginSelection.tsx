import { Button, Group, Image, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface RoleSelectionItemProps {
  imgPath: string;
  title: string;
  path: string;
}

const RoleSelectionItem = ({ imgPath, title, path }: RoleSelectionItemProps) => {
  const navigate = useNavigate();

  return (
    <Stack align="center" gap={50}>
      <Image src={imgPath} />
      <Button maw={200} size="lg" variant="outline" onClick={() => navigate(path)}>
        {title}
      </Button>
    </Stack>
  );
};

export default function LoginSelection() {
  const { t } = useTranslation();

  const items = [
    {
      imgPath: '/svg/student-image.svg',
      title: t('login-selection.student-button'),
      path: '/student-register',
    },
    {
      imgPath: '/svg/tutor-image.svg',
      title: t('login-selection.tutor-button'),
      path: '/tutor-register',
    },
  ];

  const renderItems = items.map((roleItem, index) => (
    <RoleSelectionItem key={index} {...roleItem} />
  ));

  return (
    <Group h="calc(90vh - 80px)" justify="space-evenly" align="center">
      {renderItems}
    </Group>
  );
}
