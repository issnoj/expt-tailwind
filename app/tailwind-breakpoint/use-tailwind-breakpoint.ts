import { useLayoutEffect, useRef, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const screens = resolveConfig(tailwindConfig).theme.screens;

type Key = keyof typeof screens;

const breakpoints = Object.entries(screens)
  .map(([key, value]) => {
    return {
      key,
      value: parseInt(value, 10),
    } as { key: Key; value: number };
  })
  .sort((a, b) => b.value - a.value);

export const useTailwindBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Key>();
  const currentBreakpointRef = useRef<Key>();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useLayoutEffect(() => {
    const handleResize = () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        const newBreakpoint = breakpoints.find(
          (v) => window.innerWidth > v.value,
        );
        if (newBreakpoint?.key !== currentBreakpointRef.current) {
          currentBreakpointRef.current = newBreakpoint?.key;
          setBreakpoint(newBreakpoint?.key);
        }
      }, 100);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return { breakpoint };
};
