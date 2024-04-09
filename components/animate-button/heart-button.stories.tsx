import type { Meta, StoryObj } from '@storybook/react';

import { HeartButton } from './heart-button';

const meta: Meta<typeof HeartButton> = {
  component: HeartButton,
  tags: ['autodocs'],
  args: {
    initialState: { value: 999, clicked: false },
  },
};

export default meta;
type Story = StoryObj<typeof HeartButton>;

export const Default: Story = {};
