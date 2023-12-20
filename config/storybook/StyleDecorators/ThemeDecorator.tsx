import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const ThemeDecorator = (theme: Theme) => {
    return [
        (Story) => (
            <BrowserRouter>
                <div className={`app ${theme}`}>
                    <div className="content-page">
                        <Story />
                    </div>
                </div></BrowserRouter>
        ),
    ];
}
