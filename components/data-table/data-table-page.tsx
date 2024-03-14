'use client';

import React from 'react';
import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { StaticDataTableSample } from '@/components/data-table/static-data-table-sample';
import { Pokemon } from '@/components/data-table/columns';

type Props = {
  data: Pokemon[];
};

export const DataTablePage = ({ data }: Props) => {
  return (
    <Content title={'データテーブル'}>
      <Sample>
        <StaticDataTableSample data={data} />
      </Sample>
    </Content>
  );
};
