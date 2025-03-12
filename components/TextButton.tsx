import React from 'react';
import { Text } from '@mantine/core';

interface TextButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  withUnderline?: boolean;
}

const TextButton: React.FC<TextButtonProps> = ({
  text,
  onClick,
  withUnderline = true,
  size = 'xl',
}) => {
  return (
    <Text
      size={size}
      style={{
        cursor: 'pointer',
        textDecoration: withUnderline ? 'underline' : 'none',
        textDecorationThickness: withUnderline ? '1px' : undefined,
        userSelect: 'none',
      }}
      onClick={onClick}
    >
      {text}
    </Text>
  );
};

export default TextButton;
