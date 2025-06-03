'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Anchor } from '@mantine/core';
import { Link } from '@/i18n/navigation';
import APP_COLORS from '@/theme/colors';

interface NavAnchorProps {
  text: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  link: string;
}

const NavAnchor: React.FC<NavAnchorProps> = ({ text, link, size = 'md' }) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === link;

  return (
    <Anchor
      component={Link}
      href={link}
      size={size}
      fz={18}
      fw={500}
      c={isActive ? APP_COLORS.primary : 'black'}
    >
      {text}
    </Anchor>
  );
};

export default NavAnchor;
