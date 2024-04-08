'use client';

import { Carousel, CarouselItem, useCarousel } from '@/components/ui/carousel';
import { Board } from '@/components/ui/board';
import { carouselSampleData } from '@/app/carousel/carousel-sample-data';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

export const ImgCarouselSample = () => {
  return (
    <div>
      <Board
        remark={
          <div>
            プログレスバーと表示中のスライド番号、総スライド数の表示
            <br />※ shadcn/ui Carousel の CarouselItem, useCarousel のみ利用
          </div>
        }
        title={'画像カルーセル'}
      >
        <div className={'px-10'}>
          <Carousel className={'max-w-sm'}>
            <Content />
          </Carousel>
        </div>
      </Board>
    </div>
  );
};

const Content = () => {
  const {
    carouselRef,
    api,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
  } = useCarousel();
  const [progress, setProgress] = useState(0);
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setProgress(progress * 100);
  }, []);

  const updateScrollSnapState = useCallback((emblaApi: EmblaCarouselType) => {
    setSnapCount(emblaApi.scrollSnapList().length);
    setSelectedSnap(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    onScroll(api);
    api.on('reInit', onScroll);
    api.on('scroll', onScroll);
    api.on('select', updateScrollSnapState);
  }, [api, onScroll, updateScrollSnapState]);

  return (
    <div>
      <div className={'relative flex flex-col rounded border'}>
        <div className={'bg-secondary p-4'}>
          <div
            className={'overflow-hidden rounded-lg bg-black pt-2'}
            ref={carouselRef}
          >
            <div className={'flex'}>
              {carouselSampleData.map((item) => (
                <CarouselItem className={'p-0'} key={item.src}>
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
            </div>
            <div className={'flex w-full items-center gap-3 px-3 py-1'}>
              <div
                className={
                  'relative h-1 w-full overflow-hidden rounded-full bg-white/20'
                }
              >
                <div
                  className={cn('h-full w-full flex-1 bg-white/60')}
                  style={{
                    transform: `translateX(-${100 - (progress || 0)}%)`,
                  }}
                />
              </div>
              <div className={'text-xs tracking-widest text-white'}>
                {selectedSnap + 1}/{snapCount}
              </div>
            </div>
          </div>
        </div>
        <div className={'flex flex-col bg-secondary px-4 pb-4'}>
          <div className={'flex h-10 gap-1'}>
            <button
              className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-l-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                'flex-1 border bg-background text-foreground hover:bg-foreground hover:text-background',
              )}
              disabled={!canScrollPrev}
              onClick={scrollPrev}
            >
              もどる
            </button>
            <button
              className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-r-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                'flex-1 border bg-background text-foreground hover:bg-foreground hover:text-background',
              )}
              disabled={!canScrollNext}
              onClick={scrollNext}
            >
              すすむ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
