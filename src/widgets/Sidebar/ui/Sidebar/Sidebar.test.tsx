import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'helpers/tests/renderWithTranslation/renderWithTranslation';
import React from 'react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Test toggle', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
