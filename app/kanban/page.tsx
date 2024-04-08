import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { KanbanSample } from './kanban-sample';

const Page = () => {
  return (
    <Content title={'カンバン'}>
      <Sample>
        <KanbanSample />
      </Sample>
    </Content>
  );
};

export default Page;
