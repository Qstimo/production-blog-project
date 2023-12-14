import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';

describe('Button', () => {
    test('Test render', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button> test </Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
});
