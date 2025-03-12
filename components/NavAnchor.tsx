'use client';

import React from 'react';
import { Anchor } from '@mantine/core';
import { Link } from '@/i18n/navigation';

interface NavAnchorProps {
  text: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  link: string;
  withUnderline?: boolean;
}

const NavAnchor: React.FC<NavAnchorProps> = ({ text, link, withUnderline = true, size = 'xl' }) => {
  return (
    <Anchor
      component={Link}
      href={link}
      size={size}
      underline={withUnderline ? 'always' : 'never'}
      c="black"
    >
      {text}
    </Anchor>
  );
};

export default NavAnchor;
