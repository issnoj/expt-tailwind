'use client';

import { Typewriter, TypewriterProps } from '@/components/text/typewriter';
import { ReRender } from '@/components/ui/re-render';
import { Board } from '@/components/ui/board';

const texts: TypewriterProps[] = [
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
  return (
    <Board>
      <ReRender>
        <div className={'w-[200px] space-y-8'}>
          {texts.map((props, i) => (
            <div key={i}>
              <Typewriter {...props} />
            </div>
          ))}
        </div>
      </ReRender>
    </Board>
  );
};
