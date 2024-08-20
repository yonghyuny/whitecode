'use client'

import { ChangeEvent } from 'react'
import { FormControl, InputLabel } from '@mui/material'
import BootstrapInput from './BootstrapInput'


interface YearInputProps {
  year: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function YearInput({ year, onChange }: YearInputProps) {
  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      <InputLabel htmlFor="year-input">년</InputLabel>
      <BootstrapInput
        id="year-input"
        value={year}
        onChange={onChange}
        sx={{ width: '100px' }}
        placeholder="(년)4자"
      />
    </FormControl>
  )
}