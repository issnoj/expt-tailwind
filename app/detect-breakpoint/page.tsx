import { DetectBreakpointSample } from '@/app/detect-breakpoint/detect-breakpoint-sample';
import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';

const Page = () => {
  return (
    <Content title={'ブレークポイントの取得'}>
      <Sample>
        <DetectBreakpointSample />
      </Sample>
    </Content>
  );
};

export default Page;
