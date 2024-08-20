'use client'

import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'

import { months } from '@/app/type_data/MONTHS'
import BootstrapInput from './BootstrapInput'

interface MonthInputProps {
  month: string
  onChange: (event: SelectChangeEvent<string>) => void
}

export default function MonthInput({ month, onChange }: MonthInputProps) {
  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      <InputLabel id="month-select-label">월</InputLabel>
      <Select
        labelId="month-select-label"
        id="month-select"
        value={month}
        onChange={onChange}
        input={<BootstrapInput />}
      >
        {months.map((month) => (
          <MenuItem key={month.value} value={month.value.toString()}>
            {month.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}