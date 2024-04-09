import { motion, VariantLabels, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

const Line = ({
  width,
  y,
  variants,
  animate,
}: {
  width: number;
  y: number;
  variants: Variants;
  animate: VariantLabels;
}) => (
  <motion.line
    animate={animate}
    fill="transparent"
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth={3}
    variants={variants}
    x1={0}
    x2={width}
    y1={y}
    y2={y}
  />
);

type Props = {
  open: boolean;
  onClick: () => void;
  className?: string;
  width?: number;
  height?: number;
};

export const HamburgerButton = ({
  open,
  onClick,
  className,
  width = 24,
  height = 18,
}: Props) => {
  const variant = open ? 'opened' : 'closed';
  const gap = height / 2;

  return (
    <button
      className={cn(
        'grid size-[40px] place-content-center text-primary',
        className,
      )}
      onClick={onClick}
    >
      <svg
        height={height}
        overflow={'visible'}
        viewBox={`0 0 ${width} ${height}`}
        width={width}
      >
        <Line
          animate={variant}
          variants={{
            closed: {
              rotate: 0,
              translateY: 0,
            },
            opened: {
              rotate: 45,
              translateY: gap,
            },
          }}
          width={width}
          y={0}
        />
        <Line
          animate={variant}
          variants={{
            closed: {
              opacity: 1,
            },
            opened: {
              opacity: 0,
            },
          }}
          width={width}
          y={gap}
        />
        <Line
          animate={variant}
          variants={{
            closed: {
              rotate: 0,
              translateY: 0,
            },
            opened: {
              rotate: -45,
              translateY: -gap,
            },
          }}
          width={width}
          y={gap * 2}
        />
      </svg>
    </button>
  );
};
