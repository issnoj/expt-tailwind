import type { Meta, StoryObj } from '@storybook/react';

import { Sample } from './sample';

const meta: Meta<typeof Sample> = {
  component: Sample,
  tags: ['autodocs'],
  args: {
    children: <b>Bold</b>,
  },
};

export default meta;
type Story = StoryObj<typeof Sample>;

export const Minimum: Story = {};

export const Code: Story = {
  args: {
    meta: '2-3',
    code: `
function hello() {
  const hello = 'hello';
  console.log(hello);
}
hello();
`,
  },
};

export const CodeWithDescription: Story = {
  args: {
    ...Code.args,
    desc: 'This is Sample Component.',
  },
};
