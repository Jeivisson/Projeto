import { screen } from '@testing-library/react';
import { Gotop } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Gotop>', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<Gotop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchSnapshot();
  });
});
