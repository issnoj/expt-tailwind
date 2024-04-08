'use client';

import { useDetectBreakpoint } from '@/app/detect-breakpoint/use-detect-breakpoint';

export const DetectBreakpointSample = () => {
  const { breakpoint } = useDetectBreakpoint();
  return <p>{breakpoint}</p>;
};
