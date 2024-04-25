'use client';

import { Link } from '@/components/ui/link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useAppContext } from '@/app/provider';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ToggleSidebar = () => {
  const { openMenu, setOpenMenu } = useAppContext();
  const pathname = usePathname();

  const handleClick = () => {
    const next = !openMenu;
    if (next) {
      window.document.body.classList.add('overflow-hidden');
    } else if (window.document.body.classList.contains('overflow-hidden')) {
      window.document.body.classList.remove('overflow-hidden');
    }
    setOpenMenu(next);
  };

  useEffect(() => {
    setOpenMenu(false);
    if (window.document.body.classList.contains('overflow-hidden')) {
      window.document.body.classList.remove('overflow-hidden');
    }
  }, [pathname, setOpenMenu]);

  return (
    <button
      className={cn(
        'flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'size-10 rounded-full md:hidden',
        'hover:bg-accent',
      )}
      onClick={handleClick}
    >
      {openMenu ? <X /> : <Menu />}
    </button>
  );
};

export const Sidebar = () => {
  const { openMenu } = useAppContext();
  return (
    <nav
      className={cn(
        'fixed top-0 z-40 h-full w-72 border-r bg-background pt-16 text-sm shadow',
        'transition-transform md:translate-x-0 md:opacity-100',
        !openMenu && '-translate-x-full',
      )}
    >
      <div
        className={cn(
          'flex h-full flex-col gap-4 overflow-y-auto overscroll-contain p-4 pb-14',
        )}
      >
        <div className={cn('flex flex-col gap-1 transition-transform')}>
          <SideHeading>行動</SideHeading>
          <SideLink href={'/link'}>リンク</SideLink>

          <SideHeading>情報</SideHeading>
          <SideLink href={'/typewriter'}>テキスト出現</SideLink>

          <SideHeading>選択</SideHeading>
          <SideLink href={'/text-field'}>テキスト入力</SideLink>
          <SideLink href={'/chat'}>チャット</SideLink>

          <SideHeading>容器</SideHeading>
          <SideLink href={'/table'}>テーブル</SideLink>
          <SideLink href={'/data-table'}>データテーブル</SideLink>
          <SideLink href={'/timeline'}>タイムライン</SideLink>
          <SideLink href={'/carousel'}>カルーセル</SideLink>
          <SideLink href={'/alert'}>アラート</SideLink>
          <SideLink href={'/kanban'}>カンバン</SideLink>

          <SideHeading>フック</SideHeading>
          <SideLink href={'/detect-breakpoint'}>
            ブレークポイントの取得
          </SideLink>

          <SideHeading>基本</SideHeading>
          <SideLink href={'/basic/layout'}>レイアウト</SideLink>
          <SideLink href={'/basic/text'}>テキスト</SideLink>
          <SideLink href={'/basic/button'}>ボタン</SideLink>
          <SideLink href={'/basic/3d'}>3D変形</SideLink>
          <SideLink href={'/dnd'}>ドラッグアンドドロップ</SideLink>
          <SideLink href={'/motion'}>モーション</SideLink>
        </div>
      </div>
    </nav>
  );
};

const SideHeading = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <h4 className={cn('mb-1 mt-2 text-sm font-semibold')} {...props}>
      {children}
    </h4>
  );
};

const SideLink: typeof Link = ({ children, ...props }) => {
  const current = usePathname() === props.href;
  return (
    <Link
      className={cn(
        'rounded border px-2 py-1 font-semibold text-foreground/60 no-underline',
        'bg-gradient-to-r from-secondary/50 via-background to-secondary/50',
        'hover:from-secondary hover:to-secondary hover:text-foreground hover:opacity-100 md:h-auto md:text-sm',
        current &&
          'pointer-events-none border-transparent from-background to-background',
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
