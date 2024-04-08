'use client';

import {
  LinkAnimateUnderline,
  LinkAnimateUnderlineProps,
} from '@/components/link/link-animate-underline';
import { Board } from '@/components/ui/board';

export const LinkAnimateUnderlineSample = () => {
  const props = [
    { direction: 'center' },
    { direction: 'left' },
    { direction: 'left-right' },
    { direction: 'right' },
    { direction: 'right-left' },
  ] as LinkAnimateUnderlineProps[];
  return (
    <Board title={'下線アニメーション・リンク'}>
      <div className={'flex flex-col gap-4'}>
        <div className={'flex gap-4'}>
          {props.map((props, index) => (
            <LinkAnimateUnderline href={'#'} key={index} {...props}>
              LINK
            </LinkAnimateUnderline>
          ))}
        </div>
        <div className={'flex gap-4'}>
          {props.map((props, index) => (
            <LinkAnimateUnderline
              className={
                'text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 [&>span]:bg-blue-400'
              }
              href={'#'}
              key={index}
              {...props}
            >
              LINK
            </LinkAnimateUnderline>
          ))}
        </div>
      </div>
    </Board>
  );
};
