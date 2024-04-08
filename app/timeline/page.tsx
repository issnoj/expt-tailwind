import { Content } from '@/components/ui/content';
import { Board } from '@/components/ui/board';
import { TimelineSample } from '@/app/timeline/timeline-sample';
import { TimelineTableSample } from '@/app/timeline/timeline-table-sample';
import React from 'react';

const Page = async () => {
  return (
    <Content title={'タイムライン'}>
      <Board className={'max-w-2xl'} title={'リスト形式タイムライン'}>
        <TimelineSample />
      </Board>
      <Board className={'max-w-2xl'} title={'テーブル形式タイムライン'}>
        <TimelineTableSample />
      </Board>
    </Content>
  );
};

export default Page;
