import { Content } from '@/components/layouts/content';
import { Sample } from '@/components/layouts/sample';
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
