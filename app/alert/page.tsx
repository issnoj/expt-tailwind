import { Content } from '@/components/ui/content';
import { Sample } from '@/components/sample';
import { CookieComplianceAlert } from '@/app/alert/cookie-compliance-alert';
import React from 'react';

const Page = () => {
  return (
    <Content title={'アラート'}>
      <Sample>
        <CookieComplianceAlert />
      </Sample>
    </Content>
  );
};

export default Page;
