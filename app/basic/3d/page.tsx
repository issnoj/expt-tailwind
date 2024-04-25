import { Content } from '@/components/layouts/content';
import React from 'react';
import { Sample } from '@/components/layouts/sample';
import { Link } from '@/components/ui/link';
import { RotateSample } from '@/app/basic/3d/rotate-sample';
import { List, ListItem } from '@/components/list/list';
import { TranslateSample } from '@/app/basic/3d/translate-sample';
import { ScaleSample } from '@/app/basic/3d/scale-sample';

const Page = () => {
  return (
    <Content title={'3D変形'}>
      <Description />
      <Sample
        title={
          <Link
            external
            href={'https://developer.mozilla.org/ja/docs/Web/CSS/rotate'}
          >
            rotate
          </Link>
        }
      >
        <RotateSample />
      </Sample>
      <Sample
        title={
          <Link
            external
            href={'https://developer.mozilla.org/ja/docs/Web/CSS/translate'}
          >
            translate
          </Link>
        }
      >
        <TranslateSample />
      </Sample>
      <Sample
        title={
          <Link
            external
            href={'https://developer.mozilla.org/ja/docs/Web/CSS/scale'}
          >
            scale
          </Link>
        }
      >
        <ScaleSample />
      </Sample>
    </Content>
  );
};

export default Page;

const Description = () => (
  <List>
    <ListItem>
      3D 変形を利用するには親要素に{' '}
      <Link
        external
        href={'https://developer.mozilla.org/ja/docs/Web/CSS/transform-style'}
      >
        transform-style
      </Link>{' '}
      に preserve-3d を指定し、必要に応じて以下の視点の設定をする
      <p className={'text-sm text-foreground/60'}>
        ※ preserve-3d を指定しない場合はデフォルト値 flat
        となり、奥行きが考慮されず平面上に配置される
      </p>
      <List>
        <ListItem>
          <Link
            external
            href={'https://developer.mozilla.org/ja/docs/Web/CSS/perspective'}
          >
            perspective
          </Link>{' '}
          : 視点のZ位置。デフォルトは無限遠。
        </ListItem>
        <ListItem>
          <Link
            external
            href={
              'https://developer.mozilla.org/ja/docs/Web/CSS/perspective-origin'
            }
          >
            perspective-origin
          </Link>{' '}
          : 視点のXY位置。デフォルトは中央視点。
        </ListItem>
      </List>
    </ListItem>
    <ListItem>
      以前まで、移動、回転、拡大は{' '}
      <Link
        external
        href={'https://developer.mozilla.org/ja/docs/Web/CSS/transform'}
      >
        transform
      </Link>{' '}
      による指定しかできなかったが、個別のプロパティが利用可能になった。傾斜
      (skew) の個別プロパティはない。
    </ListItem>
    <ListItem>
      変形の基準点は{' '}
      <Link
        external
        href={'https://developer.mozilla.org/ja/docs/Web/CSS/transform-origin'}
      >
        transform-origin
      </Link>{' '}
      で指定する。デフォルトは中央。
    </ListItem>
  </List>
);
