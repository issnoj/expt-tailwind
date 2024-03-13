import { Link } from '@/components/ui/link';
import { ModeToggle } from '@/components/mode-toggle';

export const SideNav = () => {
  return (
    <nav>
      <div
        className={
          'fixed flex h-screen w-[300px] flex-col gap-4 overflow-y-auto overscroll-contain p-10 text-sm'
        }
      >
        <ModeToggle />
        <hr />
        <Link href={'/detect-breakpoint'}>ブレークポイントの取得</Link>
        <Link href={'/link'}>リンク</Link>
        <Link href={'/kanban'}>カンバン</Link>
        <Link href={'/motion'}>モーション</Link>
        <Link href={'/typewriter'}>テキスト出現</Link>
        <Link href={'/table'}>テーブル</Link>
        <Link href={'/data-table'}>データテーブル</Link>
        <Link href={'/alert'}>アラート</Link>
      </div>
    </nav>
  );
};
