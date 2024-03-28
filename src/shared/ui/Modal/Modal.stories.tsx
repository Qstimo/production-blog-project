import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

import { ThemeDecorator } from '../../../../config/storybook/StyleDecorators/ThemeDecorator';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adip',
    isOpen: true,
  },
  decorators: ThemeDecorator(Theme.LIGHT),

};
export const PrimaryDark: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adip',
    isOpen: true,
  },
  decorators: ThemeDecorator(Theme.DARK),

};
