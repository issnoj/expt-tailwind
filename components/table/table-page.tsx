'use client';

import React from 'react';
import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { TableSample } from '@/components/table/table-sample';

export const TablePage = () => {
  return (
    <Content title={'テーブル'}>
      <Sample>
        <TableSample />
      </Sample>
    </Content>
  );
};
