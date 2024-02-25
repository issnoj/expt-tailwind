import type { Meta, StoryObj } from '@storybook/react';
import { Kanban } from '@/components/kanban/kanban';

const meta: Meta<typeof Kanban> = {
  component: Kanban,
};

export default meta;
type Story = StoryObj<typeof Kanban>;

export const Default: Story = {};
