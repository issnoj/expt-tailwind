import { Meta, StoryObj } from '@storybook/react';
import { InputEmailFixedDomain } from '@/components/input-text';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof InputEmailFixedDomain> = {
  component: InputEmailFixedDomain,
  tags: ['autodocs'],
  args: {
    disabled: false,
    value: '',
    domain: 'gmail.com',
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
      <InputEmailFixedDomain
        {...args}
        onChange={(e) => updateArgs({ value: e.target.value })}
        value={value}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof InputEmailFixedDomain>;

export const Default: Story = {
  args: {},
};
