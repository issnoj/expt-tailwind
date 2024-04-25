import { Content } from '@/components/layouts/content';
import React from 'react';
import { Sample } from '@/components/layouts/sample';
import { TileSample } from '@/app/basic/layout/tile-sample';
import { List, ListItem } from '@/components/list/list';
import { Link } from '@/components/ui/link';

const Page = () => {
  return (
    <Content title={'レイアウト'}>
      <Sample
        desc={
          <List>
            <ListItem>
              記事や商品のカード型リスト、フッターなどでよく使うレイアウト
            </ListItem>
            <ListItem>
              <Link
                external
                href={'https://developer.mozilla.org/ja/docs/Web/CSS/grid'}
              >
                grid
              </Link>{' '}
              を利用する場合、
              <Link
                external
                href={
                  'https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-columns'
                }
              >
                grid-template-columns
              </Link>{' '}
              で repeat を用いて実現
            </ListItem>
          </List>
        }
        title={'タイル'}
      >
        <TileSample />
      </Sample>
    </Content>
  );
};

export default Page;
