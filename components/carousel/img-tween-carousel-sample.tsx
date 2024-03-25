'use client';

import { Board } from '@/components/ui/board';
import { carouselSampleData } from '@/components/carousel/carousel-sample-data';
import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ImgTweenCarouselSample = () => {
  return (
    <Board
      remark={
        <div>
          前後の画像の透明度・スケールを距離に応じて変更
          <br />
          Embra Carousel を利用
        </div>
      }
      title={'画像補間カルーセル'}
    >
      <div className={'px-10'}>
        <div className={'max-w-sm'}>
          <Content />
        </div>
      </div>
    </Board>
  );
};

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const Content = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const tweenFactor = useRef({
    opacity: 0,
    scale: 0,
  });
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current.opacity = 0.7 * emblaApi.scrollSnapList().length;
    tweenFactor.current.scale = 0.2 * emblaApi.scrollSnapList().length;
  }, []);

  const setTweenScaleNodes = useCallback(
    (emblaApi: EmblaCarouselType): void => {
      tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
        return slideNode.querySelector(
          '[data-label="slide-img"]',
        ) as HTMLElement;
      });
    },
    [],
  );

  const tween = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          // ループの対応
          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenOpacity =
            1 - Math.abs(diffToTarget * tweenFactor.current.opacity);
          emblaApi.slideNodes()[snapIndex].style.opacity = numberWithinRange(
            tweenOpacity,
            0,
            1,
          ).toString();
          const tweenScale =
            1 - Math.abs(diffToTarget * tweenFactor.current.scale);
          const scale = numberWithinRange(tweenScale, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    [],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    setTweenScaleNodes(emblaApi);
    tween(emblaApi);
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', setTweenScaleNodes)
      .on('reInit', tween)
      .on('scroll', tween);
  }, [emblaApi, setTweenFactor, setTweenScaleNodes, tween]);

  return (
    <div
      className={'flex flex-col gap-4 bg-black p-4'}
      onKeyDownCapture={handleKeyDown}
    >
      <div className={'overflow-hidden bg-black'} ref={emblaRef}>
        <div className={'-ml-2 flex'}>
          {carouselSampleData.map((item) => (
            <div className={'min-w-0 flex-[0_0_60%] pl-2'} key={item.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={item.src}
                className={'h-[200px] w-full rounded-xl object-cover'}
                data-label={'slide-img'}
                src={item.src}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={'flex gap-2'}>
        <MoveButton onClick={scrollPrev}>
          <ChevronLeft />
        </MoveButton>
        <MoveButton onClick={scrollNext}>
          <ChevronRight />
        </MoveButton>
      </div>
    </div>
  );
};

const MoveButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Button
      className={
        'rounded-full border-0 bg-transparent text-white hover:bg-white/80'
      }
      onClick={onClick}
      size={'icon'}
      variant={'outline'}
    >
      {children}
    </Button>
  );
};
