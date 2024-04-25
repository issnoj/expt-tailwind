'use client';

import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';
import { ChevronRight, Dot } from 'lucide-react';

export const List = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <AccordionPrimitive.Root asChild type={'multiple'}>
      <ul className={cn('flex flex-col gap-1', className)} {...props}>
        {children}
      </ul>
    </AccordionPrimitive.Root>
  );
};

export const ListItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
  <li
    className={cn('relative ml-5 [&_ul]:mt-1', className)}
    ref={ref}
    {...props}
  >
    <div className={'absolute -left-5 grid h-[1lh] place-content-center'}>
      <Dot className="size-4 scale-150" />
    </div>
    {children}
  </li>
));
ListItem.displayName = 'ListItem';

export const ListToggleItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    title: string;
  }
>(({ title, className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item asChild className={className} ref={ref} {...props}>
      <li>
        <ListToggleTitle className={'block'}>{title}</ListToggleTitle>
        <ListToggleContent>{children}</ListToggleContent>
      </li>
    </AccordionPrimitive.Item>
  );
});
ListToggleItem.displayName = 'ListToggleItem';

const ListToggleContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    className="overflow-hidden pl-5 text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ref={ref}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));

ListToggleContent.displayName = 'ListContent';

const ListToggleTitle = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      className={cn(
        'relative ml-5 transition-all hover:underline [&[data-state=open]_svg]:rotate-90',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className={'absolute -left-5 grid h-[1lh] place-content-center'}>
        <ChevronRight className="size-4 transition-transform duration-200" />
      </div>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
ListToggleTitle.displayName = 'ToggleListTrigger';
