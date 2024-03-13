'use client';

import React from 'react';
import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { CookieComplianceAlert } from './cookie-compliance-alert';

export const AlertPage = () => {
  return (
    <Content title={'アラート'}>
      <Sample>
        <CookieComplianceAlert />
      </Sample>
    </Content>
  );
};
