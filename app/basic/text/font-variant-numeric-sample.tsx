import { Board } from '@/components/layouts/board';
import { cn } from '@/lib/utils';
import { List, ListItem } from '@/components/list/list';
import { Link } from '@/components/ui/link';
import * as React from 'react';

export const FontVariantNumericSample = () => {
  return (
    <Board>
      <List>
        <ListItem>
          <code>lining-nums</code> はほとんどのフォントのデフォルト
        </ListItem>
        <ListItem>
          <code>tabular-nums</code>{' '}
          は大きさが統一されるので文字通り表中など数値データの表示に適する
        </ListItem>
        <ListItem>
          <code>stacked-fractions</code> は対応フォントがあまりない (meiryo
          は対応している：
          <span className={'font-[meiryo] stacked-fractions'}>
            1/2 1/10 1/100
          </span>
          )
        </ListItem>
      </List>
      <div className={'mt-5 w-full overflow-x-auto'}>
        <table className={'text-sm'}>
          <thead>
            <tr>
              <th />
              <th />
              <th className={'whitespace-nowrap p-3'}>
                <Link external href={'https://fonts.google.com/specimen/Inter'}>
                  Inter
                </Link>
              </th>
              <th className={'whitespace-nowrap p-3'}>
                <Link
                  external
                  href={'https://fonts.google.com/specimen/Source+Sans+3'}
                >
                  Source Sans 3
                </Link>
              </th>
              <th className={'whitespace-nowrap p-3'}>
                <Link
                  external
                  href={'https://fonts.google.com/specimen/Source+Serif+4'}
                >
                  Source Serif 4
                </Link>
              </th>
              <th className={'whitespace-nowrap p-3'}>
                <Link
                  external
                  href={'https://fonts.google.com/specimen/Ubuntu+Mono'}
                >
                  Ubuntu Mono
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                className: 'normal-nums',
                description: '通常表示',
                value: '1199 1st 1/2',
                opentype: '-',
              },
              {
                className: 'lining-nums',
                description: 'baseline 上に並べる',
                value: '1234567890',
                opentype: 'lnum',
              },
              {
                className: 'oldstyle-nums',
                description: '一部の数字を下げる',
                value: '1234567890',
                opentype: 'onum',
              },
              {
                className: 'ordinal',
                description: '序数記号の特別表記',
                value: '1st 2nd 3rd',
                opentype: 'ordn',
              },
              {
                className: 'diagonal-fractions',
                description: 'スラッシュの分数',
                value: '1/2 1/10 1/100',
                opentype: 'frac',
              },
              {
                className: 'stacked-fractions',
                description: '上下配置の分数',
                value: '1/2 1/10 1/100',
                opentype: 'afrc',
              },
              {
                className: 'slashed-zero',
                description: 'スラッシュ付きのゼロ',
                value: '0000',
                opentype: 'zero',
              },
              {
                className: 'tabular-nums',
                description: '大きさ統一',
                value: (
                  <p>
                    1111
                    <br />
                    9999
                  </p>
                ),
                opentype: 'tnum',
              },
              {
                className: 'proportional-nums',
                description: '大きさ不統一',
                value: (
                  <p>
                    1111
                    <br />
                    9999
                  </p>
                ),
                opentype: 'pnum',
              },
            ].map((v, i) => (
              <tr className={'border-t'} key={i}>
                <th className={'whitespace-nowrap py-3 pr-3 text-left'}>
                  {v.className}
                  <br />
                  <span className={'ml-2 text-xs font-normal'}>
                    {v.description}
                  </span>
                </th>
                <td
                  className={cn(
                    'whitespace-nowrap p-3 text-center font-inter text-xs',
                    v.className,
                  )}
                >
                  {v.opentype}
                </td>
                <td
                  className={cn(
                    'whitespace-nowrap px-3 py-3 font-inter text-lg leading-none',
                    v.className,
                  )}
                >
                  {v.value}
                </td>
                <td
                  className={cn(
                    'whitespace-nowrap px-3 py-3 font-source text-lg leading-none',
                    v.className,
                  )}
                >
                  {v.value}
                </td>
                <td
                  className={cn(
                    'whitespace-nowrap px-3 py-3 font-source-serif text-lg leading-none',
                    v.className,
                  )}
                >
                  {v.value}
                </td>
                <td
                  className={cn(
                    'whitespace-nowrap px-3 py-3 font-ubuntu text-lg leading-none',
                    v.className,
                  )}
                >
                  {v.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Board>
  );
};
