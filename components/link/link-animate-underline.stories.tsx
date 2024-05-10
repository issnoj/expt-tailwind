import { Meta, StoryObj } from '@storybook/react';
import {
  linkAnimateUnderlinedirections,
  LinkAnimateUnderline,
} from '@/components/link/link-animate-underline';
import { Board } from '@/components/layouts/board';

const meta: Meta<typeof LinkAnimateUnderline> = {
  component: LinkAnimateUnderline,
  tags: ['autodocs'],
  args: { href: 'javascript:void(0)', children: 'LINK', duration: 200 },
};

export default meta;

type Story = StoryObj<typeof LinkAnimateUnderline>;

export const Default: Story = {
  args: {},
};

export const Samples: Story = {
  args: {},
  argTypes: {
    direction: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    href: {
      table: { disable: true },
    },
  },
  render: (args) => (
    <div className={'flex gap-4'}>
      <Board className={'flex flex-col gap-4'}>
        {linkAnimateUnderlinedirections.map((direction) => (
          <LinkAnimateUnderline key={direction} {...args} direction={direction}>
            {direction}
          </LinkAnimateUnderline>
        ))}
      </Board>
      <Board className={'flex flex-col gap-4'}>
        {linkAnimateUnderlinedirections.map((direction) => (
          <LinkAnimateUnderline
            key={direction}
            {...args}
            className={
              'text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 [&>span]:bg-blue-400'
            }
            direction={direction}
          >
            {direction}
          </LinkAnimateUnderline>
        ))}
      </Board>
    </div>
  ),
};
