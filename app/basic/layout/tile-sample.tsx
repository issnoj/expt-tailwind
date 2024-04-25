import { Board } from '@/components/layouts/board';
import { cn } from '@/lib/utils';
import React from 'react';
import { List, ListItem } from '@/components/list/list';
import { Link } from '@/components/ui/link';

const lorem =
  'Lorem Ipsum is dummy text of the printing. Lorem Ipsum has been the dummy text.';

export const TileSample = () => {
  return (
    <Board className={'flex flex-col gap-10 overflow-hidden'}>
      <Example title={'列数指定タイル'}>
        <p>
          <code className={'text-xs'}>
            grid-template-columns: repeat(6, minmax(0, 1fr))
          </code>
        </p>
        <div className={'mt-2 flex flex-row flex-wrap gap-2'}>
          {[
            {
              content: lorem,
              className: 'grid-cols-1',
              number: 3,
            },
            {
              content: lorem,
              className: 'grid-cols-2',
              number: 3,
            },
            {
              content: lorem,
              className: 'grid-cols-3',
              number: 3,
            },
            {
              content: lorem,
              className: 'grid-cols-6',
              number: 3,
            },
          ].map((v, j) => (
            <GridWrapper
              className={cn('w-[200px]', v.className)}
              key={j}
              title={v.className}
            >
              {[...Array(v.number)].map((_, i) => (
                <GridItem key={i}>{v.content}</GridItem>
              ))}
            </GridWrapper>
          ))}
        </div>
        <p>
          <code>justify-content: center</code>{' '}
          を親要素に適用し、実現したい列数に応じた幅に指定すれば一行の時に中央表示にできる
          <br />
          4列で gap が 4px の場合、幅は <code>calc((100%-4px*3)/4))</code>{' '}
          となる
        </p>
        <div className={'mt-2 flex flex-row flex-wrap gap-5'}>
          {[
            {
              content: lorem,
              className: 'grid-cols-[repeat(auto-fit,calc((100%-4px*3)/4))]',
              number: 3,
            },
            {
              content: lorem,
              className: 'grid-cols-[repeat(auto-fit,calc((100%-4px*3)/4))]',
              number: 5,
            },
          ].map((v, j) => (
            <GridWrapper
              className={cn('w-[200px] justify-center gap-1', v.className)}
              key={j}
              title={v.className}
            >
              {[...Array(v.number)].map((_, i) => (
                <GridItem key={i}>{v.content}</GridItem>
              ))}
            </GridWrapper>
          ))}
        </div>
      </Example>
      <Example title={'列数自動タイル（幅に制限）'}>
        <div>
          最大幅が 1fr で一行のとき auto-fill と auto-fit で分割方法が異なる
          <List className={'mt-2 text-sm'}>
            <ListItem>
              auto-fill :
              スペースがあれば空のセルが作られる（列数は最小幅で可能な列数になる）
            </ListItem>
            <ListItem>auto-fit : スペースがないよう子要素の幅が伸びる</ListItem>
          </List>
        </div>
        <p>
          <code className={'text-xs'}>
            grid-template-columns: repeat(auto-fill, minmax(最小幅, 1fr))
          </code>
        </p>
        <div className={'mt-2 flex flex-row flex-wrap gap-5'}>
          {[
            {
              content: lorem,
              className: 'grid-cols-[repeat(auto-fill,minmax(40px,1fr))]',
              number: 3,
            },
            {
              content: lorem,
              className: 'grid-cols-[repeat(auto-fill,minmax(40px,1fr))]',
              number: 5,
            },
          ].map((v, j) => (
            <GridWrapper
              className={cn('w-[200px]', v.className)}
              key={j}
              title={v.className}
            >
              {[...Array(v.number)].map((_, i) => (
                <GridItem key={i}>{v.content}</GridItem>
              ))}
            </GridWrapper>
          ))}
        </div>
        <p>
          <code className={'text-xs'}>
            grid-template-columns: repeat(auto-fit, minmax(最小幅, 1fr))
          </code>
        </p>
        <div className={'mt-2 flex flex-row flex-wrap gap-5'}>
          {[
            {
              content: lorem,
              className: 'grid-cols-[repeat(auto-fit,minmax(40px,1fr))]',
              number: 3,
            },
            {
              content: lorem,
              className: 'grid-cols-[repeat(auto-fit,minmax(40px,1fr))]',
              number: 5,
            },
          ].map((v, j) => (
            <GridWrapper
              className={cn('w-[200px]', v.className)}
              key={j}
              title={v.className}
            >
              {[...Array(v.number)].map((_, i) => (
                <GridItem key={i}>{v.content}</GridItem>
              ))}
            </GridWrapper>
          ))}
        </div>
      </Example>
      <Example title={'組積タイル (Masonry Layout）'}>
        <p>
          強引だが入れ子にすれば gird
          で組積タイルにできる（列数の指定、配列を適切に構成する必要あり）
        </p>
        <small className={'text-xs text-foreground/60'}>
          CSS に{' '}
          <Link
            external
            href={
              'https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout/Masonry_layout'
            }
          >
            Masonry layout
          </Link>{' '}
          は存在するが、現在はどのブラウザも未対応
        </small>
        <div className={'mt-2 flex flex-row flex-wrap gap-5'}>
          <GridWrapper className={cn('max-w-[600px]', 'grid-cols-6')}>
            {[
              [5, 20, 40],
              [20, 30, 10],
              [10, 30],
              [50],
              [20, 30, 10],
              [10, 30],
            ].map((v, i) => (
              <div className={'grid gap-1'} key={i}>
                {v.map((vv, j) => (
                  <GridItem className={'line-clamp-none'} key={j}>
                    {i}-{j}: {lorem.slice(0, vv)}
                  </GridItem>
                ))}
              </div>
            ))}
          </GridWrapper>
        </div>
        <p>
          段落{' '}
          <Link
            external
            href={'https://developer.mozilla.org/ja/docs/Web/CSS/columns'}
          >
            columns
          </Link>
          の分割数指定{' '}
          <Link
            external
            href={'https://developer.mozilla.org/ja/docs/Web/CSS/column-count'}
          >
            column-count
          </Link>{' '}
          で似たレイアウトが実現できる（ただし下向きになる）
          <br />
          テキストは途中で折り返しされるので{' '}
          <Link
            external
            href={'https://developer.mozilla.org/ja/docs/Web/CSS/break-inside'}
          >
            break-inside
          </Link>{' '}
          を <code>avoid</code> にする
        </p>
        <div className={'mt-2 flex flex-row flex-wrap gap-5'}>
          <ColumnWrapper
            className={cn('max-w-[600px]', 'columns-6 gap-1 space-y-1')}
          >
            {[5, 20, 40, 20, 30, 10, 10, 30, 50, 20, 30, 10, 10, 30].map(
              (v, i) => (
                <GridItem
                  className={'line-clamp-none break-inside-avoid'}
                  key={i}
                >
                  {i}: {lorem.slice(0, v)}
                </GridItem>
              ),
            )}
          </ColumnWrapper>
        </div>
        <div className={'mt-2 flex flex-row flex-wrap gap-5'}>
          <ColumnWrapper
            className={cn('max-w-[600px]', 'columns-6 gap-1 space-y-1')}
          >
            {[10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10, 30, 50, 40, 20].map(
              (v, i) => (
                <div
                  className={
                    'line-clamp-none break-inside-avoid border border-foreground/40 bg-background'
                  }
                  key={i}
                >
                  <div className={'p-1'}>
                    {i}: {lorem.slice(0, v)}
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`${i}`}
                    src={`https://placehold.jp/150x${v * 2}.png`}
                  />
                </div>
              ),
            )}
          </ColumnWrapper>
        </div>
        <p>
          画像のみなら <code>break-inside</code> はなくてもOK
        </p>
        <div className={'mt-2 flex flex-row flex-wrap gap-5'}>
          <ColumnWrapper
            className={cn('max-w-[600px]', 'columns-5 gap-1 space-y-1')}
          >
            {[10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10, 30, 50, 40, 20].map(
              (v, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={`${i}`}
                  key={i}
                  src={`https://placehold.jp/150x${v * 2}.png`}
                />
              ),
            )}
          </ColumnWrapper>
        </div>
      </Example>
    </Board>
  );
};

const Example = ({
  title,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('overflow-hidden', className)} {...props}>
    <h3 className={'mb-5 font-semibold'}>{title}</h3>
    <div className={'flex flex-col gap-5'}>{props.children}</div>
  </div>
);

const ColumnWrapper = ({
  title,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('text-xs')} {...props}>
    {title && (
      <code className={'block w-fit bg-cyan-300/30 px-1'}>{title}</code>
    )}
    <div className={cn('border bg-gray-100 p-1', className)} {...props}>
      {props.children}
    </div>
  </div>
);

const GridWrapper = ({
  title,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('text-xs')} {...props}>
    {title && (
      <code className={'block w-fit bg-cyan-300/30 px-1'}>{title}</code>
    )}
    <div
      className={cn('grid gap-1 border bg-gray-100 p-1', className)}
      {...props}
    >
      {props.children}
    </div>
  </div>
);

const GridItem = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      // 'line-clamp-3 bg-gradient-to-br from-red-200 to-blue-200 text-xs text-foreground/60',
      'line-clamp-3 border border-foreground/40 bg-background text-xs text-foreground/60',
      className,
    )}
    {...props}
  >
    {props.children}
  </div>
);
