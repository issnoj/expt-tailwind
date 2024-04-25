import { Content } from '@/components/layouts/content';
import { Sample } from '@/components/layouts/sample';
import { TypewriterSample } from '@/app/typewriter/typewriter-sample';
import React from 'react';

const Page = () => {
  return (
    <Content title={'テキスト出現'}>
      <Sample>
        <TypewriterSample />
      </Sample>
    </Content>
  );
};

export default Page;
