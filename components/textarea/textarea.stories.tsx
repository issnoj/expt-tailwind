import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/textarea';
import { fn } from '@storybook/test';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  tags: ['autodocs'],
  args: {
    disabled: false,
    placeholder: 'Input text',
    onSubmit: fn(),
    minRows: 1,
  },
  decorators: [
    (Story) => (
      <div className="relative flex w-80 rounded border border-input bg-background p-4 shadow focus-within:border-primary has-[:disabled]:opacity-50">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {},
};
