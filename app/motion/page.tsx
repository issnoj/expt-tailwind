import React from 'react';
import { Sample } from '@/components/sample';
import { Content } from '@/components/ui/content';
import { TabSample } from '@/app/motion/tab-sample';
import { HeartButtonSample } from '@/app/motion/heart-button-sample';
import { StaggerMenuSample } from '@/app/motion/stagger-menu-sample';
import { IconMotionSample } from '@/app/motion/IconMotionSample';

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
        <IconMotionSample />
      </Sample>
      <Sample>
        <TabSample />
      </Sample>
    </Content>
  );
};

export default Page;
