import React from 'react';
import { Content } from '@/components/layouts/content';
import { ArticleList } from '@/app/article/articleList';

const Page = async () => {
  return (
    <Content title={'記事'}>
      <ArticleList />
    </Content>
  );
};

export default Page;
