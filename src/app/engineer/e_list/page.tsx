'use client';

import React from 'react';
import TextFieldPencilIcon from '@/app/components/textfield/inputPencilIcon';
import WorkerRadioGroup from '@/app/components/organism/workersRadio/WorkerRadio';
import AvailableRadio from '@/app/components/organism/tes/AvailableRadio';
import GenericCheckBox from '@/app/components/atom/checkbox/GenericCheckBox';
import LabelInput from '@/app/components/template/LabelInput/BookingDate';
import Payday from '@/app/components/template/LabelDropbox/Payday';
import PayPercent from '@/app/components/template/LabelDropbox/PayPercent';
import GenericButtonGroup from '@/app/components/molecules/button/GenericButtonGroup';
import WorkerName from '@/app/components/template/LabelTextFeild/WorkerName';
import BasicTable from '@/app/components/table/table';
import BookingDate from '@/app/components/template/LabelInput/BookingDate';

const Page = () => {
  const handleClick = () => console.log('클릭');
  return (
    <div>
      기사님 관리 리스트 보기
      <TextFieldPencilIcon />
      <AvailableRadio />
      <GenericCheckBox label="sdf" />
      <BookingDate />
      <div className="flex flex-col gap-7 pb-4">
        <WorkerName />
        <PayPercent />
        <Payday />
        <GenericButtonGroup
          pri_property={{
            text: 'Regi',
            color: 'white',
            backgroundColor: 'buttonYes',
            onClick: handleClick,
          }}
          sec_property={{
            text: 'Cancle',
            color: 'black',
            backgroundColor: 'buttonNo',
            onClick: handleClick,
          }}
        />
      </div>
      <div>
        <WorkerRadioGroup />
        <BasicTable />
      </div>
    </div>
  );
};

export default Page;
