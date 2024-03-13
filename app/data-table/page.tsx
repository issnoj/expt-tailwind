import { DataTablePage } from '@/components/data-table/data-table-page';

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

  return <DataTablePage data={data.pokemon} />;
};

export default Page;
