'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { getDaysInMonth } from '@/app/type_data/DAYS';
import YearInput from './yearInput';
import MonthInput from './monthInput';
import DayInput from './dayInput';

export default function DateSelector() {
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [days, setDays] = useState<{ value: number; label: string }[]>([]);

  useEffect(() => {
    if (year && month) {
      setDays(getDaysInMonth(Number(year), Number(month)));
    }
  }, [year, month]);

  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event: SelectChangeEvent<string>) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event: SelectChangeEvent<string>) => {
    setDay(event.target.value);
  };

  return (
    <div>
      <YearInput year={year} onChange={handleYearChange} />
      <MonthInput month={month} onChange={handleMonthChange} />
      <DayInput day={day} onChange={handleDayChange} days={days} />
    </div>
  );
}
