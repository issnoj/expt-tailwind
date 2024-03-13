import { Column, ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, ArrowUp, ArrowDown, MoreHorizontal } from 'lucide-react';

const sortIcons = {
  asc: ArrowUp,
  desc: ArrowDown,
  none: ArrowUpDown,
};

const pokemon = {
  id: 1,
  num: '001',
  name: 'Bulbasaur',
  img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
  type: ['Grass', 'Poison'],
  height: '0.71 m',
  weight: '6.9 kg',
  candy: 'Bulbasaur Candy',
  candy_count: 25,
  egg: '2 km',
  spawn_chance: 0.69,
  avg_spawns: 69,
  spawn_time: '20:00',
  multipliers: [1.58],
  weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  next_evolution: [
    {
      num: '002',
      name: 'Ivysaur',
    },
    {
      num: '003',
      name: 'Venusaur',
    },
  ],
};

export type Pokemon = typeof pokemon;

interface NameColumnMeta<TValue> {
  name: string;
}

type HeaderProps<TData, TValue> = {
  column: Column<TData, TValue>;
  title: string;
};

const Header = <TData, TValue>({
  column,
  title,
}: HeaderProps<TData, TValue>) => {
  const SortIcon = sortIcons[column.getIsSorted() || 'none'];
  return (
    <Button
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      variant="ghost"
    >
      {title}
      <SortIcon className="ml-2 h-4 w-4" />
    </Button>
  );
};

export const columns: ColumnDef<Pokemon, NameColumnMeta<{ name: string }>>[] = [
  {
    accessorKey: 'num',
    enableHiding: false,
    header: ({ column }) => <Header column={column} title={'名前'} />,
    cell: ({ row }) => {
      const pokemon = row.original;
      return <div className={'text-center'}>{pokemon.num}</div>;
    },
  },
  {
    accessorKey: 'name',
    enableHiding: false,
    header: ({ column }) => <Header column={column} title={'番号'} />,
    cell: ({ row }) => (
      <div className={'font-bold'}>{row.getValue('name')}</div>
    ),
  },
  {
    accessorKey: 'height',
    meta: {
      name: '身長',
    },
    header: ({ column }) => <Header column={column} title={'身長'} />,
  },
  {
    accessorKey: 'weight',
    meta: {
      name: '体重',
    },
    header: ({ column }) => <Header column={column} title={'体重'} />,
  },
  {
    accessorKey: 'spawn_chance',
    meta: {
      name: '出現率',
    },
    header: ({ column }) => <Header column={column} title={'出現率'} />,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const pokemon = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0" variant="ghost">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(pokemon.name)}
            >
              Copy name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
