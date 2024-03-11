'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Typewriter, TypewriterProps } from '@/components/ui/typewriter';

const props: TypewriterProps[] = [
  {
    text: '速く文字列が１文字ずつ順番に出現します。',
    duration: 0.05,
    delay: 0.05,
  },
  {
    text: '文字列が１文字ずつ順番に出現します。',
  },
  {
    text: '下から文字列が１文字ずつ順番に出現します。',
    y: '100%',
  },
  {
    text: '上から文字列が１文字ずつ順番に出現します。',
    y: '-100%',
  },
  {
    text: '右下から文字列が１文字ずつ順番に出現します。',
    x: '100%',
    y: '100%',
  },
];

export const TypewriterSample = () => {
  const [texts, setTexts] = useState<TypewriterProps[]>(props);

  const handleClick = () => {
    setTexts([]);
    setTimeout(() => setTexts(props), 100);
  };

  return (
    <div>
      <Button onClick={handleClick}>再表示</Button>
      <div className={'mt-4 w-[200px] space-y-8'}>
        {texts.map((props, i) => (
          <div key={i}>
            <Typewriter {...props} />
          </div>
        ))}
      </div>
    </div>
  );
};
