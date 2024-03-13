import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  children: React.ReactNode;
  callback?: () => void;
};

export const ReRender = ({ children, callback }: Props) => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
    if (callback) callback();
    setTimeout(() => setShow(true), 1);
  };

  return (
    <div className={'space-y-4'}>
      <Button onClick={handleClick}>再表示</Button>
      {show ? children : <div className={'collapse'}>{children}</div>}
    </div>
  );
};
