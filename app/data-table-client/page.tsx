import { Content } from '@/components/layouts/content';
import { Sample } from '@/components/layouts/sample';
import { ClientDataTableSample } from '@/app/data-table-client/client-data-table-sample';

async function getData() {
  const res = await fetch(
    'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Page = async () => {
  const data = await getData();

  return (
    <Content title={'クライアントサイドデータテーブル'}>
      <Sample>
        <ClientDataTableSample data={data.pokemon} />
      </Sample>
    </Content>
  );
};

export default Page;
