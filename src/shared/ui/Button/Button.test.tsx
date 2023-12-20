import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button> test </Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
});
