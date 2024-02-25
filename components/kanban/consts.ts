export type KanbanCard = {
  id: string;
  title: string;
  column: 'backlog' | 'todo' | 'doing' | 'done';
};

export const KANBAN_CARDS: KanbanCard[] = [
  // backlog
  {
    title: 'backlog 1',
    id: '1',
    column: 'backlog',
  },
  {
    title: 'backlog 2',
    id: '2',
    column: 'backlog',
  },
  {
    title: 'backlog 3',
    id: '3',
    column: 'backlog',
  },
  {
    title: 'backlog 4',
    id: '4',
    column: 'backlog',
  },
  // todo
  {
    title: 'todo 1',
    id: '5',
    column: 'todo',
  },
  {
    title: 'todo 2',
    id: '6',
    column: 'todo',
  },
  {
    title: 'todo 3',
    id: '7',
    column: 'todo',
  },
  // doing
  {
    title: 'doing 1',
    id: '8',
    column: 'doing',
  },
  {
    title: 'doing 2',
    id: '9',
    column: 'doing',
  },
  // done
  {
    title: 'done 1',
    id: '10',
    column: 'done',
  },
];
