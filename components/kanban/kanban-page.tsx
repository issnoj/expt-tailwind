import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { KanbanSample } from '@/components/kanban/kanban-sample';

export const KanbanPage = () => {
  return (
    <Content title={'カンバン'}>
      <Sample>
        <KanbanSample />
      </Sample>
    </Content>
  );
};
