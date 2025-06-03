import DeleteButton from '@/components/base/DeleteButton';
import {
  Anchor,
  Box,
  Grid,
  GridCol,
  Group,
  Image,
  Paper,
  Stack,
  Switch,
  Text,
} from '@mantine/core';
import { Calendar, TimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';

const dayOfWeek = ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'];

type TimeRange = {
  start?: string;
  end?: string;
};

type FormValues = {
  schedules: {
    day: number;
    on: boolean;
    timeChunks: TimeRange[];
  }[];
};

type DaySchedulePickerProps = {
  on: boolean;
  day: number;
  timeChunks: TimeRange[];
  onToggleStatus: (value: boolean, day: number) => void;
  onTimeRangeChange: (value: TimeRange, chunkIndex: number) => void;
  onAddNewChunk: () => void;
  onDeleteChunk: (index: number) => void;
};

type TimeRangePickerProps = {
  value: TimeRange;
  onChange: (range: TimeRange) => void;
};

const TimeRangePicker = ({ value, onChange }: TimeRangePickerProps) => {
  const handleStartChange = (start: string) => {
    onChange({ start, end: value.end });
  };

  const handleEndChange = (end: string) => {
    onChange({ start: value.start, end });
  };

  return (
    <Group>
      <Text size="sm" c="gray">
        Từ
      </Text>
      <TimePicker
        flex={1}
        withDropdown
        maxDropdownContentHeight={300}
        presets={[
          { label: 'Morning', values: ['06:00:00', '08:00:00', '10:00:00'] },
          { label: 'Afternoon', values: ['12:00:00', '14:00:00', '16:00:00'] },
          { label: 'Evening', values: ['18:00:00', '20:00:00', '22:00:00'] },
        ]}
        value={value.start}
        onChange={handleStartChange}
      />
      <Text size="sm" c="gray">
        tới
      </Text>
      <TimePicker
        flex={1}
        withDropdown
        maxDropdownContentHeight={300}
        presets={[
          { label: 'Morning', values: ['06:00:00', '08:00:00', '10:00:00'] },
          { label: 'Afternoon', values: ['12:00:00', '14:00:00', '16:00:00'] },
          { label: 'Evening', values: ['18:00:00', '20:00:00', '22:00:00'] },
        ]}
        value={value.end}
        onChange={handleEndChange}
      />
    </Group>
  );
};

const DaySchedulePicker = ({
  on,
  day,
  timeChunks,
  onTimeRangeChange,
  onToggleStatus,
  onAddNewChunk,
  onDeleteChunk,
}: DaySchedulePickerProps) => {
  const renderChunks = timeChunks.map((chunk, index) => (
    <Group gap="lg">
      <Box flex={1}>
        <TimeRangePicker
          key={index}
          value={chunk}
          onChange={(value) => onTimeRangeChange(value, index)}
        />
      </Box>
      <DeleteButton
        visibility={timeChunks.length > 1 || index !== 0}
        onClick={() => onDeleteChunk(index)}
      />
    </Group>
  ));

  return (
    <Group align="flex-start">
      <Switch
        size="lg"
        mt={4}
        miw={150}
        label={dayOfWeek[day]}
        checked={on}
        styles={{
          label: {
            fontSize: 16,
            fontWeight: 600,
          },
        }}
        onChange={(event) => onToggleStatus(event.currentTarget.checked, day)}
      />
      {on ? (
        <Stack flex={1}>
          {renderChunks}
          <Anchor size="sm" fw={600} variant="dark" onClick={onAddNewChunk}>
            Thêm thời gian dạy
          </Anchor>
        </Stack>
      ) : (
        <Group flex={1} bg="#ccc" py="xs" px="lg" style={{ borderRadius: 6 }}>
          <Image src="/svg/moon.svg" />
          <Text size="sm">Nghỉ ngơi</Text>
        </Group>
      )}
    </Group>
  );
};

export default function ScheduleStep() {
  const form = useForm<FormValues>({
    initialValues: {
      schedules: Array.from({ length: 7 }, (_, index) => ({
        day: index,
        on: false,
        timeChunks: [{ start: '06:00:00', end: '14:00:00' }],
      })),
    },
  });

  const handleTimeRangeChange = (value: TimeRange, chunkIndex: number, scheduleIndex: number) => {
    const cloneTimeChunks = form.values.schedules[scheduleIndex].timeChunks;
    cloneTimeChunks[chunkIndex] = value;

    form.setFieldValue(`schedules.${scheduleIndex}.timeChunks`, cloneTimeChunks);
  };

  const handleToggleDayStatus = (value: boolean, day: number) => {
    form.setFieldValue(`schedules.${day}.on`, value);
  };

  const handleAddNewChunk = (day: number) =>
    form.insertListItem(`schedules.${day}.timeChunks`, { start: '06:00:00', end: '14:00:00' });

  const handleRemoveChunk = (chunkIndex: number, scheduleIndex: number) =>
    form.removeListItem(`schedules.${scheduleIndex}.timeChunks`, chunkIndex);

  const fields = form.values.schedules.map((schedule, index) => (
    <DaySchedulePicker
      key={index}
      {...schedule}
      onTimeRangeChange={(value, chunkIndex) => handleTimeRangeChange(value, chunkIndex, index)}
      onToggleStatus={(value, day) => handleToggleDayStatus(value, day)}
      onAddNewChunk={() => handleAddNewChunk(index)}
      onDeleteChunk={(chunkIndex) => handleRemoveChunk(chunkIndex, index)}
    />
  ));

  return (
    <Stack gap="xl">
      <Grid>
        <GridCol span={5}>
          <Paper w="max-content" withBorder shadow="none" radius="lg">
            <Calendar />
          </Paper>
        </GridCol>
        <GridCol span={7}>
          <Stack>{fields}</Stack>
        </GridCol>
      </Grid>
      <Text mt="lg" size="sm" fs="italic" fw={300} ta="center">
        Lịch này sẽ được tự động lặp lại hàng tuần.
        <br />
        Tuy nhiên, bạn có thể sửa lịch bất kỳ khi nào bạn muốn trong mục Lịch học & Gói học
      </Text>
      <Text size="lg" ta="center" fs="italic">
        Tham khảo các lưu ý về thiết lập lịch dạy <Anchor size="lg">tại đây</Anchor>
      </Text>
    </Stack>
  );
}
