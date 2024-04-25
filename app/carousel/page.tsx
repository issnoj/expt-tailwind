import { Content } from '@/components/layouts/content';
import { Sample } from '@/components/layouts/sample';
import { ImgGridCarouselSample } from '@/app/carousel/img-grid-carousel-sample';
import { ImgCarouselSample } from '@/app/carousel/img-carousel-sample';
import { ImgTweenCarouselSample } from '@/app/carousel/img-tween-carousel-sample';
import { PseudoCarousel } from '@/app/carousel/pseudo-carousel';
import React from 'react';

const Page = () => {
  return (
    <Content title={'カルーセル'}>
      <Sample>
        <ImgGridCarouselSample />
      </Sample>
      <Sample>
        <ImgCarouselSample />
      </Sample>
      <Sample>
        <ImgTweenCarouselSample />
      </Sample>
      <Sample>
        <PseudoCarousel />
      </Sample>
    </Content>
  );
};

export default Page;
