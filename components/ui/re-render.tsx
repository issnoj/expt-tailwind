import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  callback?: () => void;
  collapse?: boolean;
  text?: string;
};

export const ReRender = ({
  children,
  className,
  callback,
  collapse = true,
  text = '再表示',
}: Props) => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
    if (callback) callback();
    setTimeout(() => setShow(true), 1);
  };

  return (
    <div className={cn('space-y-4', className)}>
      <Button onClick={handleClick}>{text}</Button>
      {show ? (
        <div>{children}</div>
      ) : collapse ? (
        <div className={'collapse'}>{children}</div>
      ) : null}
    </div>
  );
};
