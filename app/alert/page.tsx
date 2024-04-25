import { Content } from '@/components/layouts/content';
import { Sample } from '@/components/layouts/sample';
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
