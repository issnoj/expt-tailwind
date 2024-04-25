import { Content } from '@/components/layouts/content';
import { Sample } from '@/components/layouts/sample';
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
