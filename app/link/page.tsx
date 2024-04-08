import { LinkAnimateUnderlineSample } from '@/app/link/link-animate-underline-sample';
import { Content } from '@/components/ui/content';
import { OtherLinkSample } from '@/app/link/other-link-sample';
import { LinkAnimateBgSample } from '@/app/link/link-animate-bg-sample';
import { Sample } from '@/components/sample';

const Page = () => {
  return (
    <Content title={'リンク'}>
      <Sample>
        <LinkAnimateUnderlineSample />
      </Sample>
      <Sample>
        <LinkAnimateBgSample />
      </Sample>
      <Sample>
        <OtherLinkSample />
      </Sample>
    </Content>
  );
};

export default Page;
