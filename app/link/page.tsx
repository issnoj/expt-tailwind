import { LinkAnimateUnderlineSample } from '@/app/link/link-animate-underline-sample';
import { Content } from '@/components/layouts/content';
import { LinkAnimateBgSample } from '@/app/link/link-animate-bg-sample';
import { Sample } from '@/components/layouts/sample';

const Page = () => {
  return (
    <Content title={'リンク'}>
      <Sample>
        <LinkAnimateUnderlineSample />
      </Sample>
      <Sample>
        <LinkAnimateBgSample />
      </Sample>
    </Content>
  );
};

export default Page;
