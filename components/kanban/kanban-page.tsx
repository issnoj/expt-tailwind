import { Kanban } from '@/components/kanban/kanban';
import { Link } from '@/components/ui/link';
import { Content } from '@/components/ui/content';
import { Board } from '@/components/ui/board';

export const KanbanPage = () => {
  return (
    <Content title={'カンバン'}>
      <p>
        参考URL：
        <cite>
          <Link
            href={'https://www.hover.dev/components/boards'}
            target={'_blank'}
          >
            Boards
          </Link>
        </cite>
      </p>
      <Board>
        <Kanban />
      </Board>
    </Content>
  );
};
