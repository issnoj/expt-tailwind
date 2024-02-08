import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cn } from '@/lib/utils';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps;

export const Link = ({ className, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        'underline',
        'hover:opacity-80 active:opacity-80',
        className,
      )}
      {...props}
    >
      {props.children}
    </NextLink>
  );
};
