import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
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
