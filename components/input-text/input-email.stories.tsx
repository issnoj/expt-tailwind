import { Meta, StoryObj } from '@storybook/react';
import { InputEmail } from '@/components/input-text';

const meta: Meta<typeof InputEmail> = {
  component: InputEmail,
  tags: ['autodocs'],
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof InputEmail>;

export const Default: Story = {
  args: {},
};
