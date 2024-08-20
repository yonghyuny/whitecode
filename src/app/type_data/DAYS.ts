import { DayProps } from './types';

 // 각 월에 맞춰서 일 생성
export function getDaysInMonth(year: number, month: number): DayProps[] {
  const daysInMonth = new Date(year, month, 0).getDate();

  return Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    return {
      value: day,
      label: `${day}일`,
    };
  });
}
