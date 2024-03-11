'use client';

import React from 'react';
import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { TypewriterSample } from '@/components/typewriter/typewriter-sample';

export const TypewriterPage = () => {
  return (
    <Content title={'テキスト出現'}>
      <Sample
        code={`
{text.split('').map((str, i) => (
  <motion.span
    className={'inline-block'}
    key={i}
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.1,
      delay: i / 10,
    }}
  >
    {str}
  </motion.span>
))}
`}
      >
        <TypewriterSample />
      </Sample>
    </Content>
  );
};
