'use client';

import { TableSimple, TableSimpleProps } from '@/components/ui/table-simple';
import {
  TableSimpleGrid,
  TableSimpleGridProps,
} from '@/components/ui/table-simple-grid';
import { SwitchMobile } from '@/components/ui/switch-mobile';
import { TableSimpleGridScroll } from '@/components/ui/table-simple-grid-scroll';

export const TableSample = () => {
  const data: TableSimpleProps['data'] = [
    { title: '名前', value: 'ジェームズ・クラーク・マクスウェル' },
    { title: '生没年', value: '1831 - 1879' },
    { title: '出身地', value: 'イギリス' },
    {
      title: '仕事',
      value:
        'マクスウェルの方程式、マクスウェル分布、マクスウェルの関係式、マクスウェルの悪魔',
    },
  ];
  const columns: TableSimpleGridProps['columns'] = [
    { accessKey: 'name', header: '名前' },
    { accessKey: 'year', header: '生没年' },
    { accessKey: 'birthplace', header: '出身地' },
    { accessKey: 'work', header: '仕事' },
  ];
  const dataGrid: TableSimpleGridProps['data'] = [
    {
      name: 'マックス・プランク',
      year: '1858 - 1947',
      birthplace: 'ドイツ',
      work: 'プランク定数',
    },
    {
      name: 'エルウィン・シュレーディンガー',
      year: '1887 - 1961',
      birthplace: 'オーストリア',
      work: 'シュレーディンガー方程式',
    },
    {
      name: 'ルイ・ド・ブロイ',
      year: '1892 - 1987',
      birthplace: 'フランス',
      work: '物質波の提唱、電子の波動性の発見（ノーベル物理学賞）',
    },
  ];

  return (
    <div className={'flex max-w-lg flex-col gap-8'}>
      <div
        className={'w-full rounded border bg-background p-8 shadow'}
        id={'table-simple'}
      >
        <h6 className={'mb-8 font-bold'}>レスポンシブのテーブル形式リスト</h6>
        <SwitchMobile className={'mb-4'} id={'table-simple'} />
        <TableSimple className={'text-xs'} data={data} />
      </div>
      <div
        className={'w-full rounded border bg-background p-8 shadow'}
        id={'table-simple-grid'}
      >
        <h6 className={'mb-1 font-bold'}>レスポンシブのテーブル</h6>
        <small className={'mb-8 inline-block text-muted-foreground'}>
          1列目がモバイル表示時に見出しになる
        </small>
        <div>
          <SwitchMobile className={'mb-4'} id={'table-simple-grid'} />
        </div>
        <TableSimpleGrid
          className={'text-xs'}
          columns={[...columns].splice(0, 3)}
          data={dataGrid}
        />
      </div>
      <div className={'w-full rounded border bg-background p-8 shadow'}>
        <h6 className={'mb-8 font-bold'}>非レスポンシブのテーブル</h6>
        <TableSimpleGridScroll
          className={'text-xs'}
          columns={columns}
          data={dataGrid}
        />
      </div>
    </div>
  );
};
