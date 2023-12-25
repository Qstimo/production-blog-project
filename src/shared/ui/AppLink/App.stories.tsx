import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '../../../../config/storybook/StyleDecorators/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {

    },
    tags: ['autodocs'],
    args: {
        to: '/',
    },

} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
    args: {

        children: 'link',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: ThemeDecorator(Theme.LIGHT),

};
export const SECONDARY: Story = {
    args: {
        children: 'link',
        theme: AppLinkTheme.SECONDARY,

    },
    decorators: ThemeDecorator(Theme.DARK),

};
