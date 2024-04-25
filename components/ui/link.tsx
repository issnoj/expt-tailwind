import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  NextLinkProps & {
    external?: boolean;
  };

export const Link = ({ external, href, className, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        'inline-flex items-center underline',
        'hover:opacity-80 active:opacity-80',
        className,
      )}
      href={href}
      target={external ? '_blank' : undefined}
      title={external ? href : undefined}
      {...props}
    >
      {props.children}
      {external && <ExternalLink className={'mx-1 size-[1em]'} />}
    </NextLink>
  );
};
