import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { StaticDataTableSample } from '@/app/data-table/static-data-table-sample';

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
    <Content title={'データテーブル'}>
      <Sample>
        <StaticDataTableSample data={data.pokemon} />
      </Sample>
    </Content>
  );
};

export default Page;
