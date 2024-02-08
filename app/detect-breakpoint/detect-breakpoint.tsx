'use client';

import { useDetectBreakpoint } from '@/app/detect-breakpoint/use-detect-breakpoint';

export const DetectBreakpoint = () => {
  const { breakpoint } = useDetectBreakpoint();
  return (
    <div>
      <p>{breakpoint || '(mobile)'}</p>
    </div>
  );
};
