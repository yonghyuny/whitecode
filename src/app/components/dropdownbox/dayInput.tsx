'use client';

import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import BootstrapInput from './BootstrapInput';

interface DayInputProps {
  day: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  days: { value: number; label: string }[];
}

export default function DayInput({ day, onChange, days }: DayInputProps) {
  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      <InputLabel id="day-select-label">일</InputLabel>
      <Select
        labelId="day-select-label"
        id="day-select"
        value={day}
        onChange={onChange}
        input={<BootstrapInput />}
      >
        {days.map((day) => (
          <MenuItem key={day.value} value={day.value.toString()}>
            {day.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
