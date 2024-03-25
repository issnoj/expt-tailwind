'use client';

import React from 'react';
import { Content } from '@/components/ui/content';
import { ImgGridCarouselSample } from '@/components/carousel/img-grid-carousel-sample';
import { Sample } from '@/components/sample';
import { ImgCarouselSample } from '@/components/carousel/img-carousel-sample';
import { ImgTweenCarouselSample } from '@/components/carousel/img-tween-carousel-sample';
import { PseudoCarousel } from '@/components/carousel/PseudoCarousel';

export const CarouselPage = () => {
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
