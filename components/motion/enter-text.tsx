'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const EnterText = () => {
  const [text, setText] = useState('文字列が１文字ずつ順番に出現します。');

  const handleClick = () => {
    setText('');
    setTimeout(() => setText('文字列が１文字ずつ順番に出現します。'), 100);
  };

  return (
    <div>
      <Button onClick={handleClick}>再表示</Button>
      <div className={'mt-4 h-[50px] w-[200px]'}>
        {text.split('').map((str, i) => (
          <motion.span
            animate={{ opacity: 1, y: 0 }}
            className={'inline-block'}
            initial={{ opacity: 0, y: '100%' }}
            key={i}
            transition={{
              duration: 0.1,
              delay: i / 10,
            }}
          >
            {str}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
