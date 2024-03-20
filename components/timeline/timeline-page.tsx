'use client';

import React from 'react';
import { Content } from '@/components/ui/content';
import { TimelineSample } from '@/components/timeline/timeline-sample';
import { Board } from '@/components/ui/board';
import { TimelineTableSample } from '@/components/timeline/timeline-table-sample';

export const TimelinePage = () => {
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
