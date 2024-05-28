import { NextRequest } from 'next/server';
import {
  Order,
  searchTestData,
  TestDataSortFiled,
} from '@/app/api/test/actions';

export type ApiTestResponseData = Awaited<ReturnType<typeof searchTestData>>;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get('page')) || undefined;
  const limit = Number(searchParams.get('limit')) || undefined;
  const field = (searchParams.get('field') as TestDataSortFiled) || undefined;
  const order = (searchParams.get('order') as Order) || undefined;

  const data = await searchTestData({ page, limit, field, order });

  return Response.json(data);
}
