'use client';

import { useEffect, useState } from 'react';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import { Collapse, Group, rem, Stack, Text, UnstyledButton } from '@mantine/core';
import APP_COLORS from '@/theme/colors';

export type TocItem = {
  id: string;
  title: string;
  children?: TocItem[];
};

type TocItemComponentProps = {
  item: TocItem;
  activeId: string | null;
  isSubItem?: boolean;
  onClick: (id: string) => void;
};

const TocItemComponent = ({ item, activeId, isSubItem, onClick }: TocItemComponentProps) => {
  const hasChildren = !!item.children?.length;
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (hasChildren) {
      setOpened((o) => !o);
    } else {
      onClick(item.id);
    }
  };

  return (
    <div>
      <UnstyledButton
        onClick={handleClick}
        style={{
          width: '100%',
          padding: '0px 8px',
          borderRadius: 4,
          cursor: 'pointer',
        }}
      >
        <Group gap="xs" justify="space-between">
          <Text
            size="sm"
            fw={isSubItem ? 400 : 800}
            c={activeId === item.id ? APP_COLORS.primary : APP_COLORS.primaryText}
          >
            {item.title}
          </Text>
          {hasChildren && (opened ? <IconChevronDown size={20} /> : <IconChevronRight size={20} />)}
        </Group>
      </UnstyledButton>

      {hasChildren && (
        <Collapse in={opened}>
          <Stack gap={4} ml={rem(20)}>
            {item.children!.map((child) => (
              <TocItemComponent
                key={child.id}
                item={child}
                activeId={activeId}
                isSubItem
                onClick={onClick}
              />
            ))}
          </Stack>
        </Collapse>
      )}
    </div>
  );
};

export const TableOfContents = ({ items }: { items: TocItem[] }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- Scroll spy logic ---
  useEffect(() => {
    const headingIds = collectAllIds(items);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
          setActiveId(topmost.target.id);
        }
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 0.1,
      }
    );

    headingIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <Stack gap={6}>
      {items.map((item) => (
        <TocItemComponent key={item.id} item={item} activeId={activeId} onClick={handleClick} />
      ))}
    </Stack>
  );
};

function collectAllIds(items: TocItem[]): string[] {
  const result: string[] = [];
  const traverse = (list: TocItem[]) => {
    for (const item of list) {
      result.push(item.id);
      if (item.children) {
        traverse(item.children);
      }
    }
  };
  traverse(items);
  return result;
}
