import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//  @ts-ignore for all file

export const ThemeDecorator = (theme: Theme) => [
  (Story: StoryFn) => (
      <BrowserRouter>
        <div className={`app ${theme}`}>
          <div className="content-page">
            <Story />
        </div>
      </div>
    </BrowserRouter>
  ),
];
