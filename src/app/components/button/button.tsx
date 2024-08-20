'use client';

import * as React from 'react';
import MUIButton from '@mui/material/Button';

import { COLORS } from '@/styles/COLOR';
import { ButtonProps } from '@/app/type_data/types';

export default function Button({ onClick, text }: ButtonProps) {
  const backgroundColor = text === '등록' ? COLORS.BLUE : COLORS.GREY;
  const color = text === '등록' ? COLORS.GREY : COLORS.BLACK;

  return (
    <>
      <MUIButton
        sx={{
          backgroundColor,
          color,
          fontSize: '20px',
          width: '200px',
          height: '30px',
          textAlign: 'center',
          borderRadius: '0',
          '&.MuiButtonBase-root:hover': {
            bgcolor: backgroundColor, // MUI의 기본 hover 효과 무효화
          },
        }}
        onClick={onClick}
      >
        {text}
      </MUIButton>
    </>
  );
}
