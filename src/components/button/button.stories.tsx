import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
    size: 'medium',
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'Test to display on the button',
      table: {
        disable: true,
      },
    },
    size: {
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};
export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
