import type { Meta, StoryObj } from '@storybook/react';

import { Xb_TextField } from './TextField';

const meta = {
  title: 'TextField',
  component: Xb_TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof Xb_TextField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    label: 'TextField',
    onChange: (e: any) => console.log(e.target.value),
  },
};
