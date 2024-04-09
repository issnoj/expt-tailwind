import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { HamburgerButton } from '@/components/animate-button/hamburger-button';

const meta: Meta<typeof HamburgerButton> = {
  component: HamburgerButton,
  tags: ['autodocs'],
  args: {
    open: false,
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();

    return (
      <HamburgerButton {...args} onClick={() => updateArgs({ open: !open })} />
    );
  },
};

export default meta;
type Story = StoryObj<typeof HamburgerButton>;

export const Default: Story = {};
