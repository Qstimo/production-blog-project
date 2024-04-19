import { fireEvent, screen } from '@testing-library/react';
import {componentRender} from 'helpers/tests/renderWithTranslation/renderWithTranslation';
import React from 'react';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('0');
  });
  test('Test incr', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('incr-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('1');
  });
  test('Test decr', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('decr-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('-1');
  });
});