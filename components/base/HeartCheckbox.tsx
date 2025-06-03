import { ActionIcon } from '@mantine/core';
import APP_COLORS from '@/theme/colors';
import HeartIcon from '../icons/HeartIcon';

interface HeartCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function HeartCheckbox({ checked, onChange }: HeartCheckboxProps) {
  return (
    <ActionIcon variant="transparent" size="lg" onClick={() => onChange(!checked)}>
      <HeartIcon color={checked ? APP_COLORS.primary : 'gray'} />
    </ActionIcon>
  );
}
