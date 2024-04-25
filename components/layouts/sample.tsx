'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  title?: React.ReactNode;
  code?: string;
  meta?: string;
  desc?: React.ReactNode;
};

export const Sample = ({ title, desc, children }: Props) => {
  return (
    <div>
      {title && <h2 className={'mb-5 font-bold'}>{title}</h2>}
      {desc && <h2 className={'mb-5 text-sm'}>{desc}</h2>}
      {children}
    </div>
  );
};
