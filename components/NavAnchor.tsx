'use client';

import React from 'react';
import { Anchor } from '@mantine/core';
import { Link } from '@/i18n/navigation';

interface NavAnchorProps {
  text: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  link: string;
}

const NavAnchor: React.FC<NavAnchorProps> = ({ text, link, size = 'md' }) => {
  return (
    <Anchor component={Link} href={link} size={size} fz={20} fw={600} c="black">
      {text}
    </Anchor>
  );
};

export default NavAnchor;
