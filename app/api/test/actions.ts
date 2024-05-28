'use server';

import { createHash } from 'node:crypto';

export type TestData = {
  id: number;
  name: string;
  address: string;
};

export type SearchTestDataConditions = {
  page?: number;
  limit?: number;
  field?: TestDataSortFiled;
  order?: Order;
};

export type SearchTestDataResult = {
  data: TestData[];
  total: number;
  conditions: Required<SearchTestDataConditions>;
  updatedAt: Date;
};

export async function searchTestData({
  page = 1,
  limit = 10,
  field = 'id',
  order = 'asc',
}: SearchTestDataConditions = {}): Promise<SearchTestDataResult> {
  console.log('searchTestData', { page, limit, field, order });
  const data = Array.from({ length: 100 }, (_, i) => {
    const id = i + 1;
    const name = createHash('sha256')
      .update(id.toString())
      .digest('hex')
      .slice(0, 4);
    const address = createHash('sha256')
      .update((i % 20).toString())
      .digest('hex')
      .slice(0, 4);
    return { id, name, address };
  });
  return {
    data: sortData(data, field, order).slice((page - 1) * limit, page * limit),
    total: data.length,
    conditions: {
      page,
      limit,
      field,
      order,
    },
    updatedAt: new Date(),
  };
}

export type TestDataSortFiled = 'id' | 'name' | 'address';

export type Order = 'asc' | 'desc';

function sortData(data: TestData[], field: TestDataSortFiled, order: Order) {
  return [...data].sort((a, b) => {
    const x = a[field];
    const y = b[field];
    if (x < y) return order === 'asc' ? -1 : 1;
    if (x > y) return order === 'asc' ? 1 : -1;
    return 0;
  });
}
