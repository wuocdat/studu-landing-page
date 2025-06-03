import { AspectRatio, Button, Stack } from '@mantine/core';
import PacmanIcon from './icons/PacmanIcon';

interface InstructionVideoProps {
  embedLink: string;
  onTryNowClick?: () => void;
}

export default function InstructionVideo({ embedLink, onTryNowClick }: InstructionVideoProps) {
  return (
    <Stack gap={20} m={20}>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={embedLink}
          title="YouTube video player"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
      <Button leftSection={<PacmanIcon />} style={{ alignSelf: 'center' }} onClick={onTryNowClick}>
        Thực hành ngay
      </Button>
    </Stack>
  );
}
