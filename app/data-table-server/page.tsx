import { Content } from '@/components/layouts/content';
import { Sample } from '@/components/layouts/sample';
import { ServerDataTableSample } from '@/app/data-table-server/server-data-table-sample';
import { ApiTestResponseData } from '@/app/api/test/route';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async ({ searchParams }: Props) => {
  const response = await fetch(
    url('http://localhost:3000/api/test', searchParams),
    { cache: 'no-cache' },
  );
  const result = (await response.json()) as ApiTestResponseData;

  return (
    <Content title={'サーバーサイドデータテーブル'}>
      <Sample>
        <ServerDataTableSample result={result} />
      </Sample>
    </Content>
  );
};

export default Page;

function url(
  base: string,
  searchParams: { [key: string]: string | string[] | undefined },
) {
  const urlSearchParams = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => urlSearchParams.append(key, v));
    } else if (value !== undefined) {
      urlSearchParams.append(key, value);
    }
  });

  const queryString = urlSearchParams.toString();

  return queryString ? `${base}?${queryString}` : base;
}
