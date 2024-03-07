'use client';

import { stagger, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export const StaggerMenu = () => {
  const [scope, animate] = useAnimate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    animate('ul', {
      opacity: open ? 1 : 0,
      y: open ? 0 : -10,
    });
    animate('li', open ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }, {
      ease: 'easeInOut',
      delay: stagger(0.05, { from: open ? 'first' : 'last' }),
      duration: 0.2,
    });
  }, [animate, open]);

  return (
    <div className={'h-[250px] w-[200px] overflow-hidden border'}>
      <div className={'h-full bg-secondary p-2'}>
        <div>
          <Button onClick={handleClick} size={'icon'}>
            <Menu />
          </Button>
          <nav className={'relative'} ref={scope}>
            <ul
              className={
                'absolute top-2 w-full overflow-hidden rounded bg-background p-2 shadow'
              }
              style={{ opacity: 0 }}
            >
              <li>リスト1</li>
              <li>リスト2</li>
              <li>リスト3</li>
              <li>リスト4</li>
              <li>リスト5</li>
            </ul>
          </nav>
        </div>
        <article className={'mt-2 text-xs'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </article>
      </div>
    </div>
  );
};
