'use client';

import { useTailwindBreakpoint } from '@/app/tailwind-breakpoint/use-tailwind-breakpoint';

export const TailwindBreakpoint = () => {
  const { breakpoint } = useTailwindBreakpoint();
  return (
    <div>
      <h1>tailwind breakpoint</h1>
      <p>{breakpoint}</p>
    </div>
  );
};
