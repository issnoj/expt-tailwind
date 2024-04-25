import { Content } from '@/components/layouts/content';
import { Sample } from '@/components/layouts/sample';
import React from 'react';
import { PseudoSample } from '@/app/basic/button/pseudo-sample';
import { ButtonEventSample } from '@/app/basic/button/button-event-sample';

const Page = () => {
  return (
    <Content title={'ボタン'}>
      <Sample title={'疑似クラス'}>
        <PseudoSample />
      </Sample>
      <Sample title={'イベント'}>
        <ButtonEventSample />
      </Sample>
    </Content>
  );
};

export default Page;
