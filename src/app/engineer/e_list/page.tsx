'use client';

import Input from '@/app/components/textfield/input';
import DateSelector from '@/app/components/dropdownbox/dateSelector';
import ButtonGroup from '@/app/components/button/buttonGroup';
import React from 'react';
import TextFieldPencilIcon from '@/app/components/textfield/inputPencilIcon';

export default function Page() {
  return (
    <div>
      기사님 관리 리스트 보기
      <ButtonGroup />
      <Input placeholder={'(년)4자'} />
      <TextFieldPencilIcon />
      <DateSelector />
    </div>
  );
}
