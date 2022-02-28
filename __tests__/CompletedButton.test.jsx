import { CompletedButton } from '../components';
import { render, screen } from '@testing-library/react';

describe('CompletedButton component', () => {

  it('Component renders', () => {
    render(<CompletedButton completed={false} />);
    expect(screen.getByRole('checkbox')).toBeDefined();
  })

  it('Component renders checked', () => {
    render(<CompletedButton completed={true} />);
    expect(screen.getByRole('checkbox')).toHaveProperty('checked');
  })
})
