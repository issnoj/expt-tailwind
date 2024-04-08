import { cn } from '@/lib/utils';

export type LinkAnimateBgProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    direction:
      | 'h-center' // 中央から出現
      | 'left' // 左から出現
      | 'left-right' // 左から出現し、右に消える
      | 'right' // 右から出現
      | 'right-left' // 右から出現し、左に消える
      | 'v-center' // 中央から出現
      | 'top' // 上から出現
      | 'top-bottom' // 上から出現し、下に消える
      | 'bottom' // 下から出現
      | 'bottom-top'; // 下から出現し、上に消える
  };

export const LinkAnimateBg = ({
  direction = 'h-center',
  className,
  children,
  ...props
}: LinkAnimateBgProps) => {
  if (
    ['h-center', 'left', 'left-right', 'right', 'right-left'].includes(
      direction,
    )
  ) {
    return (
      <Horizontal className={className} direction={direction} {...props}>
        {children}
      </Horizontal>
    );
  }
  if (
    ['v-center', 'top', 'top-bottom', 'bottom', 'bottom-top'].includes(
      direction,
    )
  ) {
    return (
      <Vertical className={className} direction={direction} {...props}>
        {children}
      </Vertical>
    );
  }
  return (
    <CenterCircle className={className} direction={direction} {...props}>
      {children}
    </CenterCircle>
  );
};

const Horizontal = ({
  direction,
  className,
  children,
  ...props
}: LinkAnimateBgProps) => {
  return (
    <a
      className={cn(
        'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
        '[&:hover>span]:scale-x-100',
        direction === 'left-right' && '[&:hover>span]:origin-left',
        direction === 'right-left' && '[&:hover>span]:origin-right',
        className,
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          'absolute bottom-0 left-0 size-full bg-foreground/10 transition-transform ease-out',
          'scale-x-0',
          direction === 'h-center' && 'origin-center',
          direction === 'left' && 'origin-left',
          direction === 'right-left' && 'origin-left',
          direction === 'right' && 'origin-right',
          direction === 'left-right' && 'origin-right',
        )}
      />
    </a>
  );
};

const Vertical = ({
  direction,
  className,
  children,
  ...props
}: LinkAnimateBgProps) => {
  return (
    <a
      className={cn(
        'relative px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
        '[&:hover>span]:scale-y-100',
        direction === 'top-bottom' && '[&:hover>span]:origin-top',
        direction === 'bottom-top' && '[&:hover>span]:origin-bottom',
        className,
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          'absolute bottom-0 left-0 size-full bg-foreground/10 transition-transform ease-out',
          'scale-y-0',
          direction === 'v-center' && 'origin-center',
          direction === 'top' && 'origin-top',
          direction === 'bottom' && 'origin-bottom',
          direction === 'top-bottom' && 'origin-bottom',
          direction === 'bottom-top' && 'origin-top',
        )}
      />
    </a>
  );
};

const CenterCircle = ({
  className,
  children,
  ...props
}: LinkAnimateBgProps) => {
  return (
    <a
      className={cn(
        'relative inline-block px-8 py-2 font-bold text-foreground/60 hover:text-foreground',
        'overflow-hidden [&:hover>span]:scale-110',
        className,
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          'absolute w-[100%] rounded-[100%] bg-foreground/10 transition-all ease-out',
          // inset-0,m-auto で中央配置, h-0,pt-[100%] で高さを横幅と同じにして円に
          'inset-0 m-auto h-0 pt-[100%]',
          'origin-center scale-0',
        )}
      />
    </a>
  );
};
