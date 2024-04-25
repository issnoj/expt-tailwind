import { Content } from '@/components/layouts/content';
import React from 'react';
import { VerticalAlignSample } from '@/app/basic/text/vertical-align-sample';
import { Sample } from '@/components/layouts/sample';
import { Link } from '@/components/ui/link';
import { FontVariantNumericSample } from '@/app/basic/text/font-variant-numeric-sample';
import { TextAdjustSample } from '@/app/basic/text/text-adjust-sample';
import { TextDecorationSample } from '@/app/basic/text/text-decoration-sample';

const Page = () => {
  return (
    <Content title={'テキスト'}>
      <Sample
        title={
          <Link
            external
            href={
              'https://developer.mozilla.org/ja/docs/Web/CSS/vertical-align'
            }
          >
            vertical-align
          </Link>
        }
      >
        <VerticalAlignSample />
      </Sample>
      <Sample
        title={
          <Link
            external
            href={
              'https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-numeric'
            }
          >
            font-variant-numeric
          </Link>
        }
      >
        <FontVariantNumericSample />
      </Sample>
      <Sample title={'調整'}>
        <TextAdjustSample />
      </Sample>
      <Sample title={'装飾'}>
        <TextDecorationSample />
      </Sample>
    </Content>
  );
};

export default Page;
