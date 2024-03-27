'use client';

import React from 'react';
import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { DndSample } from '@/components/dnd/dnd-sample';
import { Link } from '@/components/ui/link';
import { List, ListItem, ListToggleItem } from '@/components/ui/list/list';

export const DndPage = () => {
  return (
    <Content
      desc={
        <div>
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
        </div>
      }
      title={'ドラッグアンドドロップ'}
    >
      <Sample>
        <DndSample />
      </Sample>
    </Content>
  );
};
