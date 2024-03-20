'use client';

import React from 'react';
import { Content } from '@/components/ui/content';
import { TimelineSample } from '@/components/timeline/timeline-sample';
import { Board } from '@/components/ui/board';
import { TimelineTableSample } from '@/components/timeline/timeline-table-sample';

export const TimelinePage = () => {
  return (
    <Content title={'タイムライン'}>
      <Board title={'リスト形式タイムライン'}>
        <TimelineSample />
      </Board>
      <Board title={'テーブル形式タイムライン'}>
        <TimelineTableSample />
      </Board>
    </Content>
  );
};
