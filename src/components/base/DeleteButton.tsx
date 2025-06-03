import { ActionIcon, ActionIconProps, Image } from '@mantine/core';

interface DeleteButtonProps extends ActionIconProps {
  visibility?: boolean;
  onClick?: () => void;
}

export default function DeleteButton(props: DeleteButtonProps) {
  const { visibility = true, ...others } = props;

  return (
    <ActionIcon
      size="sm"
      variant="transparent"
      style={{ visibility: !visibility ? 'hidden' : 'visible' }}
      {...others}
    >
      <Image src="/svg/trash.svg" />
    </ActionIcon>
  );
}
