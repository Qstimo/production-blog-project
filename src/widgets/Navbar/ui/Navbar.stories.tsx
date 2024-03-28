import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '../../../../config/storybook/StyleDecorators/ThemeDecorator';
import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: ThemeDecorator(Theme.LIGHT),

};
export const Dark: Story = {
  args: {
  },
  decorators: ThemeDecorator(Theme.DARK),

};
