import { Content } from '@/components/layouts/content';
import { List, ListItem, ListToggleItem } from '@/components/list/list';
import { Link } from '@/components/ui/link';
import { Sample } from '@/components/layouts/sample';
import { DndSample } from '@/app/dnd/dnd-sample';
import React from 'react';

const Page = async () => {
  return (
    <Content desc={<Description />} title={'ドラッグアンドドロップ'}>
      <Sample>
        <DndSample />
      </Sample>
    </Content>
  );
};

export default Page;

const Description = () => {
  return (
    <List className={'leading-relaxed'}>
      <ListItem>
        <Link href={'https://docs.dndkit.com/'} target={'_blank'}>
          react-dnd-kit
        </Link>{' '}
        を利用
      </ListItem>
      <ListToggleItem title={'キーボード操作'} value={'1'}>
        <List>
          <ListItem>
            ドラッグ要素を選択し Space or Enter でドラッグ開始・終了
          </ListItem>
          <ListItem>Escape でキャンセル</ListItem>
          <ListItem>
            <Link
              href={
                'https://docs.dndkit.com/api-documentation/sensors/keyboard#coordinates-getter'
              }
              target={'_blank'}
            >
              デフォルト 25px 移動
            </Link>
          </ListItem>
        </List>
      </ListToggleItem>
    </List>
  );
};
