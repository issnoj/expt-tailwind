'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from '@/components/ui/carousel';
import { Board } from '@/components/ui/board';
import { carouselSampleData } from '@/components/carousel/carousel-sample-data';

export const ImgGridCarouselSample = () => {
  return (
    <Board
      remark={<div>※ shadcn/ui Carousel をほぼそのまま利用</div>}
      title={'画像タイル状カルーセル'}
    >
      <div className={'px-10'}>
        <Carousel
          className={'w-[200px]'}
          opts={{
            loop: true,
          }}
        >
          <ShadcnCarouselContent />
        </Carousel>
      </div>
    </Board>
  );
};

const ShadcnCarouselContent = () => {
  const { api } = useCarousel();

  const handleClickThumbnail = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  return (
    <div>
      <div className={'relative'}>
        <CarouselContent>
          {carouselSampleData.map((item) => (
            <CarouselItem key={item.src}>
              <div className={'flex justify-center'}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={item.src}
                  className={'size-[200px] object-contain'}
                  src={item.src}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <div
        className={
          'mt-4 grid w-full grid-cols-[repeat(3,60px)] justify-between gap-y-[10px]'
        }
      >
        {carouselSampleData.map((item, i) => (
          <div
            className={'cursor-pointer'}
            key={item.src}
            onClick={() => handleClickThumbnail(i)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={item.src} src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );
};
