import React from 'react';
import { ArticleList } from '@/app/article/articleList';
import { Link } from '@/components/ui/link';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className={'hidden p-4 xl:block'} defaultSize={20}>
        <h2 className={'mb-2 text-sm font-bold'}>記事一覧</h2>
        <ArticleList />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80} minSize={50}>
        <div className={'flex flex-col gap-10 px-4 py-10 md:px-10'}>
          <Link className={'xl:hidden'} href={'/article'}>
            記事の一覧へ
          </Link>
          <article className={'prose dark:prose-invert'}>{children}</article>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Layout;
