'use client';

import { SetStateAction, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { KANBAN_CARDS, KanbanCard } from '@/components/kanban/consts';
import { Flame, Plus, Trash } from 'lucide-react';
import { motion } from 'framer-motion';

export const Kanban = () => {
  return (
    <div className={'h-[500px]'}>
      <Board />
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState<KanbanCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      return;
    }
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards, loading]);

  useEffect(() => {
    const cards = localStorage.getItem('cards');
    setCards(cards ? JSON.parse(cards) : KANBAN_CARDS);
    setLoading(false);
  }, []);

  return (
    <div className={'flex h-full gap-3 overflow-auto p-4'}>
      <Column
        cards={cards}
        column={'backlog'}
        setCards={setCards}
        title={'Backlog'}
      />
      <Column
        cards={cards}
        column={'todo'}
        setCards={setCards}
        title={'TODO'}
      />
      <Column
        cards={cards}
        column={'doing'}
        setCards={setCards}
        title={'In progress'}
      />
      <Column
        cards={cards}
        column={'done'}
        setCards={setCards}
        title={'Completed'}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const Column = ({
  title,
  column,
  cards,
  setCards,
}: {
  title: string;
  column: KanbanCard['column'];
  cards: KanbanCard[];
  setCards: React.Dispatch<SetStateAction<KanbanCard[]>>;
}) => {
  const [active, setActive] = useState(false);

  const filteredCards = cards.filter((c) => c.column === column);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    card: KanbanCard,
  ) => {
    e.dataTransfer.setData('cardId', card.id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
    clearHighlightIndicator();
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setActive(false);
    clearHighlightIndicator();
    const cardId = e.dataTransfer.getData('cardId');
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);
    const beforeCardId = element.dataset.before || '-1';

    // 変更がなければ何もしない
    if (beforeCardId === cardId) {
      return;
    }

    // 移動するカードをカードリストから除いて column を更新
    let newCards = [...cards];
    const cardToTransfer = newCards.find((card) => card.id === cardId);
    if (!cardToTransfer) {
      return;
    }
    newCards = newCards.filter((card) => card.id !== cardId);
    cardToTransfer.column = column;

    // 末尾の場合、末尾に追加して終了
    const moveToBack = beforeCardId === '-1';
    if (moveToBack) {
      newCards.push(cardToTransfer);
      setCards(newCards);
      return;
    }

    // 移動先のインデックスを取得
    const insertAtIndex = newCards.findIndex((el) => el.id === beforeCardId);
    if (insertAtIndex === undefined) {
      return;
    }
    newCards.splice(insertAtIndex, 0, cardToTransfer);
    setCards(newCards);
  };

  const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();
    clearHighlightIndicator(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = '1';
  };

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll<HTMLElement>(`[data-column="${column}"]`),
    );
  };

  const getNearestIndicator = (
    e: React.DragEvent<HTMLDivElement>,
    indicators: HTMLElement[],
  ) => {
    const DISTANCE_OFFSET = 50;
    return indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      },
    );
  };

  const clearHighlightIndicator = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();
    indicators.forEach((indicator) => {
      indicator.style.opacity = '0';
    });
  };

  return (
    <div className={'w-56 shrink-0'}>
      <div className={'mb-3 flex items-center justify-between'}>
        <h3 className={'font-medium'}>{title}</h3>
        <span className={'rounded text-sm text-foreground/60'}>
          {filteredCards.length}
        </span>
      </div>
      <div
        className={cn(`w-full transition-colors`, active && 'bg-secondary/60')}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDragEnd}
      >
        <AddCard column={column} setCards={setCards} />
        {filteredCards.map((card) => {
          return (
            <Card card={card} handleDragStart={handleDragStart} key={card.id} />
          );
        })}
        <DropIndicator beforeId={'-1'} column={column} />
      </div>
    </div>
  );
};

const Card = ({
  card,
  handleDragStart,
}: {
  card: KanbanCard;
  handleDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    card: KanbanCard,
  ) => void;
}) => {
  return (
    <>
      <DropIndicator beforeId={card.id} column={card.column} />
      <motion.div
        className={
          'cursor-grab rounded border bg-secondary p-3 active:cursor-grabbing'
        }
        draggable
        layout
        layoutId={card.id}
        // @ts-ignore
        onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
          handleDragStart(e, card)
        }
      >
        <p className={'text-sm'}>{card.title}</p>
      </motion.div>
    </>
  );
};

const DropIndicator = ({
  beforeId,
  column,
}: {
  beforeId: string;
  column: string;
}) => {
  return (
    <div
      className={'my-0.5 h-0.5 w-full cursor-default bg-violet-400 opacity-0'}
      data-before={beforeId || '-1'}
      data-column={column}
    />
  );
};

const BurnBarrel = ({
  setCards,
}: {
  setCards: React.Dispatch<SetStateAction<KanbanCard[]>>;
}) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(false);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData('cardId');
    setCards((pv) => pv.filter((card) => card.id !== cardId));
    setActive(false);
  };

  return (
    <div
      className={cn(
        'mt-10 grid size-56 shrink-0 place-content-center rounded border text-3xl',
        active
          ? 'border-red-800 bg-red-800/20 text-red-500'
          : 'border-border bg-secondary/60',
      )}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDragEnd}
    >
      {active ? (
        <Flame className={'pointer-events-none animate-bounce'} />
      ) : (
        <Trash />
      )}
    </div>
  );
};

const AddCard = ({
  column,
  setCards,
}: {
  column: KanbanCard['column'];
  setCards: React.Dispatch<SetStateAction<KanbanCard[]>>;
}) => {
  const [text, setText] = useState('');
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim().length) return;
    const newCard: KanbanCard = {
      id: Math.random().toString(),
      title: text.trim(),
      column,
    };
    setCards((pv) => [newCard, ...pv]);
    setText('');
    setAdding(false);
  };

  const handleClose = () => {
    setText('');
    setAdding(false);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            autoFocus
            className={
              'w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm placeholder-violet-300 focus:outline-0'
            }
            onChange={(e) => setText(e.target.value)}
            placeholder={'Add new task...'}
          />
          <div className={'mt-1.5 flex items-center justify-end gap-1.5'}>
            <button
              className={
                'px-3 py-1.5 text-xs text-foreground/60 hover:text-foreground'
              }
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className={
                'flex items-center gap-1.5 rounded bg-primary px-3 py-1.5 text-xs text-primary-foreground hover:bg-primary/90'
              }
              type={'submit'}
            >
              <span>Add</span>
              <Plus size={'1em'} />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          className={
            'flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-foreground/60 hover:text-foreground'
          }
          layout
          onClick={() => setAdding(true)}
        >
          <span>Add card</span>
          <Plus size={'1em'} />
        </motion.button>
      )}
    </>
  );
};
