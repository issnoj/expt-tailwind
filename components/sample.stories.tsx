import type { Meta, StoryObj } from '@storybook/react';

import { Sample } from './sample';
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/jest';

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('switch'));
    await expect(canvas.getByText('function')).toBeVisible();
  },
};

export const CodeWithDescription: Story = {
  args: {
    ...Code.args,
    desc: 'This is Sample Component.',
  },
};
