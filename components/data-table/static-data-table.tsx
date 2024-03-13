import { DataTable } from '@/components/data-table/data-table';
import { columns, Pokemon } from './columns';
import { Board } from '@/components/ui/board';

type Props = {
  data: Pokemon[];
};

export const StaticDataTable = ({ data }: Props) => {
  return (
    <Board title={'静的データテーブル'}>
      <DataTable columns={columns} data={data} />
    </Board>
  );
};
