'use client';

import React from 'react';
import { Content } from '@/components/ui/content';
import { ImgGridCarouselSample } from '@/components/carousel/img-grid-carousel-sample';
import { Sample } from '@/components/sample';
import { ImgSlideCarouselSample } from '@/components/carousel/img-slide-carousel-sample';

export const CarouselPage = () => {
  return (
    <Content title={'カルーセル'}>
      <Sample>
        <ImgGridCarouselSample />
      </Sample>
      <Sample>
        <ImgSlideCarouselSample />
      </Sample>
    </Content>
  );
};
