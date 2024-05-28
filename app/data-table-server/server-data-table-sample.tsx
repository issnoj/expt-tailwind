'use client';

import { Board } from '@/components/layouts/board';
import React from 'react';
import {
  SearchTestDataResult,
  SearchTestDataConditions,
} from '@/app/api/test/actions';
import { ServerDataTable } from '@/app/data-table-server/server-data-table';
import { useRouter } from 'next/navigation';

type Props = {
  result: SearchTestDataResult;
};

export const ServerDataTableSample = ({ result }: Props) => {
  const router = useRouter();
  const [conditions, setConditions] = React.useState<SearchTestDataConditions>(
    result.conditions,
  );

  const handleChange = (conditions: SearchTestDataConditions) => {
    setConditions(conditions);
    const query = conditionsToQuery(conditions);
    router.push(`/data-table-server?${query}`);
  };

  return (
    <Board>
      {result.updatedAt && (
        <div>
          {String(new Date(result.updatedAt).getUTCMinutes()).padStart(2, '0')}:
          {String(new Date(result.updatedAt).getUTCSeconds()).padStart(2, '0')}:
          {String(new Date(result.updatedAt).getUTCMilliseconds()).padStart(
            3,
            '0',
          )}
        </div>
      )}
      <ServerDataTable
        conditions={result.conditions}
        data={result.data}
        onChange={handleChange}
        total={result.total}
      />
      <pre className={'mt-5'}>{JSON.stringify(conditions, null, 2)}</pre>
    </Board>
  );
};

function conditionsToQuery(conditions: SearchTestDataConditions) {
  return Object.entries(conditions)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}
