'use client';

import { ToggleSidebar } from '@/app/sidebar';
import { ModeToggle } from '@/components/mode-toggle';

export const Header = () => {
  return (
    <header
      className={
        'sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-background px-3 shadow md:px-6'
      }
    >
      <div className={'flex items-center gap-3'}>
        <ToggleSidebar />
        <h1 className={'font-thin'}>issnoj&apos;s homepage</h1>
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
};
