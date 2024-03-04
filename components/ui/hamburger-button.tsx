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
    x1={0}
    x2={width}
    y1={y}
    y2={y}
    strokeWidth={3}
    fill="transparent"
    stroke="currentColor"
    strokeLinecap="round"
    variants={variants}
    animate={animate}
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
      onClick={onClick}
      className={cn(
        'grid size-[40px] place-content-center text-primary',
        className,
      )}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        overflow={'visible'}
      >
        <Line
          width={width}
          y={0}
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
        />
        <Line
          width={width}
          y={gap}
          animate={variant}
          variants={{
            closed: {
              opacity: 1,
            },
            opened: {
              opacity: 0,
            },
          }}
        />
        <Line
          width={width}
          y={gap * 2}
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
        />
      </svg>
    </button>
  );
};
