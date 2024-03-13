'use client';

import React from 'react';
import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { StaticDataTable } from '@/components/data-table/static-data-table';
import { Pokemon } from '@/components/data-table/columns';

type Props = {
  data: Pokemon[];
};

export const DataTablePage = ({ data }: Props) => {
  return (
    <Content title={'データテーブル'}>
      <Sample>
        <StaticDataTable data={data} />
      </Sample>
    </Content>
  );
};
