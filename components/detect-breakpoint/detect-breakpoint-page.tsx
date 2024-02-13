'use client';

import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { useDetectBreakpoint } from '@/components/detect-breakpoint/use-detect-breakpoint';

export const DetectBreakpointPage = () => {
  const { breakpoint } = useDetectBreakpoint();
  return (
    <Content title={'ブレークポイントの取得'}>
      <Sample>
        <p>{breakpoint}</p>
      </Sample>
    </Content>
  );
};
