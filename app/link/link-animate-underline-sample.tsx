'use client';

import {
  linkAnimateUnderlinedirections,
  LinkAnimateUnderline,
} from '@/components/link/link-animate-underline';
import { Board } from '@/components/layouts/board';

export const LinkAnimateUnderlineSample = () => {
  return (
    <Board title={'下線アニメーション・リンク'}>
      <div className={'flex flex-col gap-4'}>
        <div className={'flex flex-wrap gap-4'}>
          {linkAnimateUnderlinedirections.map((direction, index) => (
            <LinkAnimateUnderline direction={direction} href={'#'} key={index}>
              LINK
            </LinkAnimateUnderline>
          ))}
        </div>
        <div className={'flex flex-wrap gap-4'}>
          {linkAnimateUnderlinedirections.map((direction, index) => (
            <LinkAnimateUnderline
              className={
                'text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 [&>span]:bg-blue-400'
              }
              direction={direction}
              href={'#'}
              key={index}
            >
              LINK
            </LinkAnimateUnderline>
          ))}
        </div>
      </div>
    </Board>
  );
};
