import { Meta, StoryObj } from '@storybook/react';
import { InputEmailFixedDomain, InputPassword } from '@/components/input-text';

const meta: Meta<typeof InputPassword> = {
  component: InputPassword,
  tags: ['autodocs'],
  args: {
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof InputEmailFixedDomain>;

export const Default: Story = {
  args: {},
};
