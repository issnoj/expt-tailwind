import type { Meta, StoryObj } from '@storybook/react';

import { Typewriter } from './typewriter';

const meta: Meta<typeof Typewriter> = {
  component: Typewriter,
  tags: ['autodocs'],
  args: {
    text: '文字列が１文字ずつ順番に出現します。',
  },
};

export default meta;
type Story = StoryObj<typeof Typewriter>;

export const Default: Story = {};

export const Custom: Story = {
  args: {
    duration: 0.4,
    delay: 0.2,
    x: '100%',
    y: '100%',
  },
};
