import { Meta, StoryObj } from '@storybook/react';
import { InputOtp } from '@/components/input-text';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof InputOtp> = {
  component: InputOtp,
  tags: ['autodocs'],
  args: {
    disabled: false,
    value: '',
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
      <InputOtp
        {...args}
        onChange={(e) => updateArgs({ value: e.target.value })}
        value={value}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof InputOtp>;

export const Default: Story = {
  args: {},
};
