import { colors } from '@/styles/colors';

export const stateMapper = {
  currentState: (isCurrent?: boolean) => (isCurrent ? 'current' : 'notCurrent'),
};

export const colorStrategies = {
  current: colors.text.current,
  notCurrent: colors.text.notCurrent,
};

export const determineCurrentColor = (state: 'current' | 'notCurrent') => colorStrategies[state];
