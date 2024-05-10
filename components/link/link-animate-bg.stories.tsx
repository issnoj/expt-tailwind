import { Meta, StoryObj } from '@storybook/react';
import {
  linkAnimateBgDirections,
  LinkAnimateBg,
} from '@/components/link/link-animate-bg';
import { Board } from '@/components/layouts/board';

const meta: Meta<typeof LinkAnimateBg> = {
  component: LinkAnimateBg,
  tags: ['autodocs'],
  args: { href: 'javascript:void(0)', children: 'LINK', duration: 200 },
};

export default meta;

type Story = StoryObj<typeof LinkAnimateBg>;

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
        {linkAnimateBgDirections.map((direction) => (
          <LinkAnimateBg key={direction} {...args} direction={direction}>
            {direction}
          </LinkAnimateBg>
        ))}
      </Board>
      <Board className={'flex flex-col gap-4'}>
        {linkAnimateBgDirections.map((direction) => (
          <LinkAnimateBg
            key={direction}
            {...args}
            className={
              'text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 [&>span]:bg-blue-400/10'
            }
            direction={direction}
          >
            {direction}
          </LinkAnimateBg>
        ))}
      </Board>
    </div>
  ),
};
