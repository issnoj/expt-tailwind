import React from 'react';
import { Sample } from '@/components/layouts/sample';
import { Content } from '@/components/layouts/content';
import { TabSample } from '@/app/motion/tab-sample';
import { HeartButtonSample } from '@/app/motion/heart-button-sample';
import { StaggerMenuSample } from '@/app/motion/stagger-menu-sample';
import { HamburgerButtonSample } from './hamburger-button-sample';

const Page = () => {
  return (
    <Content title={'モーション'}>
      <Sample>
        <HeartButtonSample />
      </Sample>
      <Sample>
        <StaggerMenuSample />
      </Sample>
      <Sample>
        <HamburgerButtonSample />
      </Sample>
      <Sample>
        <TabSample />
      </Sample>
    </Content>
  );
};

export default Page;
