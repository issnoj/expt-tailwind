import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { TableSample } from '@/app/table/table-sample';
import React from 'react';

const Page = () => {
  return (
    <Content title={'テーブル'}>
      <Sample>
        <TableSample />
      </Sample>
    </Content>
  );
};

export default Page;
