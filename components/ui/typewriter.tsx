import { motion } from 'framer-motion';

export type TypewriterProps = {
  text: string;
  duration?: number;
  delay?: number;
  x?: string | number;
  y?: string | number;
};

export const Typewriter = ({
  text,
  duration = 0.1,
  delay = 0.1,
  x = 0,
  y = 0,
}: TypewriterProps) => {
  return (
    <>
      {text.split('').map((char, i) => (
        <motion.span
          animate={{ opacity: 1, x: 0, y: 0 }}
          className={'inline-block'}
          initial={{ opacity: 0, x, y }}
          key={i}
          transition={{
            duration,
            delay: i * delay,
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};
