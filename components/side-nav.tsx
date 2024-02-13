import { Link } from '@/components/ui/link';
import { ModeToggle } from '@/components/mode-toggle';

export const SideNav = () => {
  return (
    <nav>
      <div
        className={
          'fixed flex h-screen w-[300px] flex-col gap-4 overflow-y-auto overscroll-contain p-10'
        }
      >
        <ModeToggle />
        <Link href={'/detect-breakpoint'}>ブレークポイントの取得</Link>
        <Link href={'/link'}>リンク</Link>
      </div>
    </nav>
  );
};
