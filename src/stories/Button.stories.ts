import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: { control: 'color' },
    isDisabled: { control: 'boolean' }
  },
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Red: Story = {
  args: {
    label: 'Red Button',
    color: 'red',
    isDisabled: false
  },
};

export const Green: Story = {
  args: {
    label: 'Green Button',
    color: 'green',
    isDisabled: false
  },
};

export const Violet: Story = {
  args: {
    label: 'Violet Button',
    color: 'violet',
    isDisabled: false
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    color: 'gray',
    isDisabled: true
  },
};

export const LightGreen: Story = {
  args: {
    label: "Red Button",
    color: "#00ff6e",
    isDisabled: false
  }
};
