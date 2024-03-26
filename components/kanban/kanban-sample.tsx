'use client';

import { Link } from '@/components/ui/link';
import { Board } from '@/components/ui/board';
import { Kanban } from '@/components/kanban/kanban';
import { ReRender } from '@/components/ui/re-render';
import { useCallback, useEffect, useState } from 'react';
import { KANBAN_CARDS, KanbanCard } from '@/components/kanban/consts';

export const KanbanSample = () => {
  const [cards, setCards] = useState<KanbanCard[]>();

  const handleChangeCards = useCallback((cards: KanbanCard[]) => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, []);

  const handleReRender = () => {
    localStorage.removeItem('cards');
    setCards(KANBAN_CARDS);
  };

  useEffect(() => {
    const cards = localStorage.getItem('cards');
    setCards(cards ? JSON.parse(cards) : KANBAN_CARDS);
  }, []);

  return (
    <Board
      remark={
        <p>
          参考URL：
          <cite>
            <Link
              href={'https://www.hover.dev/components/boards'}
              target={'_blank'}
            >
              Boards
            </Link>
          </cite>
        </p>
      }
      title={'カンバン'}
    >
      <div className={'h-[500px]'}>
        <ReRender
          callback={handleReRender}
          className={'h-[calc(100%-3.5rem)]'}
          collapse={false}
          text={'リセット'}
        >
          {cards && (
            <Kanban initialCards={cards} onChangeCards={handleChangeCards} />
          )}
        </ReRender>
      </div>
    </Board>
  );
};
